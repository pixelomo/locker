<template>
  <div class="container mx-auto px-4 py-8">
    <LockerNavigation
      :selectedLocker="selectedLocker"
      @select-locker="selectLocker"
    />
    <LockerInfo :locker="currentLocker" />
    <LockerImages :selectedLocker="selectedLocker" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'nuxt/app'
import type { LockerMap } from '~/types/locker'

const lockers: LockerMap = {
  M1: {
    name: 'Locker M1',
    description: 'Locker M1 is located near the entrance of JR East station. It is a medium-sized locker perfect for luggage storage.'
  },
  M2: {
    name: 'Locker M2',
    description: 'Locker M2 is located on the third floor near the ticket counter. It is ideal for long-term storage.'
  },
  M3: {
    name: 'Locker M3',
    description: 'Locker M3 is in the underground section. Great for commuters looking for a quick drop-off point.'
  }
}

const route = useRoute()
const router = useRouter()
const selectedLocker = ref<string | null>(null)

const currentLocker = computed(() => {
  if (!selectedLocker.value) return null
  return lockers[selectedLocker.value]
})

function selectLocker(lockerLocation: string) {
  selectedLocker.value = lockerLocation
  router.push({ query: { location: lockerLocation } })
}

onMounted(() => {
  const lockerLocation = route.query.location as string
  if (lockerLocation && lockers[lockerLocation]) {
    selectedLocker.value = lockerLocation
  }
})
</script>