<template>
  <div class="w-full">
    <trends />
    <timeline />
  </div>
</template>

<script>
import Trends from '@/components/Trends'
import Timeline from '@/components/Timeline'

export default {
  name: 'Explore',
  components: {
    Trends,
    Timeline
  }
}
</script>

<style>
</style>
