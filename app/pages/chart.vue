<template>
  <div class="min-h-screen bg-gradient-to-b from-rose-50 via-fuchsia-50 to-sky-50 px-4 py-10 font-nanum">
    <div class="mx-auto max-w-5xl">
      <div class="mb-8 text-center">
        <p class="text-sm text-gray-500">블링이 성별 예상 투표 현황</p>
        <h1 class="mt-2 text-3xl font-extrabold text-gray-800">투표 결과 차트</h1>
        <p class="mt-2 text-sm text-gray-500">
          총 {{ stats.total }}표 · 마지막 갱신 {{ formattedUpdatedAt }}
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <div class="rounded-3xl bg-white p-5 shadow-lg">
          <p class="text-sm text-gray-500">총 투표 수</p>
          <p class="mt-2 text-3xl font-extrabold text-gray-800">{{ stats.total }}</p>
        </div>

        <div class="rounded-3xl bg-pink-50 p-5 shadow-lg">
          <p class="text-sm text-pink-500">딸 예상</p>
          <p class="mt-2 text-3xl font-extrabold text-pink-500">{{ stats.girl }}</p>
          <p class="mt-1 text-sm text-gray-500">{{ stats.girlRate }}%</p>
        </div>

        <div class="rounded-3xl bg-blue-50 p-5 shadow-lg">
          <p class="text-sm text-blue-500">아들 예상</p>
          <p class="mt-2 text-3xl font-extrabold text-blue-500">{{ stats.boy }}</p>
          <p class="mt-1 text-sm text-gray-500">{{ stats.boyRate }}%</p>
        </div>
      </div>

      <div class="mt-6 grid gap-6 md:grid-cols-2">
        <div class="rounded-3xl bg-white p-6 shadow-xl">
          <h2 class="mb-4 text-lg font-bold text-gray-800">도넛 차트</h2>
          <ClientOnly>
            <VoteDoughnutChart :girl="stats.girl" :boy="stats.boy" />
          </ClientOnly>
        </div>

        <div class="rounded-3xl bg-white p-6 shadow-xl">
          <h2 class="mb-4 text-lg font-bold text-gray-800">막대 차트</h2>
          <ClientOnly>
            <VoteBarChart :girl="stats.girl" :boy="stats.boy" />
          </ClientOnly>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <NuxtLink
            to="/reveal"
            class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-md transition hover:scale-105"
        >
          <span>🎈</span>
          <span>젠더리빌 페이지로 돌아가기</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import VoteDoughnutChart from '@/components/VoteDoughnutChart.client.vue'
import VoteBarChart from '@/components/VoteBarChart.client.vue'

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || '/api'

const stats = ref({
  boy: 0,
  girl: 0,
  total: 0,
  boyRate: 0,
  girlRate: 0,
  updatedAt: null as string | null,
})

const fetchStats = async () => {
  try {
    const result = await $fetch<{
      boy: number
      girl: number
      total: number
      boyRate: number
      girlRate: number
      updatedAt: string | null
    }>(`${apiBase}/vote-stats`)

    stats.value = result
  } catch (error) {
    console.error(error)
  }
}

let timer: ReturnType<typeof setInterval> | null = null

onMounted(async () => {
  await fetchStats()
  timer = setInterval(fetchStats, 10000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const formattedUpdatedAt = computed(() => {
  if (!stats.value.updatedAt) return '아직 없음'
  return new Date(stats.value.updatedAt).toLocaleString('ko-KR')
})
</script>

<style scoped>
.font-nanum {
  font-family: 'NanumSquareRound', sans-serif;
}
</style>
