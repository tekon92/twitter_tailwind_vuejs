<template>
  <div class="bg-gray-200 mt-2 mb-2 rounded-lg">
    <div class="flex justify-between p-2 items-center border-b-2">
      <h1 class="font-bold text-lg">{{ title }}</h1>
      <a
        href="#"
        class="hover:text-blue-300 hover:bg-gray-200 flex items-center rounded-full text-center p-2 text-blue-500"
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
    <slot></slot>
    <div class="p-2 hover:bg-gray-300">
      <p class="text-blue-600">Show More</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListHeader',
  props: {
    title: String
  }
}
</script>

<style>
</style>
