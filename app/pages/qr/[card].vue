<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-10 bg-purple-50 p-10">
    <!-- 타이틀 -->
    <h1 class="text-3xl font-bold mb-8 text-purple-700">
      💜 QR 카드 💜
    </h1>

    <!-- 카드 -->
    <div class="flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl w-80">
      <!-- 카드 이름 / 이름 쿼리 -->
      <h2 class="font-bold text-lg text-black mb-4">
        {{ displayName }}
      </h2>

      <!-- QR -->
      <img
          v-if="qrDataUrl"
          :src="qrDataUrl"
          alt="QR 코드"
          class="w-48 h-48"
      />

      <!-- 안내 -->
      <p class="mt-4 text-s text-black text-center break-all">
        QR을 카메라로 인식해주세요.
      </p>

      <!-- 바로보기 -->
      <a
          :href="targetUrl"
          class="mt-5 text-purple-600 font-semibold hover:underline"
      >
        바로보기 →
      </a>

      <!-- 저작권 -->
      <p class="mt-10 text-sm text-black text-right italic tracking-wide">
        ✨MADE BY. CHOI JEONG HWA ✨
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import QRCode from 'qrcode'
import { CARD_URI } from '~/constants/cardUri'

definePageMeta({
  ssr: false
})

const route = useRoute()

const cardParam = route.params.card as string

// 화면에 보여줄 이름 (ex: AA)
const displayName = computed(() => {
  const name = route.query.name
  return typeof name === 'string'
      ? decodeURIComponent(name)
      : ''
})

/**
 * 실제 이동할 URL (/imo?name=AA ...)
 */
const targetUrl = computed(() => {
  const uri = Object.values(CARD_URI).find(
      v => v.replace('/', '') === cardParam
  )
  if (!uri) return ''

  const query = new URLSearchParams(
      route.query as Record<string, string>
  ).toString()

  return window.location.origin + uri + (query ? `?${query}` : '')
})

const qrDataUrl = ref('')

onMounted(async () => {
  if (!targetUrl.value) return

  try {
    qrDataUrl.value = await QRCode.toDataURL(targetUrl.value, {
      width: 260,
      margin: 2
    })
  } catch (e) {
    console.error('QR 생성 실패', e)
  }
})
</script>

