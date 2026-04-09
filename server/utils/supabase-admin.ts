import { createClient } from '@supabase/supabase-js'
import { createError, type H3Event } from 'h3'

export const getSupabaseAdmin = (event: H3Event) => {
    const config = useRuntimeConfig(event)

    const supabaseUrl = config.supabaseUrl
    const supabaseSecretKey = config.supabaseSecretKey

    if (typeof supabaseUrl !== 'string' || !supabaseUrl) {
        throw createError({
            statusCode: 500,
            statusMessage: 'NUXT_SUPABASE_URL 설정을 확인해 주세요.',
        })
    }

    if (typeof supabaseSecretKey !== 'string' || !supabaseSecretKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'NUXT_SUPABASE_SECRET_KEY 설정을 확인해 주세요.',
        })
    }

    return createClient(supabaseUrl, supabaseSecretKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    })
}
