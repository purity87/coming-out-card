<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200">
    <div class="bg-white rounded-3xl shadow-xl p-8 text-center">
      <h1 class="text-xl font-semibold mb-4">블링 카드 QR</h1>


      <canvas
          ref="qrCanvas"
          class="mx-auto w-48 h-48 rounded-xl shadow-md"
      />


      <p class="mt-4 text-sm text-gray-500">
        이 QR을 찍으면 블링 카드가 열려요 💗
      </p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'


const qrCanvas = ref<HTMLCanvasElement | null>(null)


// 👉 QR이 가리킬 주소 = 메인 카드 (/)
const targetUrl = typeof window !== 'undefined'
    ? window.location.origin + '/'
    : ''


onMounted(async () => {
  if (!qrCanvas.value || !targetUrl) return


  await QRCode.toCanvas(qrCanvas.value, targetUrl, {
    width: 260,
    margin: 2,
    color: {
      dark: '#ec4899',
      light: '#ffffff'
    }
  })
})
</script>