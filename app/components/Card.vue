<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-purple-50 px-4 font-nanum">
    <!-- 카드 -->
    <div class="bg-white rounded-[2.5rem] shadow-2xl p-10 max-w-4xl w-full relative animate-float">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- 상단: 아기 이미지 + 멘트 -->
        <div class="text-center">
          <div class="mb-6">
            <img
                :src="babyImage"
                alt="블링이 이미지"
                class="mx-auto w-56 h-56 object-contain rounded-full"
                @error="onImageError"
            />
          </div>

          <p class="text-gray-600 mb-4 leading-relaxed rounded-lg" >안녕하세요!</p>

          <p class="text-lg font-bold text-gray-800 mb-4 leading-relaxed rounded-lg" v-html="title"></p>

          <p class="text-gray-600 mb-4 leading-relaxed rounded-lg" v-html="mainText"></p>

          <p class="text-gray-600 mb-6 leading-relaxed rounded-lg" v-html="subText"></p>

          <div class="text-sm text-gray-600 leading-relaxed rounded-lg" v-html="footerText"></div>
        </div>

        <!-- 하단: 초음파 + 심장소리 -->
        <div class="flex flex-col items-center justify-center">
          <p v-if="!ultrasoundSrc && !heartbeatSrc" class="text-gray-400 mb-4">
            이미지/사운드 준비중
          </p>

          <div v-if="ultrasoundSrc" class="mb-6">
            <img
                :src="ultrasoundSrc"
                alt="초음파 사진"
                class="w-64 rounded-2xl shadow"
            />
          </div>

          <!-- ❤️ 심장소리 -->
          <div v-if="heartbeatSrc" class="w-full text-center">
            <audio ref="audioRef" preload="none">
              <source :src="heartbeatSrc" type="audio/mp4" />
            </audio>

            <button
                @click="playHeartbeat"
                class="mt-4 px-6 py-3 rounded-full
               bg-purple-400 text-white shadow
               hover:bg-purple-600 transition
               text-lg font-semibold"
            >
              ▶▶ 💓심장소리 듣기
            </button>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string
  mainText: string
  subText: string
  footerText: string
  babyImage: string
  ultrasoundSrc?: string
  heartbeatSrc?: string
}>()

const audioRef = ref<HTMLAudioElement | null>(null)

function playHeartbeat() {
  audioRef.value?.play()
}

function onImageError(event: Event) {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}
</script>

<style scoped>
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
