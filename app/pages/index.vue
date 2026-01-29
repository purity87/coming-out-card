<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-6">
    <div class="relative max-w-sm w-full">
      <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400 via-fuchsia-400 to-purple-400 blur-sm opacity-60"></div>


      <div class="relative bg-white rounded-3xl shadow-2xl p-6 text-center">
        <div class="relative mt-4">
          <p class="text-sm text-gray-500">태명</p>
          <h1 class="text-3xl font-bold text-pink-500 tracking-wide">✨ 블링 ✨</h1>
        </div>


        <transition name="fade">
          <div v-if="revealed" class="relative mt-6 space-y-3">
            <p class="text-lg font-medium">저는 <strong>블링</strong>이에요 🌈</p>
            <p class="text-sm text-gray-600">
              말하기까지 시간이 조금 걸렸지만,<br />
              제 모습 그대로를 전하고 싶었어요.
            </p>
            <p class="text-sm text-gray-500">블링이를 따뜻하게 봐주면 고마울 것 같아요 💖</p>
          </div>
        </transition>


        <button
            v-if="!revealed"
            class="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-lg"
            @click="revealed = true"
        >
          카드 열기
        </button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
const revealed = ref(false)
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>