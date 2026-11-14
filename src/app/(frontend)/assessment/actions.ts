'use server'

import { getSupabaseAdmin } from '@/lib/supabase'

export type AssessmentState = {
  success: boolean
  message: string
  uploaded?: number
}

const initialError: AssessmentState = {
  success: false,
  message: '请检查填写内容后重试。',
}

const allowed = {
  propertyType: new Set(['apartment', 'old-house', 'self-built', 'villa', 'other']),
  renovationStatus: new Set(['unfinished', 'good', 'aged', 'recent', 'unknown']),
  healthConditions: new Set([
    'healthy',
    'balance',
    'parkinson',
    'hemiplegia',
    'wheelchair',
    'cerebellar',
    'cognitive',
    'vision',
    'hearing',
    'chronic',
  ]),
  mobilityLevel: new Set(['independent', 'aided', 'wheelchair', 'assisted', 'bedridden']),
  careArrangement: new Set(['alone', 'couple', 'family', 'caregiver', 'other']),
  needs: new Set([
    'bathroom',
    'fall-prevention',
    'mobility',
    'bedroom',
    'kitchen',
    'cognitive',
    'smart-care',
    'care-support',
    'whole-home',
  ]),
  priorityArea: new Set([
    'bathroom',
    'entrance',
    'living-room',
    'bedroom',
    'kitchen',
    'corridor',
    'whole-home',
  ]),
  budget: new Set(['under-30k', '30k-80k', '80k-150k', '150k-300k', 'over-300k', 'undecided']),
  timeline: new Set(['asap', '1-3m', '3-6m', 'later', 'research']),
  bestContactTime: new Set(['morning', 'afternoon', 'evening', 'anytime']),
}

