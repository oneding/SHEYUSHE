import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteSearch } from './components/SiteSearch'
import { ConsultationForm } from './ConsultationForm'

export const metadata: Metadata = {
  title: '舍予舍｜中国家庭适老化居家改造解决方案',
  description:
    '基于日本与欧美适老化经验，为中国家庭提供从专业评估、方案设计、产品适配到施工验收的一站式居家改造服务。',
}

const bathroomImage =
  'https://images.unsplash.com/photo-1656646523653-fffffc75b0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhY2Nlc3NpYmxlJTIwYmF0aHJvb20lMjBtb2Rlcm4lMjBpbnRlcmlvciUyMHNob3dlcnxlbnwxfHx8fDE3OTQ2MTE3OTJ8MA&ixlib=rb-4.1.0&q=85&w=1600'
const kitchenImage =
  'https://images.unsplash.com/photo-1675179181679-f636d0a7c629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxlbGRlcmx5JTIwd29tYW4lMjBob21lJTIwa2l0Y2hlbiUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3OTQ2MTE3OTN8MA&ixlib=rb-4.1.0&q=85&w=1600'
const livingImage =
  'https://images.unsplash.com/photo-1772475385289-17fbb414ed74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMGFzaWFuJTIwY291cGxlJTIwbW9kZXJuJTIwaG9tZSUyMGludGVyaW9yfGVufDF8fHx8MTc5NDYxMTc5Mnww&ixlib=rb-4.1.0&q=85&w=1600'

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Mark() {
  return (
    <span className="relative grid size-10 place-items-center" aria-hidden="true">
      <span className="absolute h-9 w-5 -translate-x-1 rotate-45 rounded-full bg-[#d96749]" />
      <span className="absolute h-9 w-5 translate-x-1 -rotate-45 rounded-full bg-[#efb49b]" />
      <span className="absolute bottom-1 size-3 rounded-full bg-[#f7efe4]" />
    </span>
  )
}

