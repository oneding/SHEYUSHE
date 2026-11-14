import type { Metadata } from 'next'
import Link from 'next/link'
import './(frontend)/styles.css'

export const metadata: Metadata = {
  title: '页面未找到｜舍予舍',
  description: '您访问的页面不存在或已调整。',
}

export default function GlobalNotFound() {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#edf1eb] text-[#1d332c] antialiased">
        <header className="border-b border-[#d8dfd9] bg-[#f8f5ee]">
          <div className="mx-auto flex h-20 max-w-[1100px] items-center justify-between px-5">
            <Link href="/" className="text-lg font-semibold tracking-[.18em] text-[#173c31]">
              舍予舍
            </Link>
            <Link
              href="/assessment"
              className="rounded-full bg-[#173c31] px-5 py-2.5 text-sm font-semibold text-white"
            >
              开始需求评估
            </Link>
          </div>
        </header>
        <main className="flex min-h-[calc(100vh-80px)] items-center">
          <div className="mx-auto w-full max-w-[900px] px-5 py-20 text-center">
            <p className="text-8xl font-semibold tracking-[-.06em] text-[#d96749]">404</p>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#173c31]">
              没有找到这个页面
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#687970]">
              页面可能已经调整。您可以返回首页、浏览完整解决方案，或直接开始综合需求评估。
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
      </body>
    </html>
  )
}
