<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'
import { CARD_URI, type CardUri } from '~/constants/cardUri'

type CardLink = {
  name: string
  uri: CardUri
  qrDataUrl?: string
}

// 카드 목록 (URI는 무조건 CARD_URI만 사용)
const cards = ref<CardLink[]>([
  { name: '할머니&할아버지', uri: CARD_URI.HALMONIM },
  { name: '이모', uri: CARD_URI.IMO },
  { name: '삼촌', uri: CARD_URI.SAMCHON },
  { name: '이모&이모부', uri: CARD_URI.MAMA_FAMILY },
  { name: '고모&고모부', uri: CARD_URI.PAPA_FAMILY },
  { name: '정화&기중 친구들', uri: CARD_URI.MA_PA_FRIENDS },
  { name: '형신&상연', uri: CARD_URI.HS },
  { name: '성인&도영', uri: CARD_URI.SI },
  { name: 'Yunyoung&Max', uri: CARD_URI.YY },
  { name: '지원', uri: CARD_URI.JW }
])

// QR 생성
onMounted(async () => {
  if (!process.client) return

  for (const card of cards.value) {
    try {
      card.qrDataUrl = await QRCode.toDataURL(
          window.location.origin + card.uri
      )
    } catch (err) {
      console.error('QR 생성 실패:', card.uri, err)
    }
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-10 bg-purple-50 p-10">
    <h1 class="text-3xl font-bold mb-8 text-purple-700">
      블링이 카드 QR
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
          v-for="card in cards"
          :key="card.uri"
          class="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl"
      >
        <h2 class="font-bold text-lg text-gray-800 mb-4">
          {{ card.name }}
        </h2>

        <img
            v-if="card.qrDataUrl"
            :src="card.qrDataUrl"
            alt="QR 코드"
            class="w-40 h-40"
        />

        <a
            :href="card.uri"
            class="mt-4 text-purple-600 hover:underline"
        >
          바로보기
        </a>
      </div>
    </div>
  </div>
</template>
