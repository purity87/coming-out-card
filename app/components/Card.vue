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

        <!-- 하단: 초음파 동영상 + 초음파 사진 + 심장소리 -->
        <div class="flex flex-col items-center justify-center">
          <p v-if="!ultrasoundVideoSrc && !ultrasoundSrc && !heartbeatSrc" class="text-gray-400 mb-4">
            잠시만 기다려 주세요 (로딩중...)
          </p>

          <!-- 초음파 동영상 -->
          <div v-if="ultrasoundVideoSrc" class="mb-6 w-full max-w-md">
            <video
                :src="ultrasoundVideoSrc"
                autoplay
                muted
                loop
                playsinline
                controls
                class="w-full rounded-2xl shadow-lg"
            ></video>
          </div>

          <!-- 📸 초음파 사진 -->
          <div v-if="ultrasoundSrc" class="mb-6">
            <img
                :src="ultrasoundSrc"
                alt="초음파 사진"
                class="w-100 rounded-2xl shadow-lg"
            />
          </div>

          <!-- ❤️ 심장소리 -->
          <div v-if="heartbeatSrc" class="w-full text-center mt-3">
            <!-- 실제 오디오는 숨김 -->
            <audio ref="audioRef" preload="auto">
              <source :src="heartbeatSrc" type="audio/mp4" />
            </audio>

            <!-- 버튼 -->
            <button
                @click="playHeartbeat"
                class="
                  inline-flex items-center justify-center gap-2
                  px-5 py-2
                  rounded-full
                  bg-gradient-to-r from-pink-400 to-purple-500
                  text-white text-md font-semibold
                  shadow-md
                  hover:scale-105 active:scale-95
                  transition-all duration-200
                "
                :class="{ 'animate-pulse': isPlaying }"
            >
              <span class="text-xl">
                {{ isPlaying ? '💓' : '🔊' }}
              </span>
              <span>
                {{ isPlaying ? '재생 중…' : '심장소리 듣기' }}
              </span>
            </button>

            <!-- 안내 문구 -->
            <p class="mt-2 text-xs text-gray-500">
              🔊 볼륨을 조금 높여서 들어주세요
            </p>
          </div>
        </div>


        <!-- 📷 성장 앨범 -->
        <div v-if="albumImages?.length" class="w-full mt-6">

          <p class="text-sm font-semibold text-gray-500 mb-2 text-center">
            📷 성장 앨범
          </p>

          <div class="flex gap-3 overflow-x-auto pb-2">
            <img
                v-for="(img, i) in albumImages"
                :key="img"
                :src="img"
                class="
                  w-60 h-60
                  object-cover
                  rounded-xl
                  shadow
                  flex-shrink-0
                  cursor-pointer
                  hover:scale-105
                  transition
                "
                @click="openViewer(i)"
            />
          </div>

        </div>


      </div>
    </div>

    <!-- ⭐ 앨범 전체화면 -->
    <div
        v-if="viewerOpen && albumImages"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        @click="closeViewer"
    >
      <img
          :src="albumImages[currentIndex]"
          class="max-h-[90vh] max-w-[90vw] rounded-2xl"
      />
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
  ultrasoundVideoSrc?: string
  ultrasoundSrc?: string
  heartbeatSrc?: string
  albumImages?: readonly string[]
}>()

const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

function playHeartbeat() {
  if (!audioRef.value) return

  audioRef.value.volume = 1.0
  audioRef.value.currentTime = 0
  audioRef.value.play()

  isPlaying.value = true

  audioRef.value.onended = () => {
    isPlaying.value = false
  }
}

function onImageError(event: Event) {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}

/* ⭐ 앨범 viewer */
const viewerOpen = ref(false)
const currentIndex = ref(0)

function openViewer(i:number){
  currentIndex.value = i
  viewerOpen.value = true
}

function closeViewer(){
  viewerOpen.value = false
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
