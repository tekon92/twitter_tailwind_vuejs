<template>
  <router-link
    :to="route"
    class="mb-1 px-2 py-2 rounded-full xl:rounded-lg flex items-center font-medium hover:text-blue-600 hover:bg-gray-200 font-bold text-xl"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0"
      class="w-6 h-6 xl:mr-4"
    >
      <g>
        <path v-for="sv in svg" :d="sv" :key="sv.id" />
      </g>
    </svg>
    <span class="hidden xl:block">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarLink',
  props: {
    route: String,
    svg: Array,
    name: String
  }
}
</script>

<style>
</style>
