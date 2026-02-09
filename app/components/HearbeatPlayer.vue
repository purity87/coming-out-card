<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
}>()

const audioRef = ref<HTMLAudioElement | null>(null)

function play() {
  audioRef.value?.play()
}
</script>

<template>
  <div class="w-full text-center">
    <audio ref="audioRef" preload="none">
      <source :src="src" type="audio/mp4" />
    </audio>

    <button
        @click="play"
        class="mt-4 px-5 py-2 rounded-full bg-pink-500 text-white shadow hover:bg-pink-600 transition"
    >
      💓 심장소리 듣기
    </button>
  </div>
</template>
