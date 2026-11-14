import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../../components/SiteChrome'

export const metadata: Metadata = {
  title: '全屋分空间适老化改造方案｜舍予舍',
  description:
    '玄关、客厅、卧室、厨房、过道与卫生间的完整适老化改造方案，覆盖安全通行、起居、照护与专项需求。',
}

const bathroomImage =
  'https://images.unsplash.com/photo-1756312178806-448bbb981d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600'

const spaces = [
  {
    slug: 'entrance',
    no: '01',
    name: '玄关',
    goal: '进得来、坐得稳、换得轻松',
    risk: '门槛绊倒、换鞋失衡、照明延迟、双手持物时开门困难',
    actions: [
      '消除或缓坡处理入户高差，门垫嵌平且边缘不翘起',
      '设置稳定换鞋凳与起身支点，坐面高度按本人膝高验证',
      '钥匙、门禁、开关和常用收纳集中在易触及范围',
      '配置入户感应照明，避免人在暗处寻找开关',
    ],
    metric: '重点复核：高差、开门力、坐面稳定、照明响应',
  },
  {
    slug: 'living-room',
    no: '02',
    name: '客厅',
    goal: '走得顺、坐得起、看得清',
    risk: '家具挤占动线、地毯卷边、低矮茶几碰撞、沙发过低难起身',
    actions: [
      '建立从玄关到卧室、卫生间的连续无障碍主通道',
      '沙发坐深、坐高与扶手位置通过起坐动作测试确定',
      '电线靠墙固定，取消通道中的临时插线板和低矮障碍',
      '控制电视与窗面反光，阅读区增加局部照明',
    ],
    metric: '重点复核：连续通行、转身空间、起坐动作、眩光',
  },
  {
    slug: 'bedroom',
    no: '03',
    name: '卧室',
    goal: '起得稳、夜间不迷路、照护有空间',
    risk: '床过高或过低、床边无支撑、夜间暗区、衣物高处取放',
    actions: [
      '床沿高度匹配足底着地与膝髋发力，避免软塌床垫',
      '床到卫生间设置低位连续感应照明，不直射眼睛',
      '床边预留站立、轮椅或照护者辅助位置',
      '常穿衣物与药品收纳下移，抽屉使用易握把手',
    ],
    metric: '重点复核：床沿高度、床侧净空、夜间照度、取物范围',
  },
  {
    slug: 'kitchen',
    no: '04',
    name: '厨房',
    goal: '够得着、看得见、关得掉',
    risk: '高处取物、弯腰搬重物、明火遗忘、台面高度不适',
    actions: [
      '高频物品集中在腰肩之间，重物不放高柜和低柜深处',
      '为耐力下降者设置坐姿备餐位，并预留膝部空间',
      '使用高对比、易识别的水电气控制与关闭提示',
      '完善燃气、烟雾与溢水监测，报警需被本人和家人感知',
    ],
    metric: '重点复核：坐姿可及、操作力、关断逻辑、报警有效性',
  },
  {
    slug: 'corridor',
    no: '05',
    name: '过道',
    goal: '连续支撑、没有暗角、转弯不失衡',
    risk: '净宽不足、转角视线受阻、灯光明暗突变、扶手中断',
    actions: [
      '清除临时堆物，按助行器或轮椅需求复核连续净宽',
      '长距离通道设置稳定支点，转角处避免支撑突然中断',
      '踢脚、门洞与墙面形成适度明度对比，帮助识别边界',
      '夜间照明连续覆盖，不在转角和门前形成暗区',
    ],
    metric: '重点复核：最窄点、转弯半径、支撑连续性、照度过渡',
  },
]

const bathroomZones = [
  ['进入', '零高差优先；门扇宜外开或移门，并保留紧急外部开启能力。'],
  ['如厕', '马桶高度与本人起坐能力匹配；扶手方向由转身、落座和起身动作确定。'],
  ['洗浴', '优先坐式洗浴；花洒、恒温龙头与置物在坐姿可及范围内。'],
  ['台盆', '支持坐姿靠近，镜面、龙头与收纳兼顾站姿和坐姿使用。'],
  ['地面', '湿态防滑、排水顺畅、无局部积水；色彩和纹理避免视觉误判。'],
  ['应急', '跌倒后可触及的呼叫点、低位照明、门外解锁与家人响应闭环。'],
]

const packages = [
  ['快速安全型', '适合暂不大拆改', '防滑、照明、扶手、换鞋凳、收纳下移与风险点清除'],
  ['行动辅助型', '适合助行器 / 轮椅', '连续通行、回转、移乘、坐姿操作与门洞优化'],
  ['认知友好型', '适合记忆与定向下降', '路径提示、危险收纳、昼夜节律、简化操作与走失预防'],
  ['照护减负型', '适合家人协助照护', '辅助站位、移乘空间、起身支持、设备预留与应急响应'],
]

