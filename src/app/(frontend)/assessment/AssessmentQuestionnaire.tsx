'use client'

import Image from 'next/image'
import { useActionState, useEffect, useRef, useState } from 'react'
import { submitAssessment, type AssessmentState } from './actions'

const initialState: AssessmentState = { success: false, message: '' }
const steps = ['房屋位置', '户型装修', '长者情况', '改造诉求', '图片与联系']
const inputClass =
  'h-12 w-full rounded-xl border border-[#d8ded8] bg-white px-4 text-sm outline-none transition focus:border-[#d96749] focus:ring-2 focus:ring-[#d96749]/10'
const labelClass = 'grid gap-2 text-sm font-medium text-[#29443a]'

const healthOptions = [
  ['healthy', '基本健康'],
  ['balance', '行动缓慢 / 平衡下降'],
  ['parkinson', '帕金森'],
  ['hemiplegia', '偏瘫 / 术后康复'],
  ['wheelchair', '下肢残疾 / 轮椅使用'],
  ['cerebellar', '小脑萎缩'],
  ['cognitive', '认知障碍'],
  ['vision', '视力障碍'],
  ['hearing', '听力障碍'],
  ['chronic', '其他慢病'],
]

const needOptions = [
  ['bathroom', '卫生间安全'],
  ['fall-prevention', '全屋防跌倒'],
  ['mobility', '轮椅 / 助行器通行'],
  ['bedroom', '卧室与夜间动线'],
  ['kitchen', '适老化厨房'],
  ['cognitive', '认知友好环境'],
  ['smart-care', '智能监测与呼叫'],
  ['care-support', '照护减负'],
  ['whole-home', '全屋整体改造'],
]

