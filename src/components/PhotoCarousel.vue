<template>
  <section id="galeria" class="py-20 overflow-hidden background">
    <div class="container mx-auto px-4 mb-12">
      <h2 class="font-display text-primary text-8xl lg:text-9xl font-bold text-center mb-6 dropshadow-red">
        Galeria de Momentos
      </h2>
      <p class="text-secondary text-center text-2xl max-w-2xl mx-auto font-bold">
        Momentos especiais que tornam o Natal mágico
      </p>
    </div>

    <div class="relative">
      <div
        class="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-[#310101] to-transparent z-10 pointer-events-none"
      />

      <div
        class="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-[#310101] to-transparent z-10 pointer-events-none"
      />

      <div
        ref="containerRef"
        class="flex gap-6 py-4"
        :style="{ transform: `translateX(-${scrollPosition}px)` }"
      >
        <div
          v-for="(photo, index) in duplicatedPhotos"
          :key="index"
          class="shrink-0 w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden group"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import christmasOrnaments from '@/assets/christmas-ornaments.jpg'
import christmasCookies from '@/assets/christmas-cookies.jpg'
import christmasGifts from '@/assets/christmas-gifts.jpg'
import christmasVillage from '@/assets/christmas-village.jpg'
import christmasWreath from '@/assets/christmas-wreath.jpg'

interface Photo {
  src: string
  alt: string
}

const photos: Photo[] = [
  { src: christmasOrnaments, alt: 'Enfeites de Natal' },
  { src: christmasCookies, alt: 'Biscoitos de Natal' },
  { src: christmasGifts, alt: 'Presentes de Natal' },
  { src: christmasVillage, alt: 'Vila Natalina' },
  { src: christmasWreath, alt: 'Guirlanda de Natal' },
  { src: christmasOrnaments, alt: 'Enfeites de Natal 2' },
]

const duplicatedPhotos = computed(() => [...photos, ...photos])
const scrollPosition = ref(0)
const containerRef = ref<HTMLDivElement | null>(null)
let animationId: number | null = null

const animate = () => {
  scrollPosition.value += 0.5

  if (containerRef.value) {
    const maxScroll = containerRef.value.scrollWidth / 2
    if (scrollPosition.value >= maxScroll) {
      scrollPosition.value = 0
    }
  }

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>