const spaceLinks = [
  ['/solutions/whole-home/entrance', '玄关'],
  ['/solutions/whole-home/living-room', '客厅'],
  ['/solutions/whole-home/bedroom', '卧室'],
  ['/solutions/whole-home/kitchen', '厨房'],
  ['/solutions/whole-home/corridor', '过道'],
  ['/solutions/bathroom', '卫生间'],
]

export default function WholeHomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="WHOLE-HOME SOLUTION"
          title={
            <>
              全屋不是六个房间，
              <br />
              而是一条<span className="text-[#d96749]">连续生活动线</span>
            </>
          }
          description="从入户、起居、休息、做饭到夜间如厕，把每个动作前后的风险连接起来。按空间逐项改造，按能力变化为未来预留。"
        >
          <Breadcrumbs items={[['解决方案', '/solutions'], ['全屋分空间方案']]} />
        </PageHero>

        <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {spaceLinks.map(([href, space], index) => (
              <Link
                key={space}
                href={href}
                className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${index === 5 ? 'border-[#d96749] bg-[#fff3ed]' : 'border-[#dfe4de] bg-white'}`}
              >
                <span className="text-xs text-[#d96749]">0{index + 1}</span>
                <strong className="mt-6 block">{space}</strong>
                {index === 5 && (
                  <span className="mt-2 block text-[10px] text-[#b3543d]">核心高风险区</span>
                )}
                <span className="mt-5 block text-[10px] font-semibold text-[#a6533d]">
                  查看完整方案 →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 pb-24 lg:px-8">
          <div className="space-y-5">
            {spaces.map((space, index) => (
              <Link
                id={`space-${index + 1}`}
                key={space.name}
                href={`/solutions/whole-home/${space.slug}`}
                className="scroll-mt-28 overflow-hidden rounded-[28px] border border-[#dfe4de] bg-white"
              >
                <div className="grid lg:grid-cols-[.34fr_.66fr]">
                  <div className="bg-[#edf1eb] p-7 lg:p-9">
                    <span className="text-sm text-[#d96749]">{space.no}</span>
                    <h2 className="mt-6 text-3xl font-semibold">{space.name}</h2>
                    <p className="mt-3 text-sm font-medium text-[#8b604f]">{space.goal}</p>
                    <p className="mt-8 text-xs leading-6 text-[#718078]">
                      <strong className="text-[#40584e]">常见风险：</strong>
                      {space.risk}
                    </p>
                  </div>
                  <div className="p-7 lg:p-9">
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {space.actions.map((action) => (
                        <li key={action} className="flex gap-3 text-sm leading-7 text-[#5e7067]">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#d96749]" />
                          {action}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-7 border-t border-[#e2e6e2] pt-5 text-xs text-[#a1523d]">
                      {space.metric}
                    </p>
                    <span className="mt-5 inline-flex text-xs font-semibold text-[#1b4a3a]">
                      查看{space.name}完整方案 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="space-6" className="scroll-mt-20 bg-[#173c31] py-24 text-white">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow !text-[#ef9b7a]">重点空间 06 · 卫生间</p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  把最高风险的空间，
                  <br />
                  拆成六个动作区
                </h2>
                <p className="mt-6 text-sm leading-8 text-white/60">
                  卫生间是跌倒、烫伤、起身困难与紧急响应问题叠加的空间。方案必须同时处理建筑条件、设备位置、身体能力和照护介入。
                </p>
                <Link
                  href="/solutions/bathroom"
                  className="mt-8 inline-flex rounded-full bg-[#d96749] px-6 py-3.5 text-sm font-semibold"
                >
                  查看卫生间专项深度方案 →
                </Link>
              </div>
              <div className="relative min-h-[520px] overflow-hidden rounded-[30px]">
                <Image
                  src={bathroomImage}
                  alt="轮椅使用者在无障碍卫生间内使用手持花洒"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw,55vw"
                />
              </div>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bathroomZones.map(([title, text], index) => (
                <article key={title} className="rounded-2xl border border-white/15 p-6">
                  <span className="text-xs text-[#ef9b7a]">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
            <p className="eyebrow">专项改造组合</p>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="section-title">按能力与预算，组合而不是套模板</h2>
              <Link
                href="/solutions/special-populations"
                className="text-sm font-semibold text-[#b65640]"
              >
                查看六类人群专项方案 →
              </Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {packages.map(([name, fit, content], index) => (
                <article key={name} className="rounded-[24px] border border-[#dfe4de] p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#d96749]">0{index + 1}</span>
                    <span className="rounded-full bg-[#edf1eb] px-3 py-1 text-[10px] text-[#5c7066]">
                      {fit}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold">{name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#687970]">{content}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-xs leading-6 text-[#7b8881]">
              页面参数与措施为设计判断框架，不替代对本人身体机能、住宅结构、设备安装和当地规范的现场评估。
            </p>
          </div>
        </section>

        <ConversionBand title="从全屋风险地图开始，排出真正的改造优先级" />
      </main>
      <SiteFooter />
    </>
  )
}
