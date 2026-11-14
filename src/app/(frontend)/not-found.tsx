import Link from 'next/link'
import { SiteFooter, SiteHeader } from './components/SiteChrome'

/**
 * Custom not-found page for the frontend.
 * This renders when `notFound()` is called from any page in the (frontend) route group.
 *
 * Customize this component to match your app's design and provide helpful navigation.
 */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[62vh] items-center bg-[#edf1eb]">
        <div className="mx-auto w-full max-w-[900px] px-5 py-20 text-center lg:px-8">
          <p className="text-8xl font-semibold tracking-[-.06em] text-[#d96749]">404</p>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#173c31]">
            没有找到这个页面
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#687970]">
            页面可能已经调整，您可以返回首页、浏览解决方案，或直接开始综合需求评估。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              className="rounded-full bg-[#173c31] px-6 py-3 text-sm font-semibold text-white"
              href="/"
            >
              返回首页
            </Link>
            <Link
              className="rounded-full border border-[#173c31] px-6 py-3 text-sm font-semibold text-[#173c31]"
              href="/solutions"
            >
              浏览解决方案
            </Link>
            <Link
              className="rounded-full bg-[#d96749] px-6 py-3 text-sm font-semibold text-white"
              href="/assessment"
            >
              开始需求评估
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
