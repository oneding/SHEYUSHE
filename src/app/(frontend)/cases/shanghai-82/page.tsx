import type { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumbs, ConversionBand, SiteFooter, SiteHeader } from '../../components/SiteChrome'

export const metadata: Metadata = {
  title: '上海82㎡老房适老化焕新案例｜舍予舍',
  description: '独居长者全屋适老化模拟改造案例：问题诊断、设计策略、预算分配与预期成效。',
}
const image =
  'https://images.unsplash.com/photo-1675179181679-f636d0a7c629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600'

export default function CaseDetail() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-[1240px] px-5 py-12 lg:px-8">
          <Breadcrumbs items={[['改造案例', '/cases'], ['上海82㎡老房焕新']]} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="eyebrow">模拟案例 · 全屋安心型</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-6xl">
                为独居母亲，
                <br />
                保留熟悉与<span className="text-[#d96749]">自主</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#697970]">
                一套建于 1998
                年的两居室。女儿最担心跌倒，母亲最担心“改得像医院”。方案的关键，是让安全设施自然融入原有生活。
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                ['82㎡', '建筑面积'],
                ['21天', '预计工期'],
                ['18项', '风险消除'],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-[#edf1eb] p-5">
                  <b className="text-2xl">{n}</b>
                  <p className="mt-2 text-[11px] text-[#74837b]">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-14 min-h-[520px] overflow-hidden rounded-[30px]">
            <Image
              src={image}
              alt="长者在明亮厨房中准备食物"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-[1100px] gap-14 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
            <aside>
              <p className="eyebrow">家庭画像</p>
              <dl className="mt-7 space-y-5 text-sm">
                <div>
                  <dt className="text-[#89958f]">居住者</dt>
                  <dd className="mt-1">72 岁女性，独居</dd>
                </div>
                <div>
                  <dt className="text-[#89958f]">身体状态</dt>
                  <dd className="mt-1">膝关节退变，夜间起身 2–3 次</dd>
                </div>
                <div>
                  <dt className="text-[#89958f]">核心诉求</dt>
                  <dd className="mt-1">安全但不显老，保留做饭习惯</dd>
                </div>
              </dl>
            </aside>
            <div>
              <h2 className="text-3xl font-semibold">从 3 个高优先级问题开始</h2>
              <div className="mt-8 space-y-5">
                {[
                  [
                    '01',
                    '夜间动线中断',
                    '卧室到卫生间存在门槛、暗区与转角；改为连续低位感应照明并消除高差。',
                  ],
                  [
                    '02',
                    '洗浴缺少稳定支点',
                    '将浴缸替换为无高差淋浴，形成“进门—更衣—洗浴—离开”的连续支撑。',
                  ],
                  [
                    '03',
                    '厨房弯腰与高处取物',
                    '常用物品集中至腰肩区间，局部台面降低，并增加坐姿备餐位置。',
                  ],
                ].map(([n, t, d]) => (
                  <article
                    key={n}
                    className="grid gap-4 border-t border-[#dfe4de] pt-6 sm:grid-cols-[50px_160px_1fr]"
                  >
                    <span className="text-[#d96749]">{n}</span>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="text-sm leading-7 text-[#6d7c74]">{d}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#173c31] py-20 text-white">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
            <h2 className="text-3xl font-semibold">预算如何分配</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                ['35%', '卫生间'],
                ['24%', '厨房'],
                ['21%', '动线与照明'],
                ['20%', '卧室与预留'],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-white/15 p-6">
                  <b className="text-3xl text-[#ef9b7a]">{n}</b>
                  <p className="mt-6 text-sm">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-xs text-white/45">
              案例数据为典型户型模拟测算，仅用于说明方案逻辑，实际预算以现场勘察与材料选择为准。
            </p>
          </div>
        </section>
        <ConversionBand title="让专业评估帮您排出真正的改造优先级" />
      </main>
      <SiteFooter />
    </>
  )
}
