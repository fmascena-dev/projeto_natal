<script setup lang="ts">
import { TooltipProvider } from "@/components/ui/tooltip"
import Sonner from "./components/ui/sonner/Sonner.vue";
</script>

<template>
  <TooltipProvider>
    <Sonner />
    <RouterView />
  </TooltipProvider>
</template>
