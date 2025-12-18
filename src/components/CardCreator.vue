<script setup lang="ts">
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import { Download, RefreshCw } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

type Background = {
  id: number
  gradient: string
  name: string
}

const backgrounds: Background[] = [
  {
    id: 1,
    gradient: 'linear-gradient(135deg, #1a472a 0%, #2d5a3f 50%, #1a472a 100%)',
    name: 'Verde Floresta',
  },
  {
    id: 2,
    gradient: 'linear-gradient(135deg, #8b0000 0%, #b91c1c 50%, #8b0000 100%)',
    name: 'Vermelho Natalino',
  },
  {
    id: 3,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
    name: 'Noite Estrelada',
  },
  {
    id: 4,
    gradient: 'linear-gradient(135deg, #b8860b 0%, #daa520 50%, #b8860b 100%)',
    name: 'Dourado',
  },
]

const decorations = ['🎄', '🎅', '⭐', '🎁', '❄️', '🦌', '🔔', '🕯️']

const cardRef = ref<HTMLDivElement | null>(null)

const recipientName = ref<string>('Querido(a)')
const senderName = ref<string>('Com carinho')
const message = ref<string>('Que este Natal seja repleto de amor, paz e muita alegria!')
const selectedBg = ref<Background>(backgrounds[0]!)
const selectedDecor = ref<string>('🎄')
const isDownloading = ref<boolean>(false)

const handleDownload = async () => {
  if (!cardRef.value) return

  isDownloading.value = true

  try {
    const canvas = await html2canvas(cardRef.value, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
    })

    const link = document.createElement('a')
    link.download = 'cartao-de-natal.png'
    link.href = canvas.toDataURL('image/png')
    link.click()

    toast.success('Cartão baixado com sucesso! 🎄')
  } catch {
    toast.error('Erro ao baixar o cartão')
  } finally {
    isDownloading.value = false
  }
}

const resetCard = () => {
  recipientName.value = 'Querido(a)'
  senderName.value = 'Com carinho'
  message.value = 'Que este Natal seja repleto de amor, paz e muita alegria!'
  selectedBg.value = backgrounds[0]!
  selectedDecor.value = '🎄'

  toast.success('Cartão resetado!')
}
</script>

<template>
  <section id="cartao" class="py-20 background text-secondary relative overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-primary dropshadow-red text-8xl lg:text-9xl font-bold text-center mb-4">
        Crie Seu Cartão
      </h2>

      <p class="text-center text-2xl max-w-2xl mx-auto mb-12">
        Personalize e baixe um cartão de Natal especial
      </p>

      <div class="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <div class="flex justify-center">
          <div
            ref="cardRef"
            class="w-full max-w-md aspect-3/4 rounded-2xl p-8 flex flex-col items-center justify-between text-center shadow-2xl relative overflow-hidden"
            :style="{ background: selectedBg.gradient }"
          >
            <span class="absolute top-4 left-4 text-4xl opacity-60">❄️</span>
            <span class="absolute top-4 right-4 text-4xl opacity-60">❄️</span>
            <span class="absolute bottom-4 left-4 text-4xl opacity-60">❄️</span>
            <span class="absolute bottom-4 right-4 text-4xl opacity-60">❄️</span>

            <div class="text-7xl animate-float mb-4">
              {{ selectedDecor }}
            </div>

            <h3 class="font-display text-3xl md:text-4xl font-bold mb-2">
              Feliz Natal <span class="text-primary dropshadow-red">!</span>
            </h3>

            <p class="text-xl font-medium">
              {{ recipientName }}
            </p>

            <p class="text-lg my-6 leading-relaxed px-4">
              {{ message }}
            </p>

            <p class="italic">
              {{ senderName }}
            </p>

            <div class="mt-4 px-4 py-2 bg-red-600/70 rounded-full">
              <span class="text-accent font-semibold"> Natal 2025 </span>
            </div>
          </div>
        </div>

        <div class="glass-card background-card p-6 md:p-8 space-y-6">
          <h3 class="text-4xl font-semibold">Personalize seu cartão</h3>

          <div>
            <label class="block text-lg font-bold mb-2">Para quem é o cartão?</label>
            <input
              v-model="recipientName"
              class="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none"
            />
          </div>

          <div>
            <label class="block text-lg font-bold mb-2">Sua mensagem</label>
            <textarea
              v-model="message"
              rows="3"
              class="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent resize-none outline-none"
            />
          </div>

          <div>
            <label class="block text-lg font-bold mb-2">De quem é o cartão?</label>
            <input
              v-model="senderName"
              class="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none"
            />
          </div>

          <div>
            <label class="block text-2xl font-bold mb-3">Cor de fundo</label>
            <div class="flex gap-3 flex-wrap">
              <button
                v-for="bg in backgrounds"
                :key="bg.id"
                class="w-12 h-12 rounded-full transition-all hover:cursor-pointer"
                :class="
                  selectedBg.id === bg.id ? 'ring-2 ring-accent scale-110' : 'hover:scale-105'
                "
                :style="{ background: bg.gradient }"
                @click="selectedBg = bg"
              />
            </div>
          </div>

          <div>
            <label class="block text-2xl font-mbold mb-3">Decoração principal</label>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="decor in decorations"
                :key="decor"
                class="text-4xl p-2 rounded-lg transition-all hover:cursor-pointer"
                :class="
                  selectedDecor === decor
                    ? 'bg-accent/20 ring-2 ring-accent scale-110'
                    : 'hover:bg-muted hover:scale-105'
                "
                @click="selectedDecor = decor"
              >
                {{ decor }}
              </button>
            </div>
          </div>

          <div class="flex gap-4 pt-4">
            <button
              @click="handleDownload"
              :disabled="isDownloading"
              class="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-secondary rounded-xl font-semibold hover:-translate-y-2 hover:cursor-pointer disabled:opacity-50 transition-translate-y-2 ease-in-out duration-300"
            >
              <Download class="w-5 h-5" />
              {{ isDownloading ? 'Baixando...' : 'Baixar Cartão' }}
            </button>

            <button
              @click="resetCard"
              class="px-4 py-4 bg-white text-black rounded-xl hover:-translate-y-2 hover:cursor-pointer transition-translate-y-2 ease-in-out duration-300"
            >
              <RefreshCw class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
