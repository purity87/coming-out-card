import { useRoute } from 'vue-router'
import { CARD_META } from '~/constants/cardMeta'

export function useCardPage() {
    const route = useRoute()
    console.log('route.params.card', route.params.card);
    console.log('CARD_META keys', Object.keys(CARD_META));

    // params 가드
    if (typeof route.params.card !== 'string') {
        showError({ statusCode: 404 })
    }

    const cardKey = '/' + route.params.card

    const card = CARD_META[cardKey as keyof typeof CARD_META]

    // 카드 없으면 404
    if (!card) {
        showError({ statusCode: 404 })
    }
    console.log('[useCardPage]', route.params, route.query)

    // name=AA,BB
    const names =
        typeof route.query.name === 'string'
            ? route.query.name.split(',').map(n => n.trim())
            : []

    const title = names.length
        ? `❤️ ${card.roles
            .map((role, i) => `${names[i] || ''} ${role}`.trim())
            .join(', ')} ❤️`
        : card.title

    return {
        card,
        title,
        ultrasoundSrc: card.ultrasoundImage || undefined,
        heartbeatSrc: card.heartbeatAudio || undefined
    }
}
