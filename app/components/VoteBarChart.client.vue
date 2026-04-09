<template>
  <div class="h-[320px]">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const props = defineProps<{
  girl: number
  boy: number
}>()

const chartData = computed(() => ({
  labels: ['딸 예상', '아들 예상'],
  datasets: [
    {
      label: '투표 수',
      data: [props.girl, props.boy],
      backgroundColor: ['#f472b6', '#60a5fa'],
      borderRadius: 12,
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
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        precision: 0,
      },
    },
  },
}
</script>
