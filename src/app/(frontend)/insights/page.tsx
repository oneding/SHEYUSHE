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
  title: '适老化知识中心｜舍予舍',
  description: '适老化居家改造、国际发展、产品选择与家庭照护的专业知识。',
}
const image =
  'https://images.unsplash.com/photo-1758691031818-02a1e7d90aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600'
const posts = [
  [
    '实用指南',
    '卫生间扶手并非装得越多越安全',
    '位置、方向、握持与墙体安装条件，任何一项错误都可能让扶手失效。',
  ],
  [
    '家庭决策',
    '父母拒绝适老化改造，应该怎么沟通？',
    '从“你老了”转向“让生活更轻松”，尊重长者对家的控制感。',
  ],
  [
    '产品观察',
    '选择适老产品时，先问这五个问题',
    '从动作、能力、场景、安装和维护判断产品是否真的适合。',
  ],
]

export default function InsightsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="INSIGHTS"
          title={
            <>
              理解老去，
              <br />
              才能<span className="text-[#d96749]">设计未来</span>
            </>
          }
          description="把全球经验、专业标准和一线实践转化为家庭看得懂、用得上的居家养老知识。"
        >
          <Breadcrumbs items={[['知识中心']]} />
        </PageHero>
        <section className="mx-auto max-w-[1160px] px-5 py-24 lg:px-8">
          <Link
            href="/insights/global-evolution"
            className="group grid overflow-hidden rounded-[30px] bg-[#173c31] text-white lg:grid-cols-[1.08fr_.92fr]"
          >
            <div className="relative min-h-80">
              <Image
                src={image}
                alt="老年夫妇在家中相伴生活"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width:1024px)100vw,55vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-xs tracking-[.16em] text-[#ef9b7a]">本月专题</span>
              <h2 className="mt-5 text-3xl font-semibold leading-snug">
                从“无障碍”到“原居安老”：全球适老化住宅的演进
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/60">
                为什么今天的适老化，不再只是给轮椅留出通道？
              </p>
              <span className="mt-8 text-sm font-semibold">阅读全文 →</span>
            </div>
          </Link>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {posts.map(([tag, t, d]) => (
              <article key={t} className="rounded-[24px] border border-[#dfe4de] bg-white p-7">
                <span className="text-xs text-[#c45b42]">{tag}</span>
                <h2 className="mt-5 text-xl font-semibold leading-snug">{t}</h2>
                <p className="mt-4 text-sm leading-7 text-[#6d7c74]">{d}</p>
                <Link
                  href="/assessment"
                  className="mt-7 inline-block text-sm font-semibold text-[#1b4a3a]"
                >
                  咨询相关问题 →
                </Link>
              </article>
            ))}
          </div>
        </section>
        <ConversionBand title="有具体问题？让规划师给您更针对性的建议" />
      </main>
      <SiteFooter />
    </>
  )
}
