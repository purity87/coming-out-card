<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-purple-50 px-4 font-nanum">
    <!-- 카드 -->
    <div class="bg-white rounded-[2.5rem] shadow-2xl p-10 max-w-4xl w-full relative">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- 좌측: 초음파 + 심장소리 -->
        <div class="flex flex-col items-center justify-center">
          <p class="text-gray-400 mb-4">이미지/사운드 준비중</p>

          <div v-if="ultrasoundSrc" class="mb-6">
            <img
                :src="ultrasoundSrc"
                alt="초음파 사진"
                class="w-64 rounded-2xl shadow"
            />
          </div>

          <div v-if="hasHeartbeat" class="w-full">
            <audio controls class="w-full">
<!--              <source src="/heartbeat.mp3" type="audio/mpeg" />-->
            </audio>
          </div>
        </div>

        <!-- 우측: 블링이 + 멘트 -->
        <div class="text-center">
          <div class="mb-6">
            <img
                src="/bling-baby.png"
                alt="블링이 이미지"
                class="mx-auto w-56 h-56 object-contain rounded-full"
                @error="onImageError"
            />
          </div>

          <h1 class="text-2xl font-bold text-gray-800 mb-4 leading-relaxed rounded-lg">
            안녕하세요!<br />
            ❤️ 할아버지, 할머니 ❤️
          </h1>

          <p class="text-gray-600 mb-4 leading-relaxed rounded-lg">
            저는
            <span class="text-3xl font-bold text-purple-600">블링</span>이예요.
          </p>

          <p class="text-gray-600 mb-6 leading-relaxed rounded-lg">
            무럭무럭 자라서<br />
            우리 <span class="font-semibold text-xl">9월</span>에 만나요 💕
          </p>

          <div class="text-sm text-gray-400 leading-relaxed rounded-lg">
            <p>보고 싶어요. 사랑해요♥️</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const ultrasoundSrc = ref<string | null>(null)
const hasHeartbeat = ref(false)

onMounted(() => {
  // 초음파 이미지 존재 여부 확인
  // const img = new Image()
  // img.onload = () => (ultrasoundSrc.value = '/ultrasound.jpg')
  // img.onerror = () => (ultrasoundSrc.value = null)
  // img.src = '/ultrasound.jpg'
  //
  // // 심장소리 존재 여부 확인
  // fetch('/heartbeat.mp3', { method: 'HEAD' })
  //     .then(res => (hasHeartbeat.value = res.ok))
  //     .catch(() => (hasHeartbeat.value = false))
})

function onImageError(event: Event) {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}
</script>

<style scoped>
/* 카드에 떠 있는 느낌 애니메이션 */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}
</style>
