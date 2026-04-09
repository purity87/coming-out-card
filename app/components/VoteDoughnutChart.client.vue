<template>
  <div class="h-[320px]">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps<{
  girl: number
  boy: number
}>()

const chartData = computed(() => ({
  labels: ['딸 예상', '아들 예상'],
  datasets: [
    {
      data: [props.girl, props.boy],
      backgroundColor: ['#f9a8d4', '#93c5fd'],
      borderColor: ['#ffffff', '#ffffff'],
      borderWidth: 4,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}
</script>
