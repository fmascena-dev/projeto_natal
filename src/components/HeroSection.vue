<script setup lang="ts">
import { ref, onMounted } from "vue"
import TwinklingLights from "./TwinklingLights.vue"
import christmasHero from "../assets/christmas-hero.jpg"

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${christmasHero})` }"
    >
      <div class="absolute inset-0 bg-black/50" />
    </div>

    <!-- Twinkling Lights -->
    <TwinklingLights />

    <!-- Content -->
    <div
      class="relative z-10 text-center px-4 transition-all duration-1000"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <div class="animate-float">
        <span class="text-9xl mb-6 block">🎄</span>
      </div>

      <h1
        class="font-family-christmas text-6xl md:text-7xl lg:text-9xl font-bold mb-6 text-[#FF0000] drop-shadow-[0_0_10px__rgba(255,0,0,0.9)]"
      >
        Feliz <span class="text-[#FF0000]">Natal</span>
      </h1>

      <p
        class="text-xl md:text-2xl text-[#FFFFFF] max-w-2xl mx-auto mb-8 font-family-sans"
      >
        Que a magia do Natal preencha seu coração com amor, paz e alegria
      </p>

      <div class="flex flex-wrap gap-4 justify-center">
        <a
          href="#galeria"
          class="px-8 py-4 bg-red-600 hover:bg-red-800
                 text-white rounded-full font-bold
                 transition-all duration-300 shadow-red-500/50 text-[20px]"
        >
          Explorar Galeria
        </a>

        <a
          href="#cartao"
          class="px-8 py-4 bg-[#FFFF00] hover:bg-[#FFFF00]/80
                 text-black rounded-full font-bold
                 transition-all duration-300 text-[20px]"
        >
          Criar Cartão
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div
        class="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center"
      >
        <div
          class="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"
        />
      </div>
    </div>
  </section>
</template>
