import Image from 'next/image'
import Link from 'next/link'
import {
  Breadcrumbs,
  ConversionBand,
  PageHero,
  SiteFooter,
  SiteHeader,
} from '../../components/SiteChrome'
import type { SpaceSolution } from './spaceData'

export function SpaceDetail({ space }: { space: SpaceSolution }) {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={`SPACE ${space.no} · WHOLE-HOME SOLUTION`}
          title={
            <>
              {space.name}适老化：
              <br />
              <span className="text-[#d96749]">{space.tagline}</span>
            </>
          }
          description={space.intro}
        >
          <Breadcrumbs
            items={[
              ['解决方案', '/solutions'],
              ['全屋分空间', '/solutions/whole-home'],
              [`${space.no} ${space.name}`],
            ]}
          />
        </PageHero>

        <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
          <div className="relative min-h-[560px] overflow-hidden rounded-[32px]">
            <Image
              src={space.heroImage}
              alt={space.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102f27]/80 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 max-w-3xl rounded-2xl bg-[#173c31]/85 p-6 text-white backdrop-blur sm:inset-x-auto sm:left-8 sm:bottom-8">
              <p className="text-xs tracking-[.16em] text-[#ef9b7a]">高频风险</p>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {space.risks.map((risk) => (
                  <p key={risk} className="flex gap-2 text-white/70">
                    <span className="text-[#ef9b7a]">·</span>
                    {risk}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div className="relative min-h-[600px] overflow-hidden rounded-[28px]">
              <Image
                src={space.detailImage}
                alt={space.detailAlt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw,42vw"
              />
              <p className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 p-4 text-xs leading-5 text-[#53675e] backdrop-blur">
                场景图用于说明空间关系；实际点位须按本人动作、辅具和住宅结构现场确定。
              </p>
            </div>
            <div>
              <p className="eyebrow">SIX DESIGN NODES</p>
              <h2 className="section-title">六个关键改造节点</h2>
              <div className="mt-9 divide-y divide-[#dfe4de] border-y border-[#dfe4de]">
                {space.nodes.map(([title, text], index) => (
                  <article key={title} className="grid grid-cols-[44px_1fr] gap-4 py-5">
                    <span className="text-sm text-[#d96749]">0{index + 1}</span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#687970]">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#173c31] py-24 text-white">
          <div className="mx-auto max-w-[1160px] px-5 lg:px-8">
            <p className="eyebrow !text-[#ef9b7a]">PARAMETER & VALIDATION</p>
            <h2 className="mt-5 text-4xl font-semibold">参数不是答案，验证动作才是</h2>
            <div className="mt-12 overflow-hidden rounded-[24px] border border-white/15">
              <div className="hidden grid-cols-[.6fr_1fr_1fr] bg-white/10 px-6 py-4 text-xs text-white/55 md:grid">
                <span>检查项</span>
                <span>设计判断</span>
                <span>现场验证</span>
              </div>
              <div className="divide-y divide-white/10">
                {space.metrics.map(([item, rule, test]) => (
                  <div
                    key={item}
                    className="grid gap-2 px-6 py-5 text-sm md:grid-cols-[.6fr_1fr_1fr]"
                  >
                    <strong className="text-[#ef9b7a]">{item}</strong>
                    <span className="text-white/75">{rule}</span>
                    <span className="text-white/50">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1160px] gap-10 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">产品与设备选择</p>
            <h2 className="section-title">只选能解决动作问题的产品</h2>
            <div className="mt-9 space-y-4">
              {space.products.map(([name, note]) => (
                <article key={name} className="rounded-2xl bg-[#edf1eb] p-5">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#687970]">{note}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] bg-[#efe5da] p-7 sm:p-9">
            <p className="eyebrow">交付验收清单</p>
            <h2 className="mt-5 text-3xl font-semibold">完工不等于可用</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {space.acceptance.map((item) => (
                <p key={item} className="flex gap-3 rounded-xl bg-white/75 p-4 text-sm">
                  <span className="text-[#d96749]">✓</span>
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-7 text-xs leading-6 text-[#796b61]">
              完成尺寸和安装检查后，还需由本人进行连续动作测试，并完成设备使用教学。
            </p>
          </div>
        </section>

        <section className="border-t border-[#dfe4de] bg-white py-12">
          <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-4 px-5 lg:px-8">
            <Link href="/solutions/whole-home" className="text-sm font-semibold text-[#365247]">
              ← 返回全屋分空间总览
            </Link>
            <Link href="/solutions/bathroom" className="text-sm font-semibold text-[#b65640]">
              继续查看重点卫生间方案 →
            </Link>
          </div>
        </section>
        <ConversionBand title={`先评估一次真实的${space.name}使用动作`} />
      </main>
      <SiteFooter />
    </>
  )
}
