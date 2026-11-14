'use client'

import { useActionState } from 'react'
import { submitInquiry, type InquiryState } from './actions'

const initialState: InquiryState = { success: false, message: '' }

export function ConsultationForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)

  if (state.success) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[28px] bg-[#f3f6ef] px-8 text-center">
        <span className="mb-5 grid size-14 place-items-center rounded-full bg-[#1d4a3b] text-2xl text-white">
          ✓
        </span>
        <h3 className="text-2xl font-semibold text-[#173c31]">已收到您的需求</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-[#607168]">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="您的称呼" name="name" placeholder="怎么称呼您" error={state.errors?.name} />
        <Field
          label="联系电话"
          name="phone"
          placeholder="11 位手机号码"
          error={state.errors?.phone}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="所在城市" name="city" placeholder="例如：上海" error={state.errors?.city} />
        <label className="grid gap-2 text-sm font-medium text-[#263f37]">
          主要需求
          <select
            name="need"
            defaultValue=""
            className="h-12 rounded-xl border border-[#d8ded8] bg-white px-4 text-sm outline-none transition focus:border-[#d56749] focus:ring-2 focus:ring-[#d56749]/10"
          >
            <option value="" disabled>
              请选择
            </option>
            <option value="bathroom">卫生间安全改造</option>
            <option value="whole-home">全屋适老化改造</option>
            <option value="mobility">行动辅助与无障碍</option>
            <option value="dementia">认知症友好环境</option>
            <option value="assessment">先做专业评估</option>
          </select>
          {state.errors?.need && (
            <span className="text-xs text-[#b14d35]">{state.errors.need}</span>
          )}
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-[#263f37]">
        补充说明 <span className="font-normal text-[#8a9790]">（选填）</span>
        <textarea
          name="message"
          rows={3}
          placeholder="请简单描述长者年龄、身体情况或房屋现状"
          className="resize-none rounded-xl border border-[#d8ded8] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#d56749] focus:ring-2 focus:ring-[#d56749]/10"
        />
      </label>
      {state.message && (
        <p role="alert" className="rounded-xl bg-[#fff3ee] px-4 py-3 text-sm text-[#a44a34]">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-1 h-13 rounded-xl bg-[#d96749] font-semibold text-white shadow-[0_8px_24px_rgba(217,103,73,.22)] transition hover:bg-[#c6583c] disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? '正在提交…' : '预约免费初步评估'}
      </button>
      <p className="text-center text-xs leading-5 text-[#839088]">
        提交即表示同意我们仅将信息用于本次咨询沟通
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  placeholder,
  error,
}: {
  label: string
  name: string
  placeholder: string
  error?: string
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[#263f37]">
      {label}
      <input
        name={name}
        autoComplete={name === 'phone' ? 'tel' : name === 'name' ? 'name' : 'address-level1'}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-[#d8ded8] bg-white px-4 text-sm outline-none transition focus:border-[#d56749] focus:ring-2 focus:ring-[#d56749]/10"
      />
      {error && <span className="text-xs text-[#b14d35]">{error}</span>}
    </label>
  )
}