export function AssessmentQuestionnaire() {
  const [step, setStep] = useState(0)
  const [stepError, setStepError] = useState('')
  const [state, formAction, pending] = useActionState(submitAssessment, initialState)
  const [previews, setPreviews] = useState<Array<{ name: string; url: string }>>([])
  const formRef = useRef<HTMLFormElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(
    () => () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.url))
    },
    [previews],
  )

  const validateCurrentStep = () => {
    setStepError('')
    const panel = formRef.current?.querySelector<HTMLElement>(`[data-step="${step}"]`)
    if (!panel) return false
    const controls = Array.from(
      panel.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select'),
    )
    const invalid = controls.find((control) => !control.checkValidity())
    if (invalid) {
      invalid.reportValidity()
      setStepError('请先完成本页必填信息')
      return false
    }
    if (step === 3 && !formRef.current?.querySelector('input[name="needs"]:checked')) {
      setStepError('请至少选择一项主要改造诉求')
      return false
    }
    if (step === 2 && !formRef.current?.querySelector('input[name="healthConditions"]:checked')) {
      setStepError('请选择至少一项当前健康状况，包括“基本健康”')
      return false
    }
    if (step === 0) {
      const floor = Number(new FormData(formRef.current ?? undefined).get('floor'))
      const totalFloors = Number(new FormData(formRef.current ?? undefined).get('totalFloors'))
      if (floor > totalFloors) {
        setStepError('所在楼层不能高于总楼层')
        return false
      }
    }
    return true
  }

  const scrollToForm = () => {
    requestAnimationFrame(() =>
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    )
  }

  const goNext = () => {
    if (validateCurrentStep()) {
      setStep((current) => Math.min(current + 1, steps.length - 1))
      scrollToForm()
    }
  }

  const handleFiles = (files: FileList | null) => {
    const selected = Array.from(files ?? [])
    if (selected.length > 5) {
      setStepError('最多上传 5 张图片')
      if (fileRef.current) fileRef.current.value = ''
      setPreviews([])
      return
    }
    if (selected.some((file) => file.size > 8 * 1024 * 1024)) {
      setStepError('每张图片不能超过 8MB')
      if (fileRef.current) fileRef.current.value = ''
      setPreviews([])
      return
    }
    setStepError('')
    setPreviews(selected.map((file) => ({ name: file.name, url: URL.createObjectURL(file) })))
  }

  const removeFile = (index: number) => {
    const input = fileRef.current
    if (!input?.files) return
    const transfer = new DataTransfer()
    Array.from(input.files).forEach((file, fileIndex) => {
      if (fileIndex !== index) transfer.items.add(file)
    })
    input.files = transfer.files
    handleFiles(transfer.files)
  }

  if (state.success) {
    return (
      <div className="rounded-[30px] bg-white px-6 py-20 text-center shadow-[0_20px_60px_rgba(30,58,48,.08)]">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#173c31] text-2xl text-white">
          ✓
        </span>
        <p className="eyebrow mt-8">SUBMITTED</p>
        <h2 className="mt-4 text-3xl font-semibold">综合评估需求已收到</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#687970]">{state.message}</p>
        {typeof state.uploaded === 'number' && state.uploaded > 0 && (
          <p className="mt-3 text-xs text-[#a3543f]">已安全上传 {state.uploaded} 张住宅照片</p>
        )}
        <a
          href="/"
          className="mt-9 inline-flex rounded-full bg-[#d96749] px-6 py-3 text-sm font-semibold text-white"
        >
          返回首页
        </a>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={(event) => {
        if (step < steps.length - 1) {
          event.preventDefault()
          goNext()
        } else if (!validateCurrentStep()) {
          event.preventDefault()
        }
      }}
      className="scroll-mt-24 overflow-hidden rounded-[30px] bg-white shadow-[0_20px_70px_rgba(26,55,45,.1)]"
    >
      <div className="border-b border-[#e1e5e1] px-5 py-6 sm:px-8">
        <div className="flex items-center gap-2">
          {steps.map((label, index) => (
            <div key={label} className="min-w-0 flex-1">
              <span
                className={`block h-1.5 rounded-full ${index <= step ? 'bg-[#d96749]' : 'bg-[#e2e7e2]'}`}
              />
              <span
                className={`mt-2 hidden text-[10px] sm:block ${index === step ? 'font-semibold text-[#a8503a]' : 'text-[#8b9891]'}`}
              >
                {index + 1}. {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-[#7e8b84]">
          第 {step + 1} 步，共 {steps.length} 步
        </p>
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        <section data-step="0" className={step === 0 ? 'block' : 'hidden'}>
          <StepHeading
            title="房屋在哪里？"
            description="位置与楼层决定上门服务、材料运输和无障碍出入条件。"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="所在城市">
              <input
                className={inputClass}
                name="city"
                autoComplete="address-level1"
                placeholder="例如：上海"
                required
              />
            </Field>
            <Field label="区 / 县">
              <input
                className={inputClass}
                name="district"
                autoComplete="address-level2"
                placeholder="例如：徐汇区"
                required
              />
            </Field>
            <Field label="小区 / 社区">
              <input
                className={inputClass}
                name="community"
                autoComplete="address-line2"
                placeholder="请输入小区或社区名称"
                required
              />
            </Field>
            <Field label="详细位置（选填）">
              <input
                className={inputClass}
                name="address"
                autoComplete="street-address"
                placeholder="楼栋或附近标志即可"
              />
            </Field>
            <Field label="所在楼层">
              <input
                className={inputClass}
                type="number"
                name="floor"
                min="-3"
                max="100"
                placeholder="例如：5"
                required
              />
            </Field>
            <Field label="总楼层">
              <input
                className={inputClass}
                type="number"
                name="totalFloors"
                min="1"
                max="150"
                placeholder="例如：6"
                required
              />
            </Field>
            <Field label="是否有电梯">
              <select className={inputClass} name="hasElevator" defaultValue="no">
                <option value="yes">有电梯</option>
                <option value="no">无电梯</option>
              </select>
            </Field>
          </div>
        </section>

        <section data-step="1" className={step === 1 ? 'block' : 'hidden'}>
          <StepHeading
            title="房型、户型与装修现状"
            description="了解现状后，才能判断是轻改造、局部重构还是全屋升级。"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="房型">
              <select className={inputClass} name="propertyType" defaultValue="" required>
                <option value="" disabled>
                  请选择房型
                </option>
                <option value="apartment">商品房 / 公寓</option>
                <option value="old-house">老式住宅</option>
                <option value="self-built">自建房</option>
                <option value="villa">别墅 / 复式</option>
                <option value="other">其他</option>
              </select>
            </Field>
            <Field label="户型">
              <input
                className={inputClass}
                name="layout"
                placeholder="例如：两室一厅一卫"
                required
              />
            </Field>
            <Field label="建筑面积（㎡）">
              <input
                className={inputClass}
                type="number"
                name="area"
                min="10"
                max="2000"
                placeholder="例如：82"
                required
              />
            </Field>
            <Field label="房龄 / 建成年份（选填）">
              <input className={inputClass} name="buildingAge" placeholder="例如：1998 年" />
            </Field>
            <Field label="现有装修状况">
              <select className={inputClass} name="renovationStatus" defaultValue="" required>
                <option value="" disabled>
                  请选择装修状况
                </option>
                <option value="unfinished">毛坯 / 待装修</option>
                <option value="good">装修良好，局部改造</option>
                <option value="aged">使用多年，需要翻新</option>
                <option value="recent">近期装修，需适老调整</option>
                <option value="unknown">不确定</option>
              </select>
            </Field>
            <Field label="上次装修时间（选填）">
              <input className={inputClass} name="renovationYear" placeholder="例如：2016 年" />
            </Field>
            <Field label="施工期间是否需要居住">
              <select className={inputClass} name="occupiedDuringWork" defaultValue="yes">
                <option value="yes">需要继续居住</option>
                <option value="no">可以临时搬离</option>
              </select>
            </Field>
          </div>
        </section>

        <section data-step="2" className={step === 2 ? 'block' : 'hidden'}>
          <StepHeading
            title="长者数量与健康状况"
            description="所有健康信息仅用于判断环境支持需求，不替代医疗诊断。"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="老人数量">
              <input
                className={inputClass}
                type="number"
                name="elderCount"
                min="1"
                max="10"
                defaultValue="1"
                required
              />
            </Field>
            <Field label="年龄情况">
              <input
                className={inputClass}
                name="elderAges"
                placeholder="例如：父亲 76 岁，母亲 73 岁"
                required
              />
            </Field>
            <Field label="当前行动能力">
              <select className={inputClass} name="mobilityLevel" defaultValue="" required>
                <option value="" disabled>
                  请选择
                </option>
                <option value="independent">可独立行动</option>
                <option value="aided">需要手杖 / 助行器</option>
                <option value="wheelchair">使用轮椅</option>
                <option value="assisted">需要他人协助</option>
                <option value="bedridden">长期卧床</option>
              </select>
            </Field>
            <Field label="照护安排">
              <select className={inputClass} name="careArrangement" defaultValue="" required>
                <option value="" disabled>
                  请选择
                </option>
                <option value="alone">独居</option>
                <option value="couple">老伴互助</option>
                <option value="family">与子女同住</option>
                <option value="caregiver">保姆 / 护工照护</option>
                <option value="other">其他</option>
              </select>
            </Field>
          </div>
          <fieldset className="mt-7">
            <legend className="text-sm font-medium text-[#29443a]">健康状况（可多选）</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {healthOptions.map(([value, label]) => (
                <CheckCard key={value} name="healthConditions" value={value} label={label} />
              ))}
            </div>
          </fieldset>
        </section>

        <section data-step="3" className={step === 3 ? 'block' : 'hidden'}>
          <StepHeading
            title="主要改造诉求"
            description="选择最想解决的问题，我们将据此建立改造优先级。"
          />
          <fieldset className="mt-8">
            <legend className="text-sm font-medium text-[#29443a]">主要诉求（至少选择一项）</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {needOptions.map(([value, label]) => (
                <CheckCard key={value} name="needs" value={value} label={label} />
              ))}
            </div>
          </fieldset>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="最优先空间">
              <select className={inputClass} name="priorityArea" defaultValue="" required>
                <option value="" disabled>
                  请选择
                </option>
                <option value="bathroom">卫生间</option>
                <option value="entrance">玄关</option>
                <option value="living-room">客厅</option>
                <option value="bedroom">卧室</option>
                <option value="kitchen">厨房</option>
                <option value="corridor">过道</option>
                <option value="whole-home">全屋</option>
              </select>
            </Field>
            <Field label="预期预算（选填）">
              <select className={inputClass} name="budget" defaultValue="">
                <option value="">暂不确定</option>
                <option value="under-30k">3 万元以内</option>
                <option value="30k-80k">3–8 万元</option>
                <option value="80k-150k">8–15 万元</option>
                <option value="150k-300k">15–30 万元</option>
                <option value="over-300k">30 万元以上</option>
                <option value="undecided">希望评估后确定</option>
              </select>
            </Field>
            <Field label="计划时间（选填）">
              <select className={inputClass} name="timeline" defaultValue="">
                <option value="">请选择</option>
                <option value="asap">尽快开始</option>
                <option value="1-3m">1–3 个月</option>
                <option value="3-6m">3–6 个月</option>
                <option value="later">半年以后</option>
                <option value="research">先了解方案</option>
              </select>
            </Field>
            <label className={`${labelClass} sm:col-span-2`}>
              补充说明（选填）
              <textarea
                name="notes"
                rows={4}
                maxLength={1000}
                placeholder="例如：最近一年跌倒过两次，希望卫生间先做轻改造"
                className="resize-none rounded-xl border border-[#d8ded8] bg-white px-4 py-3 text-sm leading-6 outline-none focus:border-[#d96749]"
              />
            </label>
          </div>
        </section>

        <section data-step="4" className={step === 4 ? 'block' : 'hidden'}>
          <StepHeading
            title="上传现场图片并留下联系方式"
            description="建议上传卫生间、主要通道和您最担心的位置，图片仅用于本次评估。"
          />
          <div className="mt-8">
            <label className="block cursor-pointer rounded-[22px] border-2 border-dashed border-[#cbd5ce] bg-[#f7f8f5] px-6 py-9 text-center transition hover:border-[#d96749]">
              <input
                ref={fileRef}
                className="sr-only"
                type="file"
                name="photos"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={(event) => handleFiles(event.target.files)}
              />
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-[#e6ece7] text-2xl text-[#365247]">
                ＋
              </span>
              <strong className="mt-4 block text-sm">选择住宅现场图片</strong>
              <span className="mt-2 block text-xs text-[#7b8982]">
                最多 5 张，支持 JPG、PNG、WebP，单张不超过 8MB
              </span>
            </label>
            {previews.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {previews.map((preview, index) => (
                  <div
                    key={preview.url}
                    className="group relative aspect-square overflow-hidden rounded-xl bg-[#edf1eb]"
                  >
                    <Image
                      src={preview.url}
                      alt={`待上传图片 ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-black/65 text-sm text-white"
                      aria-label={`移除 ${preview.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="联系人">
              <input
                className={inputClass}
                name="contactName"
                autoComplete="name"
                placeholder="怎么称呼您"
                required
              />
            </Field>
            <Field label="手机号码">
              <input
                className={inputClass}
                name="phone"
                autoComplete="tel"
                inputMode="numeric"
                pattern="1[3-9][0-9]{9}"
                placeholder="11 位手机号码"
                required
              />
            </Field>
            <Field label="方便联系时间（选填）">
              <select className={inputClass} name="bestContactTime" defaultValue="anytime">
                <option value="morning">上午 09:00–12:00</option>
                <option value="afternoon">下午 12:00–18:00</option>
                <option value="evening">晚上 18:00–21:00</option>
                <option value="anytime">均可</option>
              </select>
            </Field>
          </div>
          <p className="mt-6 rounded-xl bg-[#edf1eb] p-4 text-xs leading-6 text-[#607269]">
            提交即表示您同意我们仅为需求评估、方案沟通和预约上门使用这些信息。住宅照片不会在网站公开展示。
          </p>
        </section>

        {(stepError || state.message) && (
          <p role="alert" className="mt-6 rounded-xl bg-[#fff1eb] px-4 py-3 text-sm text-[#a54d37]">
            {stepError || state.message}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-[#e3e7e3] pt-6">
          <button
            type="button"
            onClick={() => {
              setStep((current) => Math.max(0, current - 1))
              scrollToForm()
            }}
            disabled={step === 0 || pending}
            className="rounded-full px-5 py-3 text-sm font-semibold text-[#52665d] transition hover:bg-[#edf1eb] disabled:invisible"
          >
            ← 上一步
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="rounded-full bg-[#173c31] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d96749]"
            >
              下一步 →
            </button>
          ) : (
            <button
              type="submit"
              disabled={pending}
              className="rounded-full bg-[#d96749] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c45b40] disabled:cursor-wait disabled:opacity-60"
            >
              {pending ? '正在安全提交…' : '提交综合评估'}
            </button>
          )}
        </div>
      </div>
    </form>
  )
}

function StepHeading({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <p className="eyebrow">STEP BY STEP</p>
      <h2 className="mt-4 text-3xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[#718078]">{description}</p>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className={labelClass}>
      {label}
      {children}
    </label>
  )
}

function CheckCard({ name, value, label }: { name: string; value: string; label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#dce2dc] bg-white p-4 text-sm transition has-checked:border-[#d96749] has-checked:bg-[#fff5f0]">
      <input type="checkbox" name={name} value={value} className="size-4 accent-[#d96749]" />
      <span>{label}</span>
    </label>
  )
}
