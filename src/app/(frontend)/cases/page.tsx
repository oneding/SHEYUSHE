import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../components/SiteChrome'

export const metadata: Metadata = {
  title: '适老化改造案例｜舍予舍',
  description: '查看不同身体能力、家庭结构与住宅条件下的适老化改造策略与成效。',
}
const images = [
  'https://images.unsplash.com/photo-1675179181679-f636d0a7c629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
  'https://images.unsplash.com/photo-1656646523588-e5e2575e2ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
  'https://images.unsplash.com/photo-1758691031818-02a1e7d90aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
]
const cases = [
  ['上海 · 82㎡ 老房焕新', '独居母亲 / 全屋安心型', '18 项风险消除 · 21 天预计工期', 'shanghai-82'],
  ['杭州 · 卫生间安全升级', '老两口 / 轻改造型', '7 天预计工期 · 湿区重点优化', ''],
  ['成都 · 认知友好环境支持', '认知症早期 / 局部优化', '路径识别 · 昼夜节律照明', ''],
]

export default function CasesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="CASE STUDIES"
          title={
            <>
              不同的家，
              <br />
              需要<span className="text-[#d96749]">不同的答案</span>
            </>
          }
          description="我们展示的不只是改造后的照片，更是每个决定背后的风险判断、家庭取舍与可验证结果。页面案例为典型需求模拟方案。"
        >
          <Breadcrumbs items={[['改造案例']]} />
        </PageHero>
        <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8">
          <div className="grid gap-7">
            {cases.map((c, i) => (
              <article
                key={c[0]}
                className="grid overflow-hidden rounded-[28px] border border-[#dde3dd] bg-white lg:grid-cols-[1.05fr_.95fr]"
              >
                <div className="relative min-h-72">
                  <Image
                    src={images[i]}
                    alt={c[0]}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw,52vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="text-xs tracking-[.16em] text-[#c45b42]">模拟案例 0{i + 1}</span>
                  <h2 className="mt-5 text-3xl font-semibold">{c[0]}</h2>
                  <p className="mt-4 text-sm text-[#8c6552]">{c[1]}</p>
                  <p className="mt-6 text-sm leading-7 text-[#6d7c74]">
                    {c[2]}。从生活动作与照护关系出发，建立优先级明确、预算可控的改造路径。
                  </p>
                  <Link
                    href={c[3] ? `/cases/${c[3]}` : '/assessment'}
                    className="mt-8 text-sm font-semibold text-[#1b4a3a]"
                  >
                    {c[3] ? '阅读完整案例' : '咨询相似需求'} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <ConversionBand />
      </main>
      <SiteFooter />
    </>
  )
}
