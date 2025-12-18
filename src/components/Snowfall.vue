<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-50">
    <div
      v-for="flake in snowflakes"
      :key="flake.id"
      class="absolute rounded-full bg-[#FFF] animate-snow"
      :style="{
        left: `${flake.left}%`,
        width: `${flake.size}px`,
        height: `${flake.size}px`,
        opacity: flake.opacity,
        animationDuration: `${flake.duration}s`,
        animationDelay: `${flake.delay}s`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Snowflake {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

const snowflakes = ref<Snowflake[]>([])

onMounted(() => {
  snowflakes.value = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.6 + 0.4,
  }))
})
</script>
