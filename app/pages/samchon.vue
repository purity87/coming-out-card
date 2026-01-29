<script setup lang="ts">
import Card from '~/components/Card.vue'

const title = '❤️ 삼촌 ❤️'
const mainText = '저는 <span class="text-purple-600 font-bold">블링</span>이에요.'
const subText = '무럭무럭 자라서 우리 <span class="font-semibold text-xl">9월</span>에 만나요 💕'
const footerText = '보고 싶어요. 사랑해요♥️'
const babyImage = '/bling-baby.png'

// 필요 시 옵션
const ultrasoundSrc = undefined
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
