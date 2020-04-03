<template>
  <div class="flex justify-between bg-white border">
    <h1
      class="font-bold text-lg p-2"
      v-if="this.$route.name !== 'Explore'"
    >{{ this.$route.name }}</h1>
    <search-bar
    class="p-2"
    v-else />
    <a
      href="#"
      class="hover:text-blue-600 hover:bg-gray-200 flex items-center rounded-full text-center p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="opacity-50"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="0" y="0" width="24" height="24" stroke="none" />
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    </a>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Header',
  components: {
    SearchBar
  }
}
</script>

<style>
</style>
