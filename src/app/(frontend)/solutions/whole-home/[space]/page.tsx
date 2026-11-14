import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SpaceDetail } from '../SpaceDetail'
import { getSpaceSolution, spaceSolutions } from '../spaceData'

export const dynamicParams = false

export function generateStaticParams() {
  return spaceSolutions.map((space) => ({ space: space.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ space: string }>
}): Promise<Metadata> {
  const { space: slug } = await params
  const space = getSpaceSolution(slug)
  if (!space) return {}
  return {
    title: `${space.name}适老化改造完整方案｜舍予舍`,
    description: `${space.name}空间的风险诊断、改造节点、参数验证、产品选择与交付验收方案。`,
  }
}

export default async function SpacePage({ params }: { params: Promise<{ space: string }> }) {
  const { space: slug } = await params
  const space = getSpaceSolution(slug)
  if (!space) notFound()
  return <SpaceDetail space={space} />
}
