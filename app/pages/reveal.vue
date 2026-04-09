<template>
  <div class="min-h-screen bg-gradient-to-b from-rose-50 via-fuchsia-50 to-sky-50 px-4 pt-10 pb-14 font-nanum">
    <div class="mx-auto mt-2 w-full max-w-md">
      <div class="relative overflow-hidden rounded-[40px] bg-white shadow-2xl">
        <div class="relative overflow-hidden bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100 px-6 pt-12 pb-8 text-center">
          <div class="pointer-events-none absolute inset-0 overflow-hidden">
            <div class="bubble bubble-1" />
            <div class="bubble bubble-2" />
            <div class="bubble bubble-3" />
            <div class="bubble bubble-4" />
          </div>

          <p class="mb-4 text-sm tracking-wide text-gray-500">
            두근두근✨ 블링이의 성별 공개
          </p>

          <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-800">
            Gender Reveal
          </h1>

          <p class="text-sm leading-relaxed text-gray-600">
            기다리고 기다리던 성별 공개의 날❤️ <br />
          </p>
        </div>

        <div class="px-5 py-6">
          <div class="flex flex-col gap-5">
            <div class="rounded-[28px] bg-gradient-to-br from-purple-50 to-pink-50 p-5">
              <div
                  class="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-600 shadow-sm"
              >
                <span>💌</span>
                <span>Our Special Day</span>
              </div>

              <h2 class="mb-3 text-2xl font-bold leading-snug text-gray-800">
                블링이는 <span class="text-sky-500">왕자님</span>일까?
                <span class="text-pink-500">공주님</span>일까?
              </h2>

              <p v-if="stats.total > 0" class="text-sm text-gray-500">
                현재까지 총 {{ stats.total }}명이 예상에 참여했어요.
              </p>
            </div>

            <div
                class="rounded-[32px] border p-5 shadow-xl transition-all duration-500"
                :class="revealed ? revealPanelClass : 'border-purple-100 bg-gradient-to-b from-white to-purple-50'"
            >
              <div class="text-center">
                <p v-if="!revealed" class="mb-3 text-sm text-gray-500">Ready?</p>

                <div v-if="!revealed" class="relative flex h-[260px] items-center justify-center overflow-hidden">
                  <div class="balloon-scene scale-[0.92]">
                    <div class="balloon balloon-main" />
                    <div class="balloon balloon-left" />
                    <div class="balloon balloon-right" />

                    <div class="balloon-knot knot-main" />
                    <div class="balloon-knot knot-left" />
                    <div class="balloon-knot knot-right" />

                    <div class="string string-main" />
                    <div class="string string-left" />
                    <div class="string string-right" />

                    <div class="balloon-shadow" />
                  </div>
                </div>

                <div v-else class="relative flex h-[280px] items-center justify-center overflow-hidden">
                  <div class="burst-ring" />

                  <span
                      v-for="n in 28"
                      :key="n"
                      class="confetti premium-confetti"
                      :style="confettiStyle(n)"
                  />

                  <span class="sparkle sparkle-1">✦</span>
                  <span class="sparkle sparkle-2">✦</span>
                  <span class="sparkle sparkle-3">✦</span>

                  <div class="relative z-10 text-center animate-reveal-rise">
                    <div class="mb-4 text-7xl animate-pop-soft">
                      {{ revealEmoji }}
                    </div>

                    <div
                        class="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-lg font-bold shadow-lg backdrop-blur-sm"
                        :class="pillClass"
                    >
                      {{ revealShort }}
                    </div>
                  </div>
                </div>

                <div class="mt-4">
                  <div
                      v-if="!voteSaved"
                      class="rounded-[24px] border border-purple-100 bg-white p-5"
                  >
                    <p class="mb-2 text-sm text-gray-500">공개 전에 먼저 예상해 주세요 ✨</p>
                    <p class="text-lg font-bold text-gray-800">
                      블링이는 딸일까요, 아들일까요?
                    </p>

                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <button
                          type="button"
                          class="rounded-full border border-pink-200 bg-pink-50 px-4 py-3 font-semibold text-pink-500 transition hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                          :disabled="voteLoading"
                          @click="submitVote('girl')"
                      >
                        {{ voteLoading ? '저장 중...' : '🩷 딸 같아요' }}
                      </button>

                      <button
                          type="button"
                          class="rounded-full border border-blue-200 bg-blue-50 px-4 py-3 font-semibold text-blue-500 transition hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                          :disabled="voteLoading"
                          @click="submitVote('boy')"
                      >
                        {{ voteLoading ? '저장 중...' : '🩵 아들 같아요' }}
                      </button>
                    </div>

                    <p class="mt-3 text-xs text-gray-400">
                      한 번 선택하면 같은 브라우저에서는 선택이 기억돼요.
                    </p>
                  </div>

                  <div
                      v-else
                      class="rounded-[24px] border p-5"
                      :class="revealed ? resultBoxClass : 'border-purple-100 bg-purple-50/70'"
                  >
                    <template v-if="!revealed">
                      <p class="mb-2 text-sm text-gray-500">투표 완료 🤍</p>
                      <p class="text-lg font-bold text-gray-800">
                        내 예상은 {{ voteLabel }}
                      </p>
                      <p class="mt-3 text-sm text-gray-600">
                        아래 버튼을 눌러 성별을 확인해 보세요.
                      </p>
                    </template>

                    <template v-else>
                      <p class="mb-2 text-sm" :class="resultTextSubClass">
                        짜잔! 우리 블링이는
                      </p>
                      <p class="text-3xl font-extrabold" :class="resultTextClass">
                        {{ revealLabel }}
                      </p>
                      <p class="mt-3 text-sm text-gray-700">
                        {{ revealMessage }}
                      </p>

                      <p class="mt-4 text-sm font-semibold text-gray-700">
                        내 예상: {{ voteLabel }}
                        <span v-if="isVoteCorrect" class="ml-2 text-emerald-500">정답이에요 🎉</span>
                        <span v-else class="ml-2 text-gray-500">다음엔 맞혀봐요 🤭</span>
                      </p>
                    </template>
                  </div>
                </div>

                <div class="mt-5 flex flex-col items-center gap-3">
                  <button
                      v-if="!revealed"
                      type="button"
                      class="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 active:scale-95"
                      :class="
                      voteSaved
                        ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:scale-105'
                        : 'cursor-not-allowed bg-gray-300'
                    "
                      @click="handleReveal"
                  >
                    <span class="text-xl">{{ revealLoading ? '⏳' : '🎈' }}</span>
                    <span>{{ revealLoading ? '불러오는 중...' : '풍선 열어보기' }}</span>
                  </button>

                  <button
                      v-else
                      type="button"
                      class="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
                      @click="resetReveal"
                  >
                    <span class="text-xl">🎁</span>
                    <span>다시 보기</span>
                  </button>

                  <NuxtLink
                      to="/chart"
                      class="inline-flex items-center justify-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-5 py-3 text-sm font-semibold text-purple-600 shadow-sm transition hover:scale-105"
                  >
                    <span>📊</span>
                    <span>투표 결과 차트 보기</span>
                  </NuxtLink>

                  <p class="text-xs text-gray-400">
                    {{
                      revealed
                          ? '언제든 다시 열어볼 수 있어요'
                          : voteSaved
                              ? '버튼을 누르면 풍선이 터지며 공개돼요'
                              : '먼저 딸/아들 예상 투표를 해주세요'
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div
                v-if="revealed"
                class="rounded-[28px] border border-purple-100 bg-gradient-to-r from-pink-50 via-white to-blue-50 p-5"
            >
              <p class="mb-4 text-center text-sm font-semibold text-gray-500">
                📷 초음파 사진
              </p>

              <div class="overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm">
                <img
                    v-if="photoSrc"
                    :src="photoSrc"
                    alt="기념 사진"
                    class="aspect-[4/5] w-full object-cover"
                />
                <div
                    v-else
                    class="flex aspect-[4/5] items-center justify-center text-sm text-gray-400"
                >
                  public 폴더나 외부 이미지 URL을 photoSrc에 넣어주세요
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-center text-xs text-gray-400">
        reveal page · pastel purple / pink / blue theme
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type GenderType = 'boy' | 'girl'

const VISITOR_TOKEN_KEY = 'bling-visitor-token'
const MY_VOTE_KEY = 'bling-my-vote'

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || '/api'

const revealed = ref(false)
const revealType = ref<GenderType | null>(null)

const selectedVote = ref<GenderType | null>(null)
const voteSaved = ref(false)
const voteLoading = ref(false)
const revealLoading = ref(false)

const stats = ref({
  boy: 0,
  girl: 0,
  total: 0,
  boyRate: 0,
  girlRate: 0,
})

const photoSrc = ref('')

const getVisitorToken = () => {
  const saved = localStorage.getItem(VISITOR_TOKEN_KEY)
  if (saved) return saved

  const newToken = crypto.randomUUID()
  localStorage.setItem(VISITOR_TOKEN_KEY, newToken)
  return newToken
}

const getMyVote = (): GenderType | null => {
  const value = localStorage.getItem(MY_VOTE_KEY)
  return value === 'boy' || value === 'girl' ? value : null
}

const setMyVote = (vote: GenderType) => {
  localStorage.setItem(MY_VOTE_KEY, vote)
}

const fetchStats = async () => {
  try {
    const result = await $fetch<{
      boy: number
      girl: number
      total: number
      boyRate: number
      girlRate: number
    }>(`${apiBase}/vote-stats`)

    stats.value = result
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  const savedVote = getMyVote()

  if (savedVote) {
    selectedVote.value = savedVote
    voteSaved.value = true
  }

  await fetchStats()
})

const submitVote = async (vote: GenderType) => {
  if (voteLoading.value) return

  try {
    voteLoading.value = true

    const result = await $fetch<{
      ok: boolean
      myVote: GenderType
      stats: {
        boy: number
        girl: number
        total: number
        boyRate: number
        girlRate: number
      }
    }>(`${apiBase}/vote`, {
      method: 'POST',
      body: {
        choice: vote,
        visitorToken: getVisitorToken(),
      },
    })

    selectedVote.value = vote
    voteSaved.value = true
    setMyVote(vote)
    stats.value = result.stats
  } catch (error: any) {
    alert(error?.data?.statusMessage || '투표 저장 중 오류가 발생했어요.')
  } finally {
    voteLoading.value = false
  }
}

const handleReveal = async () => {
  if (!voteSaved.value) {
    alert('먼저 투표해 주세요 💌')
    return
  }

  try {
    revealLoading.value = true

    const result = await $fetch<{ gender: GenderType }>(`${apiBase}/reveal`)
    revealType.value = result.gender
    revealed.value = true
  } catch (error: any) {
    alert(error?.data?.statusMessage || '성별을 불러오지 못했어요.')
  } finally {
    revealLoading.value = false
  }
}

const resetReveal = () => {
  revealed.value = false
}

const voteLabel = computed(() => {
  if (selectedVote.value === 'boy') return '아들 💙'
  if (selectedVote.value === 'girl') return '딸 💖'
  return ''
})

const isVoteCorrect = computed(() => {
  return !!(
      revealed.value &&
      selectedVote.value &&
      revealType.value &&
      selectedVote.value === revealType.value
  )
})

const revealLabel = computed(() => {
  if (!revealType.value) return ''
  return revealType.value === 'boy' ? '왕자님이에요 💙' : '공주님이에요 💖'
})

const revealShort = computed(() => {
  if (!revealType.value) return ''
  return revealType.value === 'boy' ? 'It’s a Boy!' : 'It’s a Girl!'
})

const revealEmoji = computed(() => {
  if (!revealType.value) return '🎉'
  return revealType.value === 'boy' ? '🩵' : '🩷'
})

const revealMessage = computed(() => {
  if (!revealType.value) return ''
  return revealType.value === 'boy'
      ? '작고 소중한 우리 아들, 건강하게 만나자.'
      : '사랑스러운 우리 딸, 예쁘게 잘 만나자.'
})

const revealPanelClass = computed(() => {
  if (revealType.value === 'boy') {
    return 'border-blue-100 bg-gradient-to-b from-blue-50 to-sky-100'
  }

  if (revealType.value === 'girl') {
    return 'border-pink-100 bg-gradient-to-b from-pink-50 to-rose-100'
  }

  return 'border-purple-100 bg-gradient-to-b from-white to-purple-50'
})

const resultBoxClass = computed(() => {
  if (revealType.value === 'boy') return 'border-blue-100 bg-blue-50'
  if (revealType.value === 'girl') return 'border-pink-100 bg-pink-50'
  return 'border-purple-100 bg-purple-50/70'
})

const resultTextClass = computed(() => {
  if (revealType.value === 'boy') return 'text-blue-500'
  if (revealType.value === 'girl') return 'text-pink-500'
  return 'text-gray-700'
})

const resultTextSubClass = computed(() => {
  if (revealType.value === 'boy') return 'text-blue-400'
  if (revealType.value === 'girl') return 'text-pink-400'
  return 'text-gray-500'
})

const pillClass = computed(() => {
  if (revealType.value === 'boy') return 'bg-white text-blue-500'
  if (revealType.value === 'girl') return 'bg-white text-pink-500'
  return 'bg-white text-gray-700'
})

const confettiStyle = (n: number) => {
  const left = 10 + ((n * 37) % 80)
  const delay = (n % 6) * 0.12
  const duration = 1.8 + (n % 5) * 0.18
  const rotate = (n * 23) % 360

  const colors =
      revealType.value === 'boy'
          ? ['#93c5fd', '#7dd3fc', '#bfdbfe', '#dbeafe']
          : ['#f9a8d4', '#fbcfe8', '#fda4af', '#e9d5ff']

  return {
    left: `${left}%`,
    top: '-12%',
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    transform: `rotate(${rotate}deg)`,
    background: colors[n % colors.length],
  }
}
</script>

<style scoped>
.font-nanum {
  font-family: 'NanumSquareRound', sans-serif;
}

@keyframes bounceSoft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes popSoft {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  65% {
    transform: scale(1.08);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes revealRise {
  0% {
    transform: translateY(18px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes confettiFall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(420px) rotate(540deg);
    opacity: 0.95;
  }
}

@keyframes ringBurst {
  0% {
    transform: scale(0.35);
    opacity: 0.55;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

@keyframes sparkleTwinkle {
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

.animate-pop-soft {
  animation: popSoft 0.55s ease-out;
}

.animate-reveal-rise {
  animation: revealRise 0.5s ease-out;
}

.balloon-scene {
  position: relative;
  width: 250px;
  height: 260px;
  animation: bounceSoft 2.4s ease-in-out infinite;
}

.balloon {
  position: absolute;
  border-radius: 9999px;
  box-shadow:
      inset -10px -12px 18px rgba(255,255,255,0.26),
      inset 10px 12px 18px rgba(255,255,255,0.08),
      0 18px 30px rgba(170, 120, 220, 0.14);
}

.balloon::after {
  content: '';
  position: absolute;
  top: 18px;
  left: 18px;
  width: 24px;
  height: 34px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.28);
  transform: rotate(22deg);
}

.balloon-main {
  width: 110px;
  height: 132px;
  left: 70px;
  top: 24px;
  background: linear-gradient(180deg, #d8b4fe 0%, #c4b5fd 100%);
  z-index: 4;
}

.balloon-left {
  width: 92px;
  height: 114px;
  left: 24px;
  top: 52px;
  background: linear-gradient(180deg, #f9a8d4 0%, #e9d5ff 100%);
  z-index: 3;
}

.balloon-right {
  width: 92px;
  height: 114px;
  right: 24px;
  top: 52px;
  background: linear-gradient(180deg, #93c5fd 0%, #bfdbfe 100%);
  z-index: 3;
}

.balloon-knot {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 11px solid rgba(255,255,255,0.8);
  z-index: 6;
}

.knot-main {
  left: 118px;
  top: 151px;
}

.knot-left {
  left: 64px;
  top: 160px;
}

.knot-right {
  left: 171px;
  top: 160px;
}

.string {
  position: absolute;
  width: 2px;
  background: linear-gradient(180deg, rgba(180,180,180,0.55), rgba(180,180,180,0.18));
  border-radius: 9999px;
  z-index: 1;
}

.string-main {
  left: 124px;
  top: 161px;
  height: 78px;
  transform: rotate(2deg);
}

.string-left {
  left: 70px;
  top: 170px;
  height: 72px;
  transform: rotate(-7deg);
}

.string-right {
  left: 177px;
  top: 170px;
  height: 72px;
  transform: rotate(7deg);
}

.balloon-shadow {
  position: absolute;
  left: 50%;
  bottom: 6px;
  transform: translateX(-50%);
  width: 150px;
  height: 24px;
  border-radius: 9999px;
  background: rgba(180, 160, 210, 0.16);
  filter: blur(8px);
}

.burst-ring {
  position: absolute;
  width: 160px;
  height: 160px;
  border: 10px solid rgba(255,255,255,0.65);
  border-radius: 9999px;
  animation: ringBurst 0.65s ease-out forwards;
}

.premium-confetti {
  width: 10px;
  height: 18px;
  border-radius: 4px;
  animation-name: confettiFall;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}

.sparkle {
  position: absolute;
  z-index: 9;
  font-size: 18px;
  color: rgba(255,255,255,0.95);
  text-shadow: 0 0 10px rgba(255,255,255,0.65);
  animation: sparkleTwinkle 1.2s ease-in-out infinite;
}

.sparkle-1 {
  top: 86px;
  left: 72px;
}

.sparkle-2 {
  top: 70px;
  right: 78px;
  animation-delay: 0.25s;
}

.sparkle-3 {
  bottom: 96px;
  right: 108px;
  animation-delay: 0.45s;
}

.bubble {
  position: absolute;
  border-radius: 9999px;
  background: rgba(255,255,255,0.35);
  filter: blur(1px);
}

.bubble-1 {
  top: 20px;
  left: 20px;
  width: 54px;
  height: 54px;
}

.bubble-2 {
  top: 30px;
  right: 28px;
  width: 38px;
  height: 38px;
}

.bubble-3 {
  bottom: 18px;
  right: 82px;
  width: 26px;
  height: 26px;
}

.bubble-4 {
  bottom: 22px;
  left: 56px;
  width: 18px;
  height: 18px;
}

.confetti {
  position: absolute;
}
</style>
