<template>
  <div class="bg-white">
    <nav class="flex justify-center">
      <button
        class="w-full text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
      >All</button>
      <button class="w-full text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">Mantions</button>
    </nav>
    <timeline v-for="n in 10" :key="n.id"/>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'

export default {
  name: 'Notifications',
  components: {
    Timeline
  }
}
</script>

<style>
</style>
