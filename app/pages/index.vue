<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

type CardLink = {
  name: string
  uri: string
  qrDataUrl?: string
}

// 카드 목록 정의
const cards = ref<CardLink[]>([
  { name: '할머니&할아버지', uri: import.meta.env.VITE_CARD_HALMONIM },
  { name: '이모', uri: import.meta.env.VITE_CARD_IMO },
  { name: '삼촌', uri: import.meta.env.VITE_CARD_SAMCHON },
  { name: '이모&이모부', uri: import.meta.env.VITE_CARD_IMO_IMOBU },
  { name: '고모&고모부', uri: import.meta.env.VITE_CARD_GOMO_GOMOBU },
  { name: '엄마&아빠 친구들', uri: import.meta.env.VITE_CARD_MAMA_PAPA_FRIENDS }
])

// QR 생성
onMounted(() => {
  cards.value.forEach(async (card) => {
    try {
      card.qrDataUrl = await QRCode.toDataURL(import.meta.env.VITE_CARD_APP + card.uri)
    } catch (err) {
      console.error('QR 생성 실패:', err)
    }
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-10 bg-purple-50 p-10">
    <h1 class="text-3xl font-bold mb-8 text-purple-700">블링이 카드 QR</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="card in cards" :key="card.uri" class="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl">
        <h2 class="font-bold text-lg text-gray-800 mb-4">{{ card.name }}</h2>
        <img v-if="card.qrDataUrl" :src="card.qrDataUrl" alt="QR 코드" class="w-40 h-40" />
        <a :href="card.uri" class="mt-4 text-purple-600 hover:underline">바로보기</a>
      </div>
    </div>
  </div>
</template>