const scenarioCards = [
  {
    no: '01',
    title: '卫生间',
    text: '防滑、起坐、洗浴与夜间如厕，降低家中最高频的跌倒风险。',
    icon: '浴',
    href: '/solutions/bathroom',
  },
  {
    no: '02',
    title: '卧室',
    text: '优化床边动线、照明与收纳，让夜间起身更从容。',
    icon: '卧',
    href: '/solutions/whole-home/bedroom',
  },
  {
    no: '03',
    title: '厨房',
    text: '重设操作高度与取物范围，让长者继续安全地做饭。',
    icon: '厨',
    href: '/solutions/whole-home/kitchen',
  },
  {
    no: '04',
    title: '全屋通行',
    text: '消除高差、拓宽回转空间，兼顾助行器与轮椅使用。',
    icon: '行',
    href: '/solutions/whole-home/corridor',
  },
]

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f8f5ee] text-[#1d332c]">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/20">
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <a href="/" className="flex items-center gap-3 text-white" aria-label="舍予舍首页">
            <Mark />
            <span>
              <strong className="block text-xl tracking-[.18em]">舍予舍</strong>
              <span className="block text-[9px] uppercase tracking-[.24em] text-white/65">
                Age-friendly home
              </span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm text-white/85 xl:flex"
            aria-label="主导航"
          >
            <a className="transition hover:text-white" href="/solutions">
              解决方案
            </a>
            <a className="transition hover:text-white" href="/cases">
              改造案例
            </a>
            <a className="transition hover:text-white" href="/standards">
              舍予标准
            </a>
            <a className="transition hover:text-white" href="/ecosystem">
              产业图谱
            </a>
            <a className="transition hover:text-white" href="/insights">
              知识中心
            </a>
            <a className="transition hover:text-white" href="/about">
              关于我们
            </a>
          </nav>
          <SiteSearch variant="dark" />
          <a
            href="/assessment"
            className="hidden rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white hover:text-[#173c31] sm:inline-flex"
          >
            开始需求评估
          </a>
          <details className="group relative xl:hidden">
            <summary
              aria-label="打开导航菜单"
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/30 text-white"
            >
              <span className="text-xl">≡</span>
            </summary>
            <nav className="absolute right-0 top-12 grid w-48 gap-1 rounded-2xl bg-white p-3 text-sm text-[#243c34] shadow-2xl">
              <a className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href="/solutions">
                解决方案
              </a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href="/cases">
                改造案例
              </a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href="/standards">
                舍予标准
              </a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href="/ecosystem">
                产业图谱
              </a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href="/insights">
                知识中心
              </a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href="/about">
                关于我们
              </a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#f3f0e8]" href="/assessment">
                需求评估
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="relative min-h-[760px] bg-[#173c31]">
        <Image
          src={livingImage}
          alt="温暖明亮的适老化家庭客厅"
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,56,45,.98)_0%,rgba(18,56,45,.82)_42%,rgba(18,56,45,.18)_82%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,44,36,.55),transparent_45%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1240px] items-center px-5 pb-20 pt-32 lg:px-8">
          <div className="max-w-[680px] text-white">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs tracking-[.16em] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[#f09b79]" />
              让家，陪伴每一个人生阶段
            </span>
            <h1 className="text-[44px] font-semibold leading-[1.15] tracking-[-.04em] sm:text-6xl lg:text-[72px]">
              安心养老，
              <br />
              从一个<span className="text-[#ef9a78]">懂你</span>的家开始
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              融合日本精细化经验与欧美通用设计体系，为中国家庭提供从评估、设计到施工的一站式适老化居家改造。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/assessment"
                className="inline-flex items-center gap-3 rounded-full bg-[#d96749] px-7 py-4 text-sm font-semibold shadow-[0_10px_35px_rgba(217,103,73,.3)] transition hover:-translate-y-0.5 hover:bg-[#c85b40]"
              >
                开始综合需求评估 <Arrow />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-4 text-sm font-medium transition hover:bg-white/10"
              >
                查看真实改造逻辑
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 right-5 hidden items-center gap-5 text-white lg:flex lg:right-8">
            <div className="text-right">
              <p className="text-3xl font-medium">12+</p>
              <p className="text-xs tracking-wider text-white/55">专业评估维度</p>
            </div>
            <span className="h-10 w-px bg-white/25" />
            <div>
              <p className="text-3xl font-medium">86</p>
              <p className="text-xs tracking-wider text-white/55">项交付检查点</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-[1160px] px-5 lg:px-8">
        <div className="grid overflow-hidden rounded-[24px] bg-white shadow-[0_16px_50px_rgba(31,61,51,.12)] sm:grid-cols-3">
          {[
            ['不知道从哪里改起？', '查看全屋风险与空间方案', '评', '/solutions/whole-home'],
            [
              '父母最近行动不便？',
              '按身体能力匹配专项方案',
              '适',
              '/solutions/special-populations',
            ],
            ['担心施工影响生活？', '了解标准化七步交付流程', '快', '/standards'],
          ].map(([title, text, icon, href], i) => (
            <Link
              key={title}
              href={href}
              className={`group flex items-center gap-4 p-6 transition hover:bg-[#f9f3ed] ${i < 2 ? 'border-b border-[#e9ebe6] sm:border-b-0 sm:border-r' : ''}`}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#edf3ef] font-serif text-lg text-[#1b4a3a]">
                {icon}
              </span>
              <span>
                <strong className="block text-sm">{title}</strong>
                <span className="mt-1 flex items-center gap-1 text-xs text-[#77867e]">
                  {text} <Arrow className="transition group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-[1240px] px-5 py-28 lg:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">从生活场景出发</p>
            <h2 className="section-title">
              不是装几个扶手，
              <br />
              而是重新理解生活
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#697970] lg:justify-self-end">
            我们不以产品清单定义改造，而是观察长者从起床、如厕、洗浴到烹饪、休息的完整行为链，找出风险发生前的每一个细节。
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {scenarioCards.map((card) => (
            <Link
              key={card.no}
              href={card.href}
              className="group min-h-64 rounded-[24px] border border-[#dfe4de] bg-[#fbfaf6] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1b4a3a] hover:bg-[#1b4a3a] hover:text-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#99a49e]">{card.no}</span>
                <span className="grid size-11 place-items-center rounded-full bg-[#edf1eb] font-serif text-[#1b4a3a]">
                  {card.icon}
                </span>
              </div>
              <h3 className="mt-10 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#718078] transition group-hover:text-white/65">
                {card.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#c75d42] group-hover:text-[#ef9b7a]">
                查看方案 <Arrow />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/solutions/whole-home"
            className="inline-flex items-center gap-3 rounded-full border border-[#1b4a3a] px-6 py-3 text-sm font-semibold text-[#1b4a3a] transition hover:bg-[#1b4a3a] hover:text-white"
          >
            查看全屋分空间详细改造方案 <Arrow />
          </Link>
        </div>
      </section>

      <section id="standard" className="bg-[#173c31] py-28 text-white lg:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[520px] overflow-hidden rounded-[32px]">
            <Image
              src={bathroomImage}
              alt="适老化卫生间的无障碍淋浴空间"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102f27]/85 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-[#173c31]/80 p-5 backdrop-blur-md">
              <p className="text-xs tracking-[.15em] text-[#ef9b7a]">卫生间风险评估示例</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[
                  ['0', '门槛高差'],
                  ['≥800', '通行净宽/mm'],
                  ['2', '夜间照度级'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-medium">{value}</p>
                    <p className="mt-1 text-[10px] text-white/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:pt-8">
            <p className="eyebrow !text-[#ef9b7a]">SHEYUSHE STANDARD</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">
              全球经验，
              <br />
              落到中国家庭的每一厘米
            </h2>
            <p className="mt-7 text-base leading-8 text-white/65">
              借鉴日本介护保险住宅改修、美国 ADA
              与通用设计七原则，同时适配中国住宅户型、家庭照护习惯与施工条件。
            </p>
            <div className="mt-10 grid gap-0">
              {[
                ['01', '安全基线', '从防滑、支撑、照明与紧急响应建立零妥协底线'],
                ['02', '能力适配', '按长者行动、感知与认知能力，定义当下与未来需求'],
                ['03', '家庭共用', '不做“医院感”空间，让三代人都能舒适使用'],
                ['04', '持续生长', '预留设备与照护升级条件，减少未来重复改造'],
              ].map(([no, title, text]) => (
                <div
                  key={no}
                  className="grid grid-cols-[48px_100px_1fr] gap-3 border-t border-white/15 py-5 text-sm"
                >
                  <span className="text-[#ef9b7a]">{no}</span>
                  <strong>{title}</strong>
                  <span className="leading-6 text-white/55">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-[1240px] px-5 py-28 lg:px-8 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">模拟改造案例</p>
            <h2 className="section-title">
              看得见的改变，
              <br />
              算得出的安心
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#718078]">
            以下为基于典型中国家庭户型与照护需求构建的方案示例，实际方案以入户评估为准。
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <Link
            href="/cases/shanghai-82"
            className="group relative min-h-[560px] overflow-hidden rounded-[30px] bg-[#ddd]"
          >
            <Image
              src={kitchenImage}
              alt="长者在适老化厨房中准备食物"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#112f27]/95 via-[#112f27]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
              <span className="rounded-full bg-[#d96749] px-3 py-1.5 text-[11px] font-medium">
                全屋安心型
              </span>
              <h3 className="mt-5 text-3xl font-semibold">上海 · 82㎡ 老房焕新方案</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                为独居母亲重构厨房与卫浴动线，保留熟悉的生活方式，同时为未来照护预留空间。
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm">
                <span>
                  <b className="text-xl">18</b> 项风险消除
                </span>
                <span>
                  <b className="text-xl">21</b> 天预计工期
                </span>
                <span>
                  <b className="text-xl">2.4×</b> 夜间照度提升
                </span>
              </div>
            </div>
          </Link>
          <div className="grid gap-6">
            <Link
              href="/solutions/bathroom"
              className="group rounded-[28px] bg-[#e7eee8] p-7 transition hover:-translate-y-1"
            >
              <span className="text-xs font-semibold tracking-[.14em] text-[#b9553c]">
                轻改造 · 7 天
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-snug">
                杭州 · 老两口的卫生间安全升级
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#68786f]">
                用无高差淋浴、连续扶手、恒温龙头与感应夜灯，覆盖如厕、转身和洗浴全流程。
              </p>
              <div className="mt-7 border-t border-[#cbd7ce] pt-5 text-xs text-[#52675d]">
                预算参考：3.8–5.2 万元 <span className="float-right">查看方案 →</span>
              </div>
            </Link>
            <Link
              href="/solutions/special-populations"
              className="group rounded-[28px] bg-[#f0e4d8] p-7 transition hover:-translate-y-1"
            >
              <span className="text-xs font-semibold tracking-[.14em] text-[#9b613f]">
                认知友好 · 局部优化
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-snug">
                成都 · 认知症早期家庭环境支持
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#74675d]">
                通过色彩对比、路径提示、危险收纳与昼夜节律照明，减少迷失与误操作。
              </p>
              <div className="mt-7 border-t border-[#d9c7b7] pt-5 text-xs text-[#6d5b4e]">
                重点目标：熟悉感与自主性并存 <span className="float-right">查看方案 →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#efe7dc] py-24">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow">专业知识与方法</p>
              <h2 className="section-title">
                不是堆设备，
                <br />
                而是建立一套标准
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#687970] lg:justify-self-end">
              从全球制度、厂商产品到不同身体状态，再到中国标准与交付流程，帮助家庭理解“为什么这样改”，少走弯路。
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              [
                '/insights/global-evolution',
                '全球发展历程',
                '日本、北欧、德国与美国的制度路径，以及中国可以借鉴的经验。',
                '01',
              ],
              [
                '/ecosystem',
                '主流方案与产品',
                '松下、TOTO、Kohler、楼梯升降与国内成套适老方案图谱。',
                '02',
              ],
              [
                '/solutions/special-populations',
                '分人群专项方案',
                '帕金森、下肢残疾、小脑萎缩、认知、视力障碍与偏瘫。',
                '03',
              ],
              [
                '/standards',
                '舍予企业标准',
                '对照国内已发布标准，以双评估、量化验收和年度回访加严交付。',
                '04',
              ],
            ].map(([href, title, text, no]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-[24px] border border-[#d7d0c6] bg-white p-7 transition hover:-translate-y-1 hover:border-[#d96749]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#d96749]">{no}</span>
                  <Arrow className="transition group-hover:translate-x-1" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6b7b73]">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe3dd] bg-white py-24">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">SERVICE PROCESS</p>
            <h2 className="section-title">把复杂的改造，交给专业流程</h2>
          </div>
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <span className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-[#b7c3bb] md:block" />
            {[
              ['01', '需求沟通', '了解长者状态与家庭关注'],
              ['02', '入户评估', '测量空间与行为风险'],
              ['03', '方案共创', '明确优先级、预算与产品'],
              ['04', '施工验收', '按 86 项标准交付复核'],
            ].map(([no, title, text]) => (
              <div key={no} className="relative text-center">
                <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-[#b8c5bd] bg-white font-serif text-[#1d4a3b]">
                  {no}
                </span>
                <h3 className="mt-6 font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-[#7a8880]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#efe8dd] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[32px] bg-white shadow-[0_24px_70px_rgba(44,60,52,.1)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative min-h-[440px] bg-[#173c31] p-8 text-white sm:p-12">
            <div className="absolute -right-28 -top-28 size-80 rounded-full border-[60px] border-white/5" />
            <div className="relative">
              <p className="text-xs tracking-[.18em] text-[#ef9b7a]">免费初步咨询</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight">
                先听懂您的难题，
                <br />
                再谈怎么改
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/60">
                留下基本需求，适老规划师将在 1 个工作日内联系您，提供不带销售压力的初步建议。
              </p>
              <div className="mt-12 space-y-5 text-sm">
                <p className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-white/10 text-[#ef9b7a]">
                    ✓
                  </span>{' '}
                  20 分钟专业需求梳理
                </p>
                <p className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-white/10 text-[#ef9b7a]">
                    ✓
                  </span>{' '}
                  初步判断改造优先级
                </p>
                <p className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-white/10 text-[#ef9b7a]">
                    ✓
                  </span>{' '}
                  匹配适合的服务路径
                </p>
              </div>
            </div>
          </div>
          <div className="p-7 sm:p-12">
            <ConsultationForm />
          </div>
        </div>
      </section>

      <footer id="about" className="bg-[#102f27] text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8">
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <Mark />
                <strong className="text-xl tracking-[.18em]">舍予舍</strong>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                以专业重塑居家养老标准，让每一位长者都能在熟悉的家中，安全、有尊严地生活。
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">快速导航</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/50">
                <a href="/solutions">场景方案</a>
                <a href="/cases">改造案例</a>
                <a href="/standards">舍予标准</a>
                <a href="/ecosystem">产业图谱</a>
                <a href="/insights">知识中心</a>
                <a href="/about">关于我们</a>
                <a className="text-[#ef9b7a]" href="/assessment">
                  综合评估
                </a>
                <a href="#contact">快速咨询</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">联系我们</p>
              <a className="mt-5 block text-2xl" href="tel:4008165060">
                400-816-5060
              </a>
              <p className="mt-2 text-xs text-white/45">周一至周日 09:00–18:00</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 pt-6 text-[11px] text-white/35">
            <p>© 2025 舍予舍适老化居家改造</p>
            <p>专业评估 · 科学设计 · 严选产品 · 标准交付</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
