import type { Metadata } from 'next'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../../components/SiteChrome'

export const metadata: Metadata = {
  title: '分人群专项适老化解决方案｜舍予舍',
  description: '面向帕金森、下肢残疾、小脑萎缩、认知障碍、视力障碍与偏瘫人群的居家环境改造重点。',
}

const populations = [
  {
    name: '帕金森',
    risk: '冻结步态、转身困难、震颤与体位变化风险',
    points: [
      '连续而不过度阻碍的行走路径',
      '转角减少杂物并设置视觉节律提示',
      '大尺寸、低操作力的开关与把手',
      '床边及卫生间设置稳定起身支点',
    ],
    tone: 'bg-[#e8eee8]',
  },
  {
    name: '下肢残疾',
    risk: '轮椅通行、回转、侧向移乘与坐姿操作',
    points: [
      '关键门洞与连续通行净宽复核',
      '床、马桶、淋浴区预留移乘空间',
      '台盆及操作台设置膝部容纳',
      '高频物品集中至坐姿可及范围',
    ],
    tone: 'bg-[#eee7de]',
  },
  {
    name: '小脑萎缩',
    risk: '平衡、协调与距离判断能力下降',
    points: [
      '缩短无支撑行走距离',
      '设置连续扶手与稳定停靠点',
      '减少高差、反光和复杂地面图案',
      '家具边角缓冲并保持通道清晰',
    ],
    tone: 'bg-[#e9e7ef]',
  },
  {
    name: '认知障碍',
    risk: '定向困难、误操作、昼夜节律与走失',
    points: [
      '用熟悉物件和高对比标识帮助定向',
      '危险物品隐蔽收纳但不影响消防疏散',
      '建立昼亮夜暗的节律照明',
      '设备界面减少步骤与相似按钮',
    ],
    tone: 'bg-[#f1e5dc]',
  },
  {
    name: '视力障碍',
    risk: '低对比、眩光、暗适应与障碍物识别',
    points: [
      '均匀照明并控制反射眩光',
      '门、墙、扶手和洁具形成明度对比',
      '关键节点增加触觉与语音提示',
      '避免通道内悬空或低矮障碍',
    ],
    tone: 'bg-[#e5ecec]',
  },
  {
    name: '偏瘫',
    risk: '单侧无力、转移方向与单手操作',
    points: [
      '按健侧与患侧确定扶手和移乘方向',
      '门、龙头与收纳支持单手操作',
      '床边、马桶与洗浴座高度协同',
      '为照护者预留辅助站位与发力空间',
    ],
    tone: 'bg-[#eee9dd]',
  },
]

export default function SpecialPopulationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SPECIALIZED SOLUTIONS"
          title={
            <>
              同一种户型，
              <br />
              不同身体状态有<span className="text-[#d96749]">不同答案</span>
            </>
          }
          description="诊断名称不能直接生成改造清单。我们从实际动作能力、变化阶段、照护方式与住宅条件出发，为六类典型人群明确环境支持重点。"
        >
          <Breadcrumbs items={[['解决方案', '/solutions'], ['分人群专项方案']]} />
        </PageHero>

        <section className="mx-auto max-w-[1200px] px-5 py-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {populations.map((item, index) => (
              <article key={item.name} className={`rounded-[28px] p-7 sm:p-9 ${item.tone}`}>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-xs text-[#b65a43]">专项 0{index + 1}</span>
                    <h2 className="mt-4 text-3xl font-semibold">{item.name}</h2>
                  </div>
                  <span className="rounded-full border border-[#243f35]/15 px-3 py-1 text-[10px] text-[#52675e]">
                    需双评估
                  </span>
                </div>
                <p className="mt-6 text-sm font-medium text-[#8d604f]">{item.risk}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-[#52665d]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d96749]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[24px] border border-[#e2c5b7] bg-[#fff7f2] p-6 text-sm leading-7 text-[#775b4e]">
            <strong className="text-[#a04e38]">重要说明：</strong>
            专项方案属于环境支持，不替代医疗诊断、康复治疗或专业辅具处方。实际设计需结合医生、康复治疗师或作业治疗师建议，并由本人参与动作测试。
          </div>
        </section>

        <section className="bg-[#173c31] py-24 text-white">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
            <p className="eyebrow !text-[#ef9b7a]">共通原则</p>
            <h2 className="mt-5 text-4xl font-semibold">先评估能力，再匹配空间</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ['身体机能', '步态、平衡、握力、视听、认知与耐力'],
                ['关键动作', '起身、转身、移乘、如厕、洗浴与烹饪'],
                ['变化预案', '术后、进展、辅具升级与照护关系变化'],
              ].map(([title, text], index) => (
                <div key={title} className="rounded-2xl border border-white/15 p-6">
                  <span className="text-sm text-[#ef9b7a]">0{index + 1}</span>
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ConversionBand title="从一次身体机能与住宅环境双评估开始" />
      </main>
      <SiteFooter />
    </>
  )
}
