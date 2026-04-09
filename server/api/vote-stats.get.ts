import { createError } from 'h3'
import { getSupabaseAdmin } from '../utils/supabase-admin'

export default defineEventHandler(async (event) => {
    const supabase = getSupabaseAdmin(event)

    const { data, error } = await supabase
        .from('gender_votes')
        .select('choice, updated_at')

    if (error) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }

    const boy = data.filter((row) => row.choice === 'boy').length
    const girl = data.filter((row) => row.choice === 'girl').length
    const total = boy + girl
    const updatedAt =
        data.length > 0
            ? data.map((row) => row.updated_at).sort().at(-1) ?? null
            : null

    return {
        boy,
        girl,
        total,
        boyRate: total ? Number(((boy / total) * 100).toFixed(1)) : 0,
        girlRate: total ? Number(((girl / total) * 100).toFixed(1)) : 0,
        updatedAt,
    }
})
