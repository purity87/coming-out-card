<script setup lang="ts">
import Card from '~/components/Card.vue'
import {CARD_META} from "~/constants/cardMeta";
import {CARD_URI} from "~/constants/cardUri";

const route = useRoute()
const card = CARD_META[CARD_URI.MA_PA_FRIENDS]

const names = typeof route.query.name === 'string'
    ? route.query.name.split(',').map(n => n.trim())
    : []

// 핵심 로직
const title = names.length
    ? `❤️ ${card.roles
        .map((role, i) => `${names[i] || ''} ${role}`.trim())
        .join(', ')} ❤️`
    : card.title

// 필요 시 옵션
const ultrasoundSrc = card.ultrasoundImage ? card.ultrasoundImage : undefined
const heartbeatSrc = undefined
</script>

<template>
  <Card
      :title="title"
      :mainText="card.mainText"
      :subText="card.subText"
      :footerText="card.footerText"
      :babyImage="card.babyImage"
      :ultrasoundSrc="ultrasoundSrc"
      :heartbeatSrc="heartbeatSrc"
  />
</template>
