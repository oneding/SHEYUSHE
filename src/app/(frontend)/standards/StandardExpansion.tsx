const standards = [
  [
    '政策指导',
    '民政部等九部委《关于加快实施老年人居家适老化改造工程的指导意见》',
    '明确改造方向、对象与推荐清单',
    '转化为评估表与必改 / 建议 / 可选三级优先级',
  ],
  [
    '产品设计',
    'GB/T 45272—2025《家居产品适老化设计指南》',
    '家居产品适老化设计通用要求',
    '选型后增加真人动作测试、安装边界与维护复核',
  ],
  [
    '无障碍',
    'GB 50763—2012《无障碍设计规范》',
    '公共与居住建筑无障碍底线',
    '由静态尺寸延伸到连续动线和具体使用能力验证',
  ],
  [
    '照料设施',
    'JGJ 450—2018《老年人照料设施建筑设计标准》',
    '老年照料设施建筑设计要求',
    '筛选可用于居家的条款，并按住宅尺度与家庭照护适配',
  ],
  [
    '居家改造',
    '《居家适老化改造基本规范》及既有住宅相关技术导则',
    '扶手、防滑、门、开关与住宅改造节点',
    '关键工序影像留档、量化检测与年度复查',
  ],
]

const steps = [
  [
    '01',
    '免费双评估',
    'ADL、视听、步态平衡、病史与跌倒史 + 户型、隐患点位和动线分析，输出《评估报告》。',
  ],
  ['02', '需求确认', '与老人本人当面确认意愿、习惯和不可妥协项，而非只听子女。'],
  ['03', '定制设计', '点位图、材料清单与分级报价，标明“必改 / 建议 / 可选”。'],
  ['04', '标准施工', '关键工序按节点执行，预埋、防水、电路与隐蔽工程拍照留档。'],
  [
    '05',
    '量化验收',
    '扶手按项目方案进行拉拔测试（目标测试载荷不低于 100kg）、地面湿态防滑抽测、呼叫系统实呼演练与门宽复测。',
  ],
  ['06', '安装教学', '设备调试后对老人一对一、重复三次教学，留下大字版速查卡。'],
  [
    '07',
    '年度回访',
    '每半年上门复查安全件、每季度提醒呼叫系统自检；术后或失能变化触发改造升级二次评估。',
  ],
]

export function StandardExpansion() {
  return (
    <>
      <section className="bg-[#ece4d9] py-24">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <p className="eyebrow">我们的企业标准主张</p>
          <blockquote className="mt-8 max-w-5xl text-3xl font-semibold leading-[1.45] tracking-[-.025em] text-[#173c31] sm:text-4xl">
            “我们不是装修队，也不是卖设备的——我们要做中国居家适老化改造标准的定义者。”
          </blockquote>
          <p className="mt-8 max-w-4xl text-base leading-8 text-[#64746c]">
            以适用国家、行业、团体标准和政策指导为底线，在企业交付层面进一步加严：双评估入场、量化参数施工、关键承重件拉拔测试、年度回访服务。每个交付点位关联适用标准条款或舍予企业节点编号，可查询、可复核、可追责。
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {[
              ['2', '类评估同时入场'],
              ['3', '级需求优先标注'],
              ['100kg', '扶手目标测试载荷*'],
              ['1年', '交付后持续跟踪'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white p-6">
                <strong className="text-3xl text-[#d96749]">{value}</strong>
                <p className="mt-3 text-xs text-[#6c7b73]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] leading-5 text-[#81766d]">
            *
            具体测试方法、设计载荷与判定标准须结合产品说明、墙体基层、连接方式及适用规范，由专业人员制定；不得以单一数字替代结构安全判断。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">STANDARD CROSSWALK</p>
          <h2 className="section-title">符合是底线，加严在交付细节</h2>
          <p className="mt-6 text-sm leading-7 text-[#687970]">
            我们将规范语言转译为设计点位、施工工序和验收证据。是否“适用”由项目类型、住宅条件和具体产品共同决定，不机械套用公共建筑参数。
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-[24px] border border-[#dfe4de] bg-white">
          <div className="hidden grid-cols-[120px_1.5fr_1fr_1.2fr] gap-5 bg-[#173c31] px-6 py-4 text-xs text-white/70 md:grid">
            <span>层级</span>
            <span>主要依据</span>
            <span>规范关注</span>
            <span>舍予加严</span>
          </div>
          <div className="divide-y divide-[#e2e6e2]">
            {standards.map(([level, standard, baseline, higher]) => (
              <div
                key={standard}
                className="grid gap-3 px-6 py-6 text-sm md:grid-cols-[120px_1.5fr_1fr_1.2fr] md:gap-5"
              >
                <strong className="text-[#b75942]">{level}</strong>
                <span className="font-medium leading-6">{standard}</span>
                <span className="leading-6 text-[#6b7b73]">{baseline}</span>
                <span className="leading-6 text-[#365248]">{higher}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-5 text-xs leading-6 text-[#7b8881]">
          GB/T 45272—2025 按公开发布信息于 2025 年 9 月 1
          日实施。项目执行时将核验标准最新版本、适用范围及地方要求。
        </p>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <p className="eyebrow">SEVEN-STEP DELIVERY</p>
          <h2 className="section-title">七步交付，把承诺变成证据</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {steps.map(([no, title, description], index) => (
              <article
                key={no}
                className={`grid grid-cols-[58px_1fr] gap-5 rounded-[22px] border p-6 ${index === 0 ? 'border-[#d96749] bg-[#fff7f2]' : 'border-[#dfe4de]'}`}
              >
                <span className="text-xl text-[#d96749]">{no}</span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#687970]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-20 lg:px-8">
        <details className="group rounded-[24px] border border-[#dfe4de] bg-[#f5f3ed] p-6 open:bg-white">
          <summary className="cursor-pointer list-none text-lg font-semibold">
            主要参考来源 <span className="float-right text-[#d96749] group-open:rotate-45">＋</span>
          </summary>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#65766d]">
            <li>
              民政部等九部委《关于加快实施老年人居家适老化改造工程的指导意见》（2020 年 7
              月）及推荐清单
            </li>
            <li>市场监管总局发布的 GB/T 45272—2025《家居产品适老化设计指南》</li>
            <li>
              GB 50763—2012《无障碍设计规范》、JGJ
              450—2018《老年人照料设施建筑设计标准》及《居家适老化改造基本规范》
            </li>
            <li>住房城乡建设领域既有住宅适老化改造相关技术导则与条款</li>
            <li>
              日本介护保险住宅改修制度、德国护理保险制度、瑞典原居安老政策及美国老年与无障碍相关法律体系
            </li>
          </ul>
        </details>
      </section>
    </>
  )
}