const clean = (formData: FormData, name: string, max = 160) => {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

const numberValue = (formData: FormData, name: string) => {
  const value = Number(clean(formData, name, 20))
  return Number.isFinite(value) ? value : Number.NaN
}

const selected = (formData: FormData, name: string, options: Set<string>) =>
  formData
    .getAll(name)
    .filter((value): value is string => typeof value === 'string' && options.has(value))

const choice = (formData: FormData, name: keyof typeof allowed) => {
  const value = clean(formData, name)
  return allowed[name].has(value) ? value : ''
}

const isUploadedFile = (value: FormDataEntryValue): value is File =>
  typeof value !== 'string' && value.size > 0

const safeStorageName = (name: string) =>
  name.replace(/[^\w.\-\u4e00-\u9fa5]+/g, '_').slice(-80) || 'photo'

export async function submitAssessment(
  _previousState: AssessmentState,
  formData: FormData,
): Promise<AssessmentState> {
  const city = clean(formData, 'city', 40)
  const district = clean(formData, 'district', 60)
  const community = clean(formData, 'community', 100)
  const address = clean(formData, 'address', 160)
  const floor = numberValue(formData, 'floor')
  const totalFloors = numberValue(formData, 'totalFloors')
  const propertyType = choice(formData, 'propertyType')
  const layout = clean(formData, 'layout', 60)
  const area = numberValue(formData, 'area')
  const buildingAge = clean(formData, 'buildingAge', 40)
  const renovationStatus = choice(formData, 'renovationStatus')
  const renovationYear = clean(formData, 'renovationYear', 40)
  const elderCount = numberValue(formData, 'elderCount')
  const elderAges = clean(formData, 'elderAges', 100)
  const healthConditions = selected(formData, 'healthConditions', allowed.healthConditions)
  const mobilityLevel = choice(formData, 'mobilityLevel')
  const careArrangement = choice(formData, 'careArrangement')
  const needs = selected(formData, 'needs', allowed.needs)
  const priorityArea = choice(formData, 'priorityArea')
  const budget = choice(formData, 'budget')
  const timeline = choice(formData, 'timeline')
  const notes = clean(formData, 'notes', 1000)
  const contactName = clean(formData, 'contactName', 40)
  const phone = clean(formData, 'phone', 24)
  const bestContactTime = choice(formData, 'bestContactTime')
  const photos = formData.getAll('photos').filter(isUploadedFile)

  if (
    city.length < 2 ||
    district.length < 1 ||
    community.length < 2 ||
    !Number.isInteger(floor) ||
    !Number.isInteger(totalFloors) ||
    totalFloors < 1 ||
    floor > totalFloors ||
    !propertyType ||
    layout.length < 2 ||
    !Number.isFinite(area) ||
    area < 10 ||
    !renovationStatus ||
    !Number.isInteger(elderCount) ||
    elderCount < 1 ||
    elderCount > 10 ||
    elderAges.length < 2 ||
    healthConditions.length === 0 ||
    !mobilityLevel ||
    !careArrangement ||
    needs.length === 0 ||
    !priorityArea ||
    contactName.length < 2 ||
    !/^1[3-9]\d{9}$/.test(phone)
  ) {
    return initialError
  }

  if (photos.length > 5) {
    return { success: false, message: '最多上传 5 张住宅图片。' }
  }

  const imageTypes = new Set(['image/jpeg', 'image/png', 'image/webp'])
  if (photos.some((photo) => !imageTypes.has(photo.type) || photo.size > 8 * 1024 * 1024)) {
    return { success: false, message: '图片仅支持 JPG、PNG、WebP，且每张不超过 8MB。' }
  }

  try {
    const supabase = getSupabaseAdmin()
    const { data: inserted, error } = await supabase
      .from('assessment_requests')
      .insert({
        city,
        district,
        community,
        address: address || null,
        floor,
        total_floors: totalFloors,
        has_elevator: clean(formData, 'hasElevator') === 'yes',
        property_type: propertyType,
        layout,
        area,
        building_age: buildingAge || null,
        renovation_status: renovationStatus,
        renovation_year: renovationYear || null,
        occupied_during_work: clean(formData, 'occupiedDuringWork') === 'yes',
        elder_count: elderCount,
        elder_ages: elderAges,
        health_conditions: healthConditions,
        mobility_level: mobilityLevel,
        care_arrangement: careArrangement,
        needs,
        priority_area: priorityArea,
        budget: budget || null,
        timeline: timeline || null,
        notes: notes || null,
        contact_name: contactName,
        phone,
        best_contact_time: bestContactTime || null,
        status: 'new',
      })
      .select('id')
      .single()
    if (error) throw error

    const assessmentId = inserted.id as string
    let uploaded = 0
    for (const [index, photo] of photos.entries()) {
      try {
        const storagePath = `${assessmentId}/${Date.now()}-${index + 1}-${safeStorageName(photo.name)}`
        const { error: uploadError } = await supabase.storage
          .from('assessment-photos')
          .upload(storagePath, await photo.arrayBuffer(), {
            contentType: photo.type,
            upsert: false,
          })
        if (uploadError) throw uploadError

        const { error: imageError } = await supabase.from('assessment_images').insert({
          assessment_id: assessmentId,
          storage_path: storagePath,
          alt: `评估现场照片：${photo.name}`.slice(0, 120),
        })
        if (imageError) throw imageError
        uploaded += 1
      } catch {
        // The assessment remains valid if an individual optional image cannot be stored.
      }
    }

    const uploadNote =
      photos.length > uploaded
        ? `其中 ${uploaded}/${photos.length} 张图片上传成功，我们会在回访时补充确认。`
        : ''

    return {
      success: true,
      uploaded,
      message: `评估需求已提交。适老规划师将在 1 个工作日内联系您。${uploadNote}`,
    }
  } catch (error) {
    console.error('[assessment-requests] 写入失败:', error)
    return {
      success: false,
      message: '暂时无法提交评估，请稍后再试，或拨打 400-816-5060。',
    }
  }
}
