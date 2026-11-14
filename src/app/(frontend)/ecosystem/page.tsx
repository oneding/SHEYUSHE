import type { Metadata } from 'next'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../components/SiteChrome'

export const metadata: Metadata = {
  title: '全球适老化解决方案与代表产品｜舍予舍',
  description: '梳理日本、欧美与中国主流适老化解决方案提供商、代表产品方向和选型判断方法。',
}

const providerGroups = [
  {
    region: '日本',
    insight: '把产品嵌入“评估—照护—改修”体系，强调动作适配与小规模持续升级。',
    providers: [
      ['松下 AgeFree', '卫浴、移乘、室内通行与照护设备', '完整生活场景与照护服务协同'],
      ['TOTO 福祉产品', '适老洁具、坐式洗浴、扶手与无障碍卫浴', '人体工学、清洁维护与细节成熟度'],
    ],
  },
  {
    region: '欧美',
    insight: '以通用设计、无障碍合规和专业品类深度见长，形成成熟的楼梯与卫浴解决方案。',
    providers: [
      [
        'Kohler LuxStone / Walk-in',
        '低门槛淋浴、步入式洗浴与卫浴配套',
        '湿区安全、模块化改造与设计整合',
      ],
      [
        'Handicare / Stannah / Savaria',
        '直轨、曲轨楼梯升降椅及垂直通行设备',
        '楼梯场景专业化与安装适配能力',
      ],
    ],
  },
  {
    region: '中国',
    insight: '更熟悉本土户型、供应链和施工条件，正从单品供给走向成套空间解决方案。',
    providers: [
      ['箭牌“和玥”套系', '适老卫浴洁具、扶手与空间配套', '成套化表达与中国家庭审美'],
      ['九牧适老方案', '智能马桶、适老卫浴与健康监测产品', '智能化、渠道覆盖与快速服务'],
      ['瑞尔特康养卫浴', '升降、助力与康养卫浴设备', '机电一体化与专项功能产品'],
    ],
  },
]

const selection = [
  ['01', '先看人，不先看品牌', '产品必须对应具体能力、动作与风险，不能用“适老”标签代替评估。'],
  ['02', '验证安装边界', '承重墙体、给排水、电路、防水和检修条件决定产品能否安全落地。'],
  ['03', '关注长期维护', '确认耗材、备件、售后半径、断电处置与家人是否会操作。'],
  ['04', '保留升级空间', '身体状态变化后能否调节、增配或拆换，比一次配置到顶更重要。'],
]

export default function EcosystemPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SOLUTION ECOSYSTEM"
          title={
            <>
              看懂全球方案，
              <br />
              不被“<span className="text-[#d96749]">适老标签</span>”误导
            </>
          }
          description="我们关注厂商公开产品与解决方案能力，但不以品牌知名度替代适配判断。真正有效的产品，必须经过人的能力、住宅条件和安装质量三重验证。"
        >
          <Breadcrumbs items={[['解决方案图谱']]} />
        </PageHero>

        <section className="mx-auto max-w-[1180px] px-5 py-24 lg:px-8">
          <div className="space-y-8">
            {providerGroups.map((group, index) => (
              <article
                key={group.region}
                className="grid overflow-hidden rounded-[28px] border border-[#dce2dc] bg-white lg:grid-cols-[.32fr_.68fr]"
              >
                <div className="bg-[#173c31] p-8 text-white lg:p-10">
                  <span className="text-xs text-[#ef9b7a]">0{index + 1}</span>
                  <h2 className="mt-6 text-3xl font-semibold">{group.region}</h2>
                  <p className="mt-5 text-sm leading-7 text-white/55">{group.insight}</p>
                </div>
                <div className="divide-y divide-[#e1e5e1] px-7 lg:px-10">
                  {group.providers.map(([name, products, value]) => (
                    <div key={name} className="grid gap-3 py-7 sm:grid-cols-[180px_1fr]">
                      <h3 className="font-semibold">{name}</h3>
                      <div>
                        <p className="text-sm leading-6 text-[#586b62]">{products}</p>
                        <p className="mt-2 text-xs text-[#b25a43]">观察重点：{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs leading-6 text-[#7d8983]">
            以上基于厂商公开资料整理，仅用于行业与产品方向介绍，不构成品牌背书或采购推荐；具体型号、参数与供应状态以厂商当期资料为准。
          </p>
        </section>

        <section className="bg-[#efe7dc] py-24">
          <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
            <p className="eyebrow">SHEYUSHE SELECTION LOGIC</p>
            <h2 className="section-title">我们的选型，不做“品牌拼盘”</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {selection.map(([no, title, text]) => (
                <article key={no} className="rounded-[24px] bg-white p-7">
                  <span className="text-sm text-[#d96749]">{no}</span>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6b7a72]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ConversionBand title="让产品回到场景，让参数回到具体的人" />
      </main>
      <SiteFooter />
    </>
  )
}
