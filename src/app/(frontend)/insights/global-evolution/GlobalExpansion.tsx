const countries = [
  {
    country: '日本',
    period: '1990s 至今',
    system: '介护保险住宅改修 + 福祉住环境协调',
    detail:
      '以约 20 万日元住宅改修额度为典型制度工具，按个人负担比例执行；常见范围包括扶手、高差、地面、门与便器。',
    lesson: '先评估照护需求，再做小规模、可持续升级；老人准确表达需求，不承担产品筛选压力。',
  },
  {
    country: '北欧',
    period: '1980s 至今',
    system: '原居安老 + 地方政府住宅支持',
    detail: '以瑞典“尽可能长久住在自己家”为代表，住宅改造、辅具、居家服务与社区照护协同工作。',
    lesson: '不要把改造孤立成装修项目；必须考虑照护服务能否进入、辅具能否维护与未来变化。',
  },
  {
    country: '德国',
    period: '1990s 至今',
    system: '护理保险 + 改善居住环境补助',
    detail:
      '《护理保险法》建立长期照护支持框架，住宅环境改善补助随政策持续调整，强调减少照护难度与维持独立生活。',
    lesson: '把“减轻照护者负担”纳入项目收益；补助额度与资格必须按当地当期政策核验。',
  },
  {
    country: '美国',
    period: '1960s 至今',
    system: '老年政策 + 公平住房 + ADA + 市场服务',
    detail:
      '《美国老年法》、公平住房修正案与 ADA 共同建立权益和可达性框架，跌倒预防、通用设计和市场化居家照护持续发展。',
    lesson: '规范提供底线，通用设计提高长期价值；同时用跌倒与照护成本数据帮助家庭提前决策。',
  },
]

export function GlobalExpansion() {
  return (
    <>
      <section className="mx-auto max-w-[1180px] px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">FOUR SYSTEMS, ONE DIRECTION</p>
          <h2 className="section-title">四条路径，最终都回到“在家生活”</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {countries.map((item, index) => (
            <article
              key={item.country}
              className="rounded-[26px] border border-[#dfe4de] bg-white p-7"
            >
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-3xl font-semibold">{item.country}</h3>
                <span className="text-xs text-[#b15a44]">{item.period}</span>
              </div>
              <p className="mt-6 text-sm font-semibold text-[#365247]">{item.system}</p>
              <p className="mt-4 text-sm leading-7 text-[#687970]">{item.detail}</p>
              <div className="mt-6 rounded-xl bg-[#edf1eb] p-4 text-sm leading-6 text-[#40584e]">
                <span className="mr-2 text-[#d96749]">借鉴 0{index + 1}</span>
                {item.lesson}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-[#7b8881]">
          各国补助额度、报销比例与申请资格会随政策和个人情况变化，页面用于比较制度逻辑，不作为申请依据。
        </p>
      </section>

      <section className="bg-[#efe7dc] py-24">
        <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
          <p className="eyebrow">少走弯路的 6 条经验</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['不要等跌倒后再改', '从预防开始，成本和生活扰动通常更可控。'],
              ['不要把尺寸当答案', '规范尺寸必须与本人动作测试结合。'],
              ['不要只和子女沟通', '长者本人是需求确认与使用教学的核心。'],
              ['不要一次配置到顶', '按能力变化分期，并为升级预留条件。'],
              ['不要设备交付即结束', '教学、维护、复查决定长期效果。'],
              ['不要复制海外户型', '借鉴制度与方法，参数必须本土化验证。'],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-2xl bg-white p-6">
                <span className="text-sm text-[#d96749]">0{index + 1}</span>
                <h3 className="mt-6 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#687970]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
