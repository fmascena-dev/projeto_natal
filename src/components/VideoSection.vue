<template>
  <section class="py-20 background relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-10 left-10 text-6xl opacity-60 animate-float">
      🎅
    </div>
    <div
      class="absolute bottom-10 right-10 text-6xl opacity-60 animate-float"
      style="animation-delay: 1s"
    >
      🦌
    </div>

    <div class="container mx-auto px-4">
      <h2 class=" text-primary text-8xl lg:text-9xl font-bold text-center mb-4 dropshadow-red">
        A Magia do Natal
      </h2>

      <p
        class="text-secondary text-center text-2xl max-w-2xl mx-auto mt-10 mb-12"
      >
        Assista e sinta o espírito natalino
      </p>

      <!-- Video -->
      <div class="max-w-4xl mx-auto">
        <div
          class="relative aspect-video rounded-2xl overflow-hidden glass-card"
        >
          <!-- Capa -->
          <div
            v-if="!isPlaying"
            class="absolute inset-0 flex items-center justify-center background-card-secondary
                   bg-gradient-to-br from-bg-gradient-red
                   to-bg-gradient-gold"
          >
            <button
              @click="isPlaying = true"
              class="w-20 h-20 md:w-24 md:h-24 rounded-full
                     bg-gradient-gold flex items-center justify-center
                     transition-all duration-300 hover:scale-110 glow-gold"
            >
              <Play
                class="w-8 h-8 md:w-10 md:h-10
                       text-accent-foreground ml-1"
              />
            </button>
          </div>

          <!-- Iframe -->
          <iframe
            v-else
            class="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/E8gmARGvPlI?autoplay=1"
            title="Christmas Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <!-- Christmas facts -->
      <div class="flex items-center justify-center flex-wrap gap-6 mt-16 mb-16">
        <div
          v-for="(item, index) in facts"
          :key="index"
          class="glass-card p-6 w-md text-center background-card
                 hover:scale-105 transition-transform duration-300"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <span class="text-5xl mb-4 block">{{ item.icon }}</span>

          <h3
            class="font-display text-2xl lg:text-3xl font-semibold mb-2
                   text-secondary"
          >
            {{ item.title }}
          </h3>

          <p class="text-secondary">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Play } from "lucide-vue-next"

interface Fact {
  icon: string
  title: string
  desc: string
}

const isPlaying = ref(false)

const facts: Fact[] = [
  {
    icon: "🎄",
    title: "Tradição",
    desc: "A árvore de Natal simboliza vida eterna",
  },
  {
    icon: "🎁",
    title: "Presentes",
    desc: "Representam os presentes dos Reis Magos",
  },
  {
    icon: "⭐",
    title: "Estrela",
    desc: "Guiou os sábios até o menino Jesus",
  },
]
</script>
