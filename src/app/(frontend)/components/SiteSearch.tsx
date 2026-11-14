'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

const searchEntries = [
  {
    title: '综合适老化需求评估',
    description: '分步填写房屋、长者健康、改造诉求并上传现场图片',
    href: '/assessment',
    keywords: '问卷 评估 需求 上传 图片 房型 户型 楼层 健康',
  },
  {
    title: '全屋分空间适老化方案',
    description: '玄关、客厅、卧室、厨房、过道与卫生间的连续生活动线',
    href: '/solutions/whole-home',
    keywords: '全屋 空间 居家 动线 综合 改造',
  },
  {
    title: '玄关适老化方案',
    description: '门槛、换鞋支持、入户照明、门禁与应急通行',
    href: '/solutions/whole-home/entrance',
    keywords: '玄关 入户 门槛 换鞋 门锁 门禁',
  },
  {
    title: '客厅适老化方案',
    description: '连续通行、沙发起坐、家具边界与分层照明',
    href: '/solutions/whole-home/living-room',
    keywords: '客厅 沙发 起身 地毯 电视 照明',
  },
  {
    title: '卧室适老化方案',
    description: '床沿高度、床边支撑、夜间路径与照护空间',
    href: '/solutions/whole-home/bedroom',
    keywords: '卧室 床 夜灯 睡眠 起身 夜间',
  },
  {
    title: '厨房适老化方案',
    description: '操作动线、坐姿备餐、收纳、燃气与防烫',
    href: '/solutions/whole-home/kitchen',
    keywords: '厨房 做饭 燃气 收纳 台面 防烫',
  },
  {
    title: '过道适老化方案',
    description: '连续净宽、转角支撑、扶手与夜间照明',
    href: '/solutions/whole-home/corridor',
    keywords: '过道 走廊 通行 扶手 轮椅 助行器',
  },
  {
    title: '卫生间重点专项方案',
    description: '无高差进入、如厕起身、坐式洗浴、防滑与紧急呼叫',
    href: '/solutions/bathroom',
    keywords: '卫生间 厕所 洗澡 淋浴 马桶 扶手 防滑',
  },
  {
    title: '六类人群专项方案',
    description: '帕金森、下肢残疾、小脑萎缩、认知、视力障碍与偏瘫',
    href: '/solutions/special-populations',
    keywords: '帕金森 下肢残疾 小脑萎缩 认知障碍 视力障碍 偏瘫',
  },
  {
    title: '适老化改造案例',
    description: '上海老房、卫生间轻改造与认知友好模拟案例',
    href: '/cases',
    keywords: '案例 上海 杭州 成都 预算 工期 老房',
  },
  {
    title: '舍予企业标准',
    description: '国内标准对照、七步交付、量化验收与年度回访',
    href: '/standards',
    keywords: '标准 国标 GB 规范 验收 双评估 七步交付',
  },
  {
    title: '全球适老化发展历程',
    description: '日本、北欧、德国与美国的制度路径和经验',
    href: '/insights/global-evolution',
    keywords: '日本 北欧 德国 美国 全球 介护 原居安老',
  },
  {
    title: '主流解决方案与产品图谱',
    description: '国内外代表厂商、产品方向与舍予选型逻辑',
    href: '/ecosystem',
    keywords: '产品 厂商 松下 TOTO 科勒 箭牌 九牧 楼梯升降',
  },
  {
    title: '关于舍予舍',
    description: '品牌理念、专业原则与我们对居家养老的理解',
    href: '/about',
    keywords: '品牌 企业 团队 关于 理念',
  },
]

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function SiteSearch({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase()
    if (!keyword) return searchEntries.slice(0, 6)
    return searchEntries.filter((entry) =>
      `${entry.title} ${entry.description} ${entry.keywords}`.toLowerCase().includes(keyword),
    )
  }, [query])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition ${
          variant === 'dark'
            ? 'border-white/35 bg-white/10 text-white hover:bg-white hover:text-[#173c31]'
            : 'border-[#bdc8c1] text-[#29453b] hover:border-[#d96749] hover:text-[#b5513a]'
        }`}
        aria-label="打开站内查询"
      >
        <SearchIcon />
        <span className="hidden xl:inline">查询</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[#102f27]/70 px-4 pt-[8vh] backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label="站内查询"
            className="w-full max-w-2xl overflow-hidden rounded-[28px] bg-[#f8f5ee] shadow-[0_30px_100px_rgba(10,35,28,.35)]"
          >
            <div className="flex items-center gap-3 border-b border-[#dfe4de] p-5 sm:p-6">
              <span className="text-[#d96749]">
                <SearchIcon />
              </span>
              <input
                autoFocus
                aria-label="输入查询关键词"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="查询空间、身体状况、标准或产品…"
                className="h-11 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[#8a9790]"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full bg-[#e8ece7] text-lg text-[#52665d] transition hover:bg-[#dce3dc]"
                aria-label="关闭查询"
              >
                ×
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6">
              <p className="mb-4 text-xs font-semibold tracking-[.14em] text-[#9a6653]">
                {query.trim() ? `${results.length} 项相关结果` : '常用查询'}
              </p>
              {results.length > 0 ? (
                <div className="grid gap-2">
                  {results.map((entry) => (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between gap-5 rounded-2xl border border-transparent bg-white p-4 transition hover:border-[#d96749]"
                    >
                      <span>
                        <strong className="block text-sm text-[#243f35]">{entry.title}</strong>
                        <span className="mt-1 block text-xs leading-5 text-[#74837b]">
                          {entry.description}
                        </span>
                      </span>
                      <span className="shrink-0 text-[#d96749] transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-[#cbd4cd] px-6 py-12 text-center">
                  <p className="font-medium text-[#40584e]">暂未找到匹配内容</p>
                  <p className="mt-2 text-xs text-[#7c8982]">
                    可以尝试“卫生间”“帕金森”“标准”等关键词
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
