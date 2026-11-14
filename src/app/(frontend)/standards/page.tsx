import type { Metadata } from 'next'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../components/SiteChrome'
import { StandardExpansion } from './StandardExpansion'

export const metadata: Metadata = {
  title: '舍予适老化居家改造标准｜舍予舍',
  description: '融合日本介护住宅改修、欧美通用设计与中国家庭场景的适老化评估、设计和验收标准。',
}

const sources = [
  [
    '日本',
    '从介护需求出发',
    '住宅改修强调小步、及时、与照护等级适配，重视扶手、高差、门与便器等具体动作支持。',
  ],
  [
    '欧美',
    '从平等使用出发',
    '通用设计与无障碍规范强调可达、可理解、低体力负担和对不同能力人群的包容。',
  ],
  [
    '中国',
    '从家庭关系出发',
    '适配高密度住宅、既有住房结构、代际共居与家人照护，平衡安全、审美、预算和施工。',
  ],
]
const controls = [
  ['A', '人因评估', '行动、感知、认知、慢病、照护支持与未来变化'],
  ['B', '空间设计', '通行、支撑、操作、照明、识别、收纳与应急'],
  ['C', '产品验证', '适配性、安装条件、承重、防滑、耐久与可维护'],
  ['D', '施工验收', '尺寸复核、节点检查、场景测试、使用培训与资料归档'],
]

export default function StandardsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SHEYUSHE STANDARD"
          title={
            <>
              全球经验，
              <br />
              中国家庭的<span className="text-[#d96749]">落地标准</span>
            </>
          }
          description="标准不是一组冰冷尺寸，而是把人的能力、空间条件和家庭照护关系转化为一致、可执行、可验收的工作方法。"
        >
          <Breadcrumbs items={[['舍予标准']]} />
        </PageHero>
        <section className="mx-auto max-w-[1160px] px-5 py-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {sources.map(([a, b, c], i) => (
              <article key={a} className="rounded-[26px] border border-[#dfe4de] bg-white p-7">
                <span className="text-xs text-[#d96749]">0{i + 1}</span>
                <h2 className="mt-7 text-2xl font-semibold">{a}</h2>
                <p className="mt-2 text-sm font-medium text-[#8d6857]">{b}</p>
                <p className="mt-5 text-sm leading-7 text-[#6d7c74]">{c}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#173c31] py-24 text-white">
          <div className="mx-auto max-w-[1160px] px-5 lg:px-8">
            <p className="eyebrow !text-[#ef9b7a]">86 项交付检查点</p>
            <h2 className="mt-5 text-4xl font-semibold">从评估到验收，四层质量控制</h2>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {controls.map(([n, t, d]) => (
                <article
                  key={n}
                  className="grid grid-cols-[60px_1fr] gap-5 rounded-2xl border border-white/15 p-6"
                >
                  <span className="text-3xl text-[#ef9b7a]">{n}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{t}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/55">{d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1000px] px-5 py-24 lg:px-8">
          <p className="eyebrow">不是所有家庭都用同一尺寸</p>
          <h2 className="section-title">参数只是起点，动作验证才是答案</h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#687970]">
            同样身高的两位长者，因关节活动度、握力、平衡能力不同，扶手位置和坐面高度可能完全不同。舍予标准要求关键节点在现场进行动作模拟，不用“平均值”替代具体的人。
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {['看得清', '够得着', '站得稳'].map((x, i) => (
              <div key={x} className="rounded-[24px] bg-[#edf1eb] p-8">
                <span className="text-xs text-[#c45b42]">验证 0{i + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold">{x}</h3>
              </div>
            ))}
          </div>
        </section>
        <StandardExpansion />
        <ConversionBand />
      </main>
      <SiteFooter />
    </>
  )
}
