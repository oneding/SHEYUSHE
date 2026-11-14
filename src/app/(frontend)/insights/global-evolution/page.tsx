import type { Metadata } from 'next'
import { Breadcrumbs, ConversionBand, SiteFooter, SiteHeader } from '../../components/SiteChrome'
import { GlobalExpansion } from './GlobalExpansion'

export const metadata: Metadata = {
  title: '全球适老化住宅发展历程｜舍予舍知识中心',
  description: '梳理日本、欧美适老化居家改造从无障碍规范到原居安老和通用设计的发展历程。',
}

export default function EvolutionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <header className="mx-auto max-w-[920px] px-5 py-16 lg:px-8 lg:py-24">
            <Breadcrumbs items={[['知识中心', '/insights'], ['全球适老化住宅演进']]} />
            <p className="eyebrow mt-12">国际视野 · 约 8 分钟阅读</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.2] tracking-[-.04em] sm:text-6xl">
              从“无障碍”到“原居安老”：
              <br />
              全球适老化住宅的演进
            </h1>
            <p className="mt-7 text-lg leading-8 text-[#687970]">
              适老化的核心，正在从解决“能否进入”转向支持“能否长期、自主、有尊严地生活”。
            </p>
          </header>
          <div className="bg-[#173c31] py-16 text-white">
            <div className="mx-auto grid max-w-[1080px] gap-8 px-5 md:grid-cols-4 lg:px-8">
              {[
                ['1950s–70s', '无障碍起步', '关注轮椅通行与公共建筑可达'],
                ['1980s–90s', '通用设计', '让环境被更多年龄与能力的人使用'],
                ['2000s–10s', '原居安老', '政策、保险与社区服务共同支持居家'],
                ['今天', '能力与预防', '从事故后补救转向全生命周期准备'],
              ].map(([y, t, d]) => (
                <div key={y} className="border-t border-white/20 pt-5">
                  <span className="text-sm text-[#ef9b7a]">{y}</span>
                  <h2 className="mt-6 text-xl font-semibold">{t}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/50">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="prose-sheyu mx-auto max-w-[820px] px-5 py-20 lg:px-8">
            <h2>日本：把住宅改修纳入照护体系</h2>
            <p>
              日本在快速老龄化背景下，将住宅改修与介护保险、照护评估紧密连接。其特点不是一次性“大拆大改”，而是根据身体能力变化及时实施扶手、消除高差、调整门扇和便器等小规模改修。
            </p>
            <blockquote>
              启示：改造应与长者能力评估同步，优先处理每天高频发生、后果严重的风险。
            </blockquote>
            <h2>欧美：从最低合规走向通用设计</h2>
            <p>
              美国 ADA
              等规范建立了可达性的底线，而通用设计进一步提出公平使用、简单直观、容错、低体力负担等原则。住宅设计开始考虑不同年龄、体型与能力的人。
            </p>
            <h2>北欧：住宅、照护与社区一起工作</h2>
            <p>
              北欧实践强调居家服务、辅具供给和住宅环境协同。适老化不仅是装修问题，还包括照护者能否安全工作、设备能否维护，以及社区服务能否及时进入家庭。
            </p>
            <h2>中国：需要自己的落地路径</h2>
            <p>
              中国家庭普遍面临既有住宅面积紧凑、卫生间狭小、代际共居与照护资源不均等现实。需要把国际原则转译为适合本土户型、施工方式和家庭决策习惯的标准。
            </p>
            <h2>舍予舍的判断</h2>
            <p>
              下一阶段的适老化居家改造，不应等待跌倒、失能后才发生。更好的方式是在健康状态尚好时为未来预留，在能力开始变化时及时用最小干预保持自主生活。
            </p>
            <p className="note">
              本文用于普及行业发展与设计思路，不构成针对具体身体状况或住宅条件的专业建议。
            </p>
          </div>
          <GlobalExpansion />
        </article>
        <ConversionBand title="把国际经验，转化为您家里的具体方案" />
      </main>
      <SiteFooter />
    </>
  )
}
