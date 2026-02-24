<script setup lang="ts">
import Card from '~/components/CardEn.vue'
import {HEARTBEAT_AUDIO, ULTRASOUND_IMAGE} from "~/constants/cardContents";

const title = '❤️Aunt Violet & Uncle Tarak❤️'
const mainText = 'Hi! I’m <span class="text-purple-600 font-bold">Bling</span>.'
const subText = 'I’m growing healthy <br/>\ and strong every day!<br/>\<br/>\
  We’ll meet in <span class="font-semibold text-xl">September</span> 💕'
const footerText = 'I can’t wait to see you. Love you! ♥️'
const babyImage = '/bling-baby.png'

// 필요 시 옵션
const ultrasoundSrc = ULTRASOUND_IMAGE.DEFAULT;
const heartbeatSrc = HEARTBEAT_AUDIO.DEFAULT;
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
