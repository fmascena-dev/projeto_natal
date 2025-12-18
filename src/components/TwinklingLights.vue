<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <div
      v-for="light in lights"
      :key="light.id"
      class="absolute w-2 h-2 rounded-full animate-twinkle"
      :style="{
        left: `${light.left}%`,
        top: `${light.top}%`,
        backgroundColor: light.color,
        animationDelay: `${light.delay}s`,
        boxShadow: `0 0 10px ${light.color}, 0 0 20px ${light.color}`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Light {
  id: number
  left: number
  top: number
  color: string
  delay: number
}

const lights = ref<Light[]>([])

const colors = [
  'hsl(var(--christmas-red))',
  'hsl(var(--christmas-gold))',
  'hsl(var(--christmas-green))',
  'hsl(var(--christmas-red-light))',
  'hsl(var(--christmas-gold-light))',
]

onMounted(() => {
  lights.value = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)]!,
    delay: Math.random() * 2,
  }))
})
</script>
