import { createError } from 'h3'

type GenderType = 'boy' | 'girl'

export default defineEventHandler((event) => {
    const config = useRuntimeConfig(event)
    const gender = config.revealGender as GenderType

    if (gender !== 'boy' && gender !== 'girl') {
        throw createError({
            statusCode: 500,
            statusMessage: 'NUXT_REVEAL_GENDER 값이 올바르지 않아요.',
        })
    }

    return {
        gender,
    }
})
