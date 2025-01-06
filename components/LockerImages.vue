<template>
  <div class="max-w-4xl mx-auto">
    <div
      v-for="id in ['M1', 'M2', 'M3']"
      :key="id"
      :class="{ 'hidden': selectedLocker !== id }"
      class="image-wrapper"
    >
      <img
        :src="`https://backend.pudo.jp/files/default/2024-11/group${parseInt(id.slice(1)) + 3}_01.png`"
        :alt="`Locker ${id}`"
        width="750"
        height="415"
        loading="lazy"
        :title="`Locker ${id}`"
        class="w-full h-auto rounded-lg"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selectedLocker: string | null
}>()
</script>