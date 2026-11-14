import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../components/SiteChrome'

export const metadata: Metadata = {
  title: '关于舍予舍｜中国适老化居家改造专业品牌',
  description: '舍予舍致力于建立适合中国家庭的适老化居家改造标准。',
}
const team =
  'https://images.unsplash.com/photo-1781888688940-5730c3fd5baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600'

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="ABOUT SHEYUSHE"
          title={
            <>
              舍，是空间；予，是给予。
              <br />
              我们把<span className="text-[#d96749]">安心</span>还给家。
            </>
          }
          description="舍予舍专注于适老化居家环境研究与实践，希望让专业设计不再停留在概念里，而是进入每一间真实住宅、每一个具体动作。"
        >
          <Breadcrumbs items={[['关于我们']]} />
        </PageHero>
        <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[520px] overflow-hidden rounded-[30px]">
            <Image
              src={team}
              alt="设计团队在桌前研究住宅平面图"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,50vw"
            />
          </div>
          <div>
            <p className="eyebrow">我们的出发点</p>
            <h2 className="section-title">养老不应该只发生在机构里</h2>
            <p className="mt-7 text-base leading-8 text-[#687970]">
              绝大多数长者更希望留在熟悉的社区与家中。但住宅往往只为年轻、健康的人设计：门槛、湿滑、昏暗、高处收纳，都可能随能力变化成为风险。
            </p>
            <p className="mt-5 text-base leading-8 text-[#687970]">
              舍予舍希望补上“从建筑到照护”之间缺失的一环，以跨专业评估将空间设计、辅具产品、施工技术与家庭照护连接起来。
            </p>
          </div>
        </section>
        <section className="bg-[#efe7dc] py-24">
          <div className="mx-auto max-w-[1160px] px-5 lg:px-8">
            <div className="text-center">
              <p className="eyebrow">我们的原则</p>
              <h2 className="section-title">专业，也有人情味</h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                ['不制造年龄感', '安全设施可以自然、克制地融入家，而不是把住宅变成病房。'],
                ['不替家人做决定', '充分听见长者本人、家人与照护者的不同诉求，共同确定优先级。'],
                [
                  '不销售无效设备',
                  '每件产品必须对应明确动作与风险，不能验证价值的设备不进入方案。',
                ],
              ].map(([t, d], i) => (
                <article key={t} className="rounded-[26px] bg-white p-8">
                  <span className="text-[#d96749]">0{i + 1}</span>
                  <h3 className="mt-8 text-xl font-semibold">{t}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6d7c74]">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ConversionBand title="一起为中国家庭建立更好的居家养老答案" />
      </main>
      <SiteFooter />
    </>
  )
}
