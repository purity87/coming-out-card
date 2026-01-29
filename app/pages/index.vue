<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f7f3ef] px-4">
    <!-- 종이 바닥 -->
    <div class="relative w-full max-w-md aspect-[3/4]">

      <!-- 뒤 종이 (레이어) -->
      <div
          class="absolute inset-0 bg-[#fffaf6] rounded-3xl shadow-md rotate-[-1.5deg]"
      ></div>

      <!-- 앞 종이 -->
      <div
          class="absolute inset-0 bg-[#fffdfb] rounded-3xl shadow-lg rotate-[1deg]"
      ></div>

      <!-- 중앙 입체 카드 -->
      <div
          class="relative z-10 bg-white rounded-2xl shadow-2xl px-8 py-10 text-center
               top-1/2 -translate-y-1/2 mx-6"
      >
        <!-- 상단 아이콘 -->
        <div class="text-5xl mb-4">👶🏻✨</div>

        <!-- 메인 문구 -->
        <h1 class="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
          할머니, 할아버지가 되신 것을<br />
          축하드려요 💐
        </h1>

        <!-- 서브 문구 -->
        <p class="text-gray-600 mb-6 leading-relaxed">
          우리 가족에게<br />
          소중한 새 생명이 찾아왔어요.
        </p>

        <!-- 태명 강조 -->
        <div class="bg-pink-50 rounded-xl py-4 mb-6">
          <p class="text-sm text-gray-500 mb-1">태명</p>
          <p class="text-2xl font-semibold text-pink-500">
            블링이 ✨
          </p>
        </div>

        <!-- 하단 -->
        <p class="text-sm text-gray-500">
          많이 사랑해 주세요 🤍
        </p>
      </div>
    </div>
  </div>
</template>
