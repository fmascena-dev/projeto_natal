<script setup lang="ts">
const emojis = ['❄️', '🎁', '🦌', '🔔', '🕯️', '🎅', '❄️']
</script>

<template>
  <footer class="py-12 background border-t border-red-500/30 text-secondary">
    <div class="container mx-auto px-4">
      <div class="text-center">
        
        <div class="flex justify-center gap-4 mb-6">
          <span class="text-4xl animate-float">🎄</span>
          <span class="text-4xl animate-float" :style="{ animationDelay: '0.5s' }"> ⭐ </span>
          <span class="text-4xl animate-float" :style="{ animationDelay: '1s' }"> 🎄 </span>
        </div>

        <h2 class="text-6xl text-primary dropshadow-red font-bold mb-4">
          Feliz Natal e Próspero Ano Novo!
        </h2>

        <p class="max-w-md text-xl mx-auto mb-6">
          Que a luz do Natal ilumine seus caminhos e traga muita felicidade para você e sua família.
        </p>

        <div class="flex justify-center gap-2 text-3xl">
          <span
            v-for="(emoji, index) in emojis"
            :key="index"
            class="animate-twinkle"
            :style="{ animationDelay: `${index * 0.3}s` }"
          >
            {{ emoji }}
          </span>
        </div>

        <p class="text-md mt-8">© 2025 • Feito com ❤️ e muito espírito natalino!</p>
        <p class="text-md">Desenvolvido por <a href="https://www.linkedin.com/in/felipe-mascena/">Felipe Mascena</a>. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>
