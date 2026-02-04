import { useRoute } from 'vue-router'
import { CARD_META } from '~/constants/cardMeta'

export function useCardPage() {
    const route = useRoute()

    const cardKey = `/${route.params.card}` as keyof typeof CARD_META
    const card = CARD_META[cardKey]

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
