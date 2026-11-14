import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../components/SiteChrome'

export const metadata: Metadata = {
  title: '适老化居家解决方案｜舍予舍',
  description: '从卫生间、卧室、厨房到全屋通行与认知友好，按长者能力与生活场景配置适老化改造。',
}

const bathroom =
  'https://images.unsplash.com/photo-1656646523653-fffffc75b0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600'
const rooms = [
  [
    '卫生间安全',
    'bathroom',
    '跌倒预防 / 洗浴支持 / 如厕起身',
    '家中高风险场景的系统解决方案',
    '重点方案',
  ],
  [
    '卧室与夜间动线',
    '',
    '离床照明 / 床边支撑 / 安全收纳',
    '让夜间起身到如厕的每一步都清晰可控',
    '场景方案',
  ],
  [
    '适老化厨房',
    '',
    '操作高度 / 易取收纳 / 火源安全',
    '保留长者熟悉的烹饪习惯与自主生活',
    '场景方案',
  ],
  [
    '全屋无障碍通行',
    'whole-home',
    '高差消除 / 门宽优化 / 回转空间',
    '兼顾步行、助行器与轮椅的连续动线',
    '全屋分空间方案',
  ],
  [
    '认知症友好环境',
    'special-populations',
    '视觉提示 / 节律照明 / 风险控制',
    '用空间支持记忆、定向与情绪稳定',
    '六类专项方案',
  ],
  [
    '照护型家庭升级',
    '',
    '移乘空间 / 辅具预留 / 照护减负',
    '同时守护被照护者与家人的身体负担',
    '家庭方案',
  ],
]

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SOLUTIONS"
          title={
            <>
              从“能住”，到<span className="text-[#d96749]">住得安心</span>
            </>
          }
          description="不从产品出发，而从人的身体能力、生活习惯和家庭照护关系出发。舍予舍将需求拆解为可评估、可设计、可验收的场景方案。"
        >
          <Breadcrumbs items={[['解决方案']]} />
        </PageHero>
        <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map(([title, slug, tags, text, label], index) => (
              <article
                key={title}
                className={`group overflow-hidden rounded-[28px] border border-[#dde3dd] ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {index === 0 && (
                  <div className="relative h-72">
                    <Image
                      src={bathroom}
                      alt="卫生间无障碍淋浴与如厕空间"
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                )}
                <div className="bg-white p-7">
                  <span className="text-[10px] font-semibold tracking-[.16em] text-[#c45b42]">
                    {label}
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
                  <p className="mt-3 text-xs text-[#9a6d58]">{tags}</p>
                  <p className="mt-4 text-sm leading-7 text-[#6d7c74]">{text}</p>
                  <Link
                    href={slug ? `/solutions/${slug}` : '/assessment'}
                    className="mt-7 inline-flex text-sm font-semibold text-[#1c4a3a]"
                  >
                    {slug ? '查看完整方案' : '咨询此类需求'} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#173c31] py-20 text-white">
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
            <p className="eyebrow !text-[#ef9b7a]">如何匹配方案</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                ['人的能力', '行动、感知、认知与慢病状态'],
                ['家的条件', '户型、结构、设备与施工边界'],
                ['照护关系', '独居、老伴互助或家人照护'],
              ].map(([t, d], i) => (
                <div key={t} className="border-t border-white/20 pt-5">
                  <span className="text-[#ef9b7a]">0{i + 1}</span>
                  <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                  <p className="mt-3 text-sm text-white/55">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ConversionBand />
      </main>
      <SiteFooter />
    </>
  )
}
