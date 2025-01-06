<template>
  <nav class="locker-links mb-8">
    <ul class="flex justify-center gap-5">
      <li v-for="id in ['M1', 'M2', 'M3']" :key="id">
        <a
          href="#"
          @click.prevent="$emit('select-locker', id)"
          class="text-blue-600 font-bold hover:underline"
          :class="{ 'text-blue-900': selectedLocker === id }"
        >
          Locker {{ id }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  selectedLocker: string | null
}>()

defineEmits<{
  'select-locker': [location: string]
}>()
</script>