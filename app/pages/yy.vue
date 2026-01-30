<script setup lang="ts">
import Card from '~/components/CardEn.vue'

const title = '❤️ Aunt Yunyoung & Uncle Max ❤️'
const mainText = 'Hi! I’m <span class="text-purple-600 font-bold">Bling</span>.'
const subText = 'I’m growing healthy and strong every day!<br/>\
  We’ll meet in <span class="font-semibold text-xl">September</span> 💕'
const footerText = 'I can’t wait to see you. Love you! ♥️'
const babyImage = '/bling-baby.png'

// 필요 시 옵션
const ultrasoundSrc = "5w5d.png"
const heartbeatSrc = undefined
</script>

<template>
  <Card
      :title="title"
      :mainText="mainText"
      :subText="subText"
      :footerText="footerText"
      :babyImage="babyImage"
      :ultrasoundSrc="ultrasoundSrc"
      :heartbeatSrc="heartbeatSrc"
  />
</template>
