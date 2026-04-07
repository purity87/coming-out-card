<script setup lang="ts">
import Card from '~/components/CardEn.vue'
import {useCardPage} from "~/composables/useCardPage";
const {
  card,
  title,
  ultrasoundVideoSrc,
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
      :ultrasoundVideoSrc="ultrasoundVideoSrc"
      :ultrasoundSrc="ultrasoundSrc"
      :heartbeatSrc="heartbeatSrc"
  />
</template>
