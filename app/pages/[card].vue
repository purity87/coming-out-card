<script setup lang="ts">
import Card from '~/components/Card.vue'
import { useCardPage } from '~/composables/useCardPage'

const {
  card,
  title,
  ultrasoundSrc,
  heartbeatSrc
} = useCardPage()
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
