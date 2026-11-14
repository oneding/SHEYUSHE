import type { Metadata } from 'next'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../components/SiteChrome'
import { AssessmentQuestionnaire } from './AssessmentQuestionnaire'

export const metadata: Metadata = {
  title: '综合适老化需求评估｜舍予舍',
  description:
    '分步填写房屋位置、楼层、房型户型、装修现状、老人健康和主要改造诉求，并可安全上传住宅现场图片。',
}

export default function AssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#efe9df]">
        <section className="mx-auto max-w-[1160px] px-5 pb-10 pt-12 lg:px-8 lg:pt-16">
          <Breadcrumbs items={[['综合需求评估']]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">COMPREHENSIVE ASSESSMENT</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.2] tracking-[-.04em] sm:text-5xl">
                先全面了解，
                <br />
                再给出<span className="text-[#d96749]">准确方案</span>
              </h1>
              <p className="mt-6 text-sm leading-8 text-[#687970]">
                约需 5–8
                分钟。信息越完整，规划师越能提前识别高风险空间，并准备更有针对性的沟通建议。
              </p>
              <div className="mt-9 space-y-4">
                {[
                  ['01', '房屋与楼层条件'],
                  ['02', '房型、户型和装修现状'],
                  ['03', '老人数量与健康情况'],
                  ['04', '核心诉求、预算和时间'],
                  ['05', '现场图片和联系方式'],
                ].map(([no, text]) => (
                  <div key={no} className="flex items-center gap-4 text-sm">
                    <span className="grid size-9 place-items-center rounded-full bg-white text-xs text-[#b6533d]">
                      {no}
                    </span>
                    <span className="text-[#455c52]">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9 rounded-2xl bg-[#173c31] p-5 text-white">
                <p className="text-xs font-semibold text-[#ef9b7a]">隐私保护</p>
                <p className="mt-2 text-xs leading-6 text-white/60">
                  提交信息和住宅照片仅授权后台规划师查看，不会作为公开案例使用。
                </p>
              </div>
            </div>
            <AssessmentQuestionnaire />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
