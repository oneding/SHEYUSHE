# 舍予舍适老化改造官网

Next.js 16 (App Router) + React 19 + Tailwind CSS v4，表单数据写入**私有化部署的 Supabase**（腾讯云自建）。

## 架构

- 前端页面：`src/app/(frontend)/`，全部为静态页面
- 表单 Server Actions：
  - `src/app/(frontend)/actions.ts` — 咨询线索 → `public.inquiries` 表
  - `src/app/(frontend)/assessment/actions.ts` — 综合评估申请 → `public.assessment_requests` 表，照片上传至 Supabase Storage `assessment-photos` 桶，记录写入 `public.assessment_images`
- Supabase 服务端客户端：`src/lib/supabase.ts`（service_role，仅服务端可用）
- 数据库初始化：`supabase/migrations/001_init.sql`（表 + RLS + 存储桶）

## 环境变量

| 变量 | 说明 |
| --- | --- |
| `SUPABASE_URL` | 私有化 Supabase API 地址，如 `http://150.158.139.170:8000` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service_role key（仅服务端，严禁泄露到客户端） |

本地开发：复制 `.env.example` 为 `.env` 并填入实际值。
Vercel 部署：在项目 Settings → Environment Variables 中配置上述两个变量。

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 生产构建验证
```

## 部署

代码托管于 GitHub（oneding/SHEYUSHE），通过 Vercel 手动导入仓库部署，构建命令 `pnpm build`，Node 版本 20.9+。
