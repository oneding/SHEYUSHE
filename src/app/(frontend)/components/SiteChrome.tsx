import Link from 'next/link'
import type { ReactNode } from 'react'
import { SiteSearch } from './SiteSearch'

export function BrandMark() {
  return (
    <span className="relative grid size-9 place-items-center" aria-hidden="true">
      <span className="absolute h-8 w-[18px] -translate-x-1 rotate-45 rounded-full bg-[#d96749]" />
      <span className="absolute h-8 w-[18px] translate-x-1 -rotate-45 rounded-full bg-[#efb49b]" />
      <span className="absolute bottom-1 size-2.5 rounded-full bg-[#f7efe4]" />
    </span>
  )
}

const navigation = [
  ['解决方案', '/solutions'],
  ['改造案例', '/cases'],
  ['舍予标准', '/standards'],
  ['产业图谱', '/ecosystem'],
  ['知识中心', '/insights'],
  ['关于我们', '/about'],
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe4de] bg-[#f8f5ee]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[#173c31]" aria-label="舍予舍首页">
          <BrandMark />
          <span>
            <strong className="block text-lg tracking-[.18em]">舍予舍</strong>
            <span className="block text-[8px] uppercase tracking-[.24em] text-[#718078]">
              Age-friendly home
            </span>
          </span>
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm text-[#52665d] xl:flex"
          aria-label="主导航"
        >
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#c45b42]">
              {label}
            </Link>
          ))}
        </nav>
        <SiteSearch />
        <Link
          href="/assessment"
          className="hidden rounded-full bg-[#173c31] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#d96749] sm:inline-flex"
        >
          开始需求评估
        </Link>
        <details className="group relative xl:hidden">
          <summary
            aria-label="打开导航菜单"
            className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-[#bdc8c1] text-xl text-[#173c31]"
          >
            ≡
          </summary>
          <nav className="absolute right-0 top-12 grid w-48 gap-1 rounded-2xl bg-white p-3 text-sm shadow-2xl">
            {navigation.map(([label, href]) => (
              <Link key={href} className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href={href}>
                {label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="rounded-lg bg-[#173c31] px-4 py-3 font-semibold text-white"
            >
              开始需求评估
            </Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#102f27] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark />
              <strong className="text-xl tracking-[.18em]">舍予舍</strong>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              以专业重塑居家养老标准，让长者在熟悉的家中安全、有尊严地生活。
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">了解舍予舍</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/50">
              {navigation.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
              <Link href="/assessment" className="text-[#ef9b7a]">
                综合评估
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">咨询热线</p>
            <a className="mt-4 block text-2xl" href="tel:4008165060">
              400-816-5060
            </a>
            <p className="mt-2 text-xs text-white/40">每日 09:00–18:00</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-[11px] text-white/35">
          <p>© 2025 舍予舍适老化居家改造</p>
          <p>专业评估 · 科学设计 · 严选产品 · 标准交付</p>
        </div>
      </div>
    </footer>
  )
}

export function Breadcrumbs({ items }: { items: Array<[string, string?]> }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-xs text-[#74837b]" aria-label="面包屑">
      <Link href="/" className="hover:text-[#c45b42]">
        首页
      </Link>
      {items.map(([label, href]) => (
        <span key={label} className="flex items-center gap-2">
          <span>/</span>
          {href ? (
            <Link href={href} className="hover:text-[#c45b42]">
              {label}
            </Link>
          ) : (
            <span className="text-[#354d43]">{label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  children?: ReactNode
}) {
  return (
    <section className="bg-[#edf1eb]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-24">
        {children}
        <p className="eyebrow mt-10">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.18] tracking-[-.04em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#64756c]">{description}</p>
      </div>
    </section>
  )
}

export function ConversionBand({
  title = '每个家庭的答案，都应该从真实生活开始',
}: {
  title?: string
}) {
  return (
    <section className="bg-[#d96749] text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-7 px-5 py-14 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="text-xs tracking-[.18em] text-white/65">NEXT STEP</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{title}</h2>
        </div>
        <Link
          href="/assessment"
          className="inline-flex shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#b65038] transition hover:-translate-y-0.5"
        >
          开始综合需求评估 →
        </Link>
      </div>
    </section>
  )
}
