'use server'

import { getSupabaseAdmin } from '@/lib/supabase'

export type InquiryState = {
  success: boolean
  message: string
  errors?: Partial<Record<'name' | 'phone' | 'city' | 'need' | 'message', string>>
}

const allowedNeeds = new Set(['bathroom', 'whole-home', 'mobility', 'dementia', 'assessment'])

const clean = (value: FormDataEntryValue | null, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

export async function submitInquiry(
  _previousState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = clean(formData.get('name'), 40)
  const phone = clean(formData.get('phone'), 24)
  const city = clean(formData.get('city'), 40)
  const need = clean(formData.get('need'), 30)
  const message = clean(formData.get('message'), 500)
  const errors: InquiryState['errors'] = {}

  if (name.length < 2) errors.name = '请填写至少 2 个字的称呼'
  if (!/^1[3-9]\d{9}$/.test(phone)) errors.phone = '请填写有效的 11 位手机号码'
  if (city.length < 2) errors.city = '请填写所在城市'
  if (!allowedNeeds.has(need)) errors.need = '请选择一项主要需求'

  if (Object.keys(errors).length > 0) {
    return { success: false, message: '请检查表单中的信息', errors }
  }

  try {
    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from('inquiries').insert({
      name,
      phone,
      city,
      need,
      message: message || null,
      status: 'new',
    })
    if (error) throw error
    return {
      success: true,
      message: '提交成功。适老规划师将在 1 个工作日内与您联系。',
    }
  } catch (error) {
    console.error('[inquiries] 写入失败:', error)
    return {
      success: false,
      message: '暂时无法提交，请稍后再试，或拨打 400-816-5060。',
    }
  }
}
