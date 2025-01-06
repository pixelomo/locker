<template>
  <div v-if="locker" class="locker-info max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mb-8">
    <h2 class="text-2xl font-bold mb-4">{{ locker.name }}</h2>
    <p class="text-gray-700">{{ locker.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Locker } from '~/types/locker'

defineProps<{
  locker: Locker | null
}>()
</script>