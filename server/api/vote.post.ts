import { createError, readBody } from 'h3'
import { getSupabaseAdmin } from '../utils/supabase-admin'

type VoteChoice = 'boy' | 'girl'

export default defineEventHandler(async (event) => {
    const body = await readBody<{
        choice?: VoteChoice
        visitorToken?: string
    }>(event)

    const choice = body?.choice
    const visitorToken = body?.visitorToken?.trim()

    if (!visitorToken || !choice || !['boy', 'girl'].includes(choice)) {
        throw createError({
            statusCode: 400,
            statusMessage: '잘못된 요청이에요.',
        })
    }

    const supabase = getSupabaseAdmin(event)

    const { error: upsertError } = await supabase
        .from('gender_votes')
        .upsert(
            {
                visitor_token: visitorToken,
                choice,
            },
            {
                onConflict: 'visitor_token',
            }
        )

    if (upsertError) {
        throw createError({
            statusCode: 500,
            statusMessage: upsertError.message,
        })
    }

    const { data, error } = await supabase
        .from('gender_votes')
        .select('choice')

    if (error) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }

    const boy = data.filter((row) => row.choice === 'boy').length
    const girl = data.filter((row) => row.choice === 'girl').length
    const total = boy + girl

    return {
        ok: true,
        myVote: choice,
        stats: {
            boy,
            girl,
            total,
            boyRate: total ? Number(((boy / total) * 100).toFixed(1)) : 0,
            girlRate: total ? Number(((girl / total) * 100).toFixed(1)) : 0,
        },
    }
})
