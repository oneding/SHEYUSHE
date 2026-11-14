-- 舍予舍官网 · Supabase 初始化迁移
-- 在 Supabase Studio (SQL Editor) 或 psql 中执行一次即可。

-- ============ 咨询线索 ============
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  city text not null,
  need text not null check (need in ('bathroom','whole-home','mobility','dementia','assessment')),
  message text,
  status text not null default 'new' check (status in ('new','contacted','assessing','completed')),
  created_at timestamptz not null default now()
);

-- ============ 综合评估申请 ============
create table if not exists public.assessment_requests (
  id uuid primary key default gen_random_uuid(),
  -- 房屋位置
  city text not null,
  district text not null,
  community text not null,
  address text,
  floor integer not null,
  total_floors integer not null,
  has_elevator boolean not null default false,
  -- 户型与装修
  property_type text not null check (property_type in ('apartment','old-house','self-built','villa','other')),
  layout text not null,
  area numeric not null,
  building_age text,
  renovation_status text not null check (renovation_status in ('unfinished','good','aged','recent','unknown')),
  renovation_year text,
  occupied_during_work boolean not null default false,
  -- 长者情况
  elder_count integer not null,
  elder_ages text not null,
  health_conditions text[] not null default '{}',
  mobility_level text not null check (mobility_level in ('independent','aided','wheelchair','assisted','bedridden')),
  care_arrangement text not null check (care_arrangement in ('alone','couple','family','caregiver','other')),
  -- 需求与预算
  needs text[] not null default '{}',
  priority_area text not null,
  budget text check (budget in ('under-30k','30k-80k','80k-150k','150k-300k','over-300k','undecided')),
  timeline text check (timeline in ('asap','1-3m','3-6m','later','research')),
  notes text,
  -- 联系方式
  contact_name text not null,
  phone text not null,
  best_contact_time text check (best_contact_time in ('morning','afternoon','evening','anytime')),
  status text not null default 'new' check (status in ('new','contacted','assessing','completed')),
  created_at timestamptz not null default now()
);

-- ============ 评估现场照片 ============
create table if not exists public.assessment_images (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessment_requests(id) on delete cascade,
  storage_path text not null,
  alt text,
  created_at timestamptz not null default now()
);

create index if not exists assessment_images_assessment_idx
  on public.assessment_images(assessment_id);
create index if not exists inquiries_created_idx on public.inquiries(created_at desc);
create index if not exists assessment_requests_created_idx on public.assessment_requests(created_at desc);

-- ============ RLS：服务端使用 service_role（绕过 RLS），anon 仅允许插入 ============
alter table public.inquiries enable row level security;
alter table public.assessment_requests enable row level security;
alter table public.assessment_images enable row level security;

drop policy if exists "anon can insert inquiries" on public.inquiries;
create policy "anon can insert inquiries" on public.inquiries
  for insert to anon with check (true);

drop policy if exists "anon can insert assessment_requests" on public.assessment_requests;
create policy "anon can insert assessment_requests" on public.assessment_requests
  for insert to anon with check (true);

-- ============ 存储桶：评估照片（私有，service_role 上传） ============
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'assessment-photos',
  'assessment-photos',
  false,
  8388608,
  array['image/jpeg','image/png','image/webp']
)
on conflict (id) do nothing;
