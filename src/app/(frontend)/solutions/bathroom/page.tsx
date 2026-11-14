import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../../components/SiteChrome'

export const metadata: Metadata = {
  title: '卫生间适老化改造完整方案｜舍予舍',
  description: '覆盖进入、如厕、洗浴、起身与紧急响应的卫生间适老化设计详解。',
}
const hero =
  'https://images.unsplash.com/photo-1656646523723-b660b32dbaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600'

export default function BathroomPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="BATHROOM SOLUTION"
          title={
            <>
              卫生间不是“加扶手”，
              <br />
              而是一条完整的<span className="text-[#d96749]">安全行为链</span>
            </>
          }
          description="从推门进入、转身、坐下、起身、洗浴到夜间紧急情况，逐项验证长者是否看得清、站得稳、够得着、来得及。"
        >
          <Breadcrumbs items={[['解决方案', '/solutions'], ['卫生间安全']]} />
        </PageHero>
        <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <div className="relative min-h-[520px] overflow-hidden rounded-[30px]">
            <Image
              src={hero}
              alt="带有安全扶手的适老化卫生间"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,55vw"
            />
          </div>
          <div>
            <p className="eyebrow">先判断，不盲目改</p>
            <h2 className="section-title">6 个关键风险点</h2>
            <div className="mt-8 grid gap-3">
              {[
                '门口高差与通行净宽',
                '地面湿滑与排水坡度',
                '马桶高度与起坐支撑',
                '洗浴站立时间与转身空间',
                '冷热水误操作与烫伤',
                '夜间照明与紧急呼救',
              ].map((x, i) => (
                <div
                  key={x}
                  className="flex items-center gap-4 rounded-xl bg-[#eef2ed] px-5 py-4 text-sm"
                >
                  <span className="text-[#c45b42]">0{i + 1}</span>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
            <div className="text-center">
              <p className="eyebrow">DESIGN DETAILS</p>
              <h2 className="section-title">方案落到每一个动作</h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {[
                [
                  '无高差进入',
                  '门槛控制为零高差；受结构限制时采用缓坡过渡，门扇优先外开或移门。',
                  '建议通行净宽 ≥ 800mm',
                ],
                [
                  '连续支撑系统',
                  '扶手位置由起坐、转身与洗浴动作确定，不以“墙面哪里能装”决定。',
                  '握持直径建议 32–35mm',
                ],
                [
                  '坐式洗浴',
                  '为耐力下降者设置稳定洗浴凳，龙头与花洒保持坐姿可及。',
                  '坐面高度约 420–450mm',
                ],
                [
                  '防滑与排水',
                  '选湿态防滑材料，并控制地漏位置与水流方向，避免局部积水。',
                  '以实际检测与施工验收为准',
                ],
                [
                  '恒温与防烫',
                  '恒温龙头设置最高温限制，冷热标识使用高对比而非仅靠文字。',
                  '建议上限 38–40℃',
                ],
                [
                  '夜间与应急',
                  '配置低位柔光、门外可解锁结构及跌倒后触手可及的呼叫点。',
                  '照明避免直射与眩光',
                ],
              ].map(([t, d, n]) => (
                <article key={t} className="rounded-[24px] border border-[#dfe4de] p-7">
                  <h3 className="text-xl font-semibold">{t}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6d7c74]">{d}</p>
                  <p className="mt-6 border-t border-[#e2e6e2] pt-4 text-xs text-[#b45740]">{n}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#f0e6da] py-20">
          <div className="mx-auto max-w-[1000px] px-5 lg:px-8">
            <p className="eyebrow">产品不是越多越好</p>
            <h2 className="section-title">设备选择的 4 条底线</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {['承重有验证', '湿手可操作', '清洁无死角', '未来可调整'].map((x, i) => (
                <div key={x} className="rounded-2xl bg-white p-6">
                  <span className="text-3xl text-[#d96749]">0{i + 1}</span>
                  <h3 className="mt-8 font-semibold">{x}</h3>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs leading-6 text-[#786b61]">
              注：页面尺寸为常见设计参考，不替代对具体使用者、建筑结构与产品安装条件的现场评估。
            </p>
          </div>
        </section>
        <ConversionBand title="先评估一次真实的洗浴与如厕动作" />
      </main>
      <SiteFooter />
    </>
  )
}
