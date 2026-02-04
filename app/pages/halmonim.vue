<script setup lang="ts">
import Card from '~/components/Card.vue'
import { CARD_META } from '@/constants/cardMeta'
import { CARD_URI } from '@/constants/cardUri'

// 이 페이지가 어떤 카드인지 딱 하나만 지정 -> 여기서는 할머니 할아버지용
const card = CARD_META[CARD_URI.HALMONIM]

// 필요 시 옵션
const ultrasoundSrc = card.ultrasoundImage ? card.ultrasoundImage : undefined
const heartbeatSrc = undefined
</script>

<template>
  <Card
      :title="card.title"
      :mainText="card.mainText"
      :subText="card.subText"
      :footerText="card.footerText"
      :babyImage="card.babyImage"
      :ultrasoundSrc="ultrasoundSrc"
      :heartbeatSrc="heartbeatSrc"
  />
</template>
