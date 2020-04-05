<template>
  <div class="flex flex-col">
    <div class="p-4 border-b hover:bg-gray-300 flex justify-between">
      <p class="text-sm">Message Request</p>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0"
        class="w-6 h-6"
      >
        <g>
          <path
            d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"
          />
        </g>
      </svg>
    </div>
    <div class="border-b w-full">
      <search-bar class="w-4/5 p-1 mx-auto">
        <div class="absolute search-icon" style="top: 1rem; left: 1rem;">
          <svg
            class="fill-current pointer-events-none text-gray-500 active:text-white w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
      </search-bar>
    </div>
    <div
      class="px-4 py-2 hover:bg-gray-300 border-b-2 rounded-lg flex justify-between items-center text-sm"
      v-for="n in 4"
      :key="n.id"
    >
      <div class="flex justify-between items-center">
        <img
          src="https://remoteok.io/assets/jobs/91a57dac87f283c0dc336f10edec876d.png"
          class="h-12 w-12 rounded-full mx-auto md:mx-0 md:mr-6"
        />
        <div class="flex flex-col w-full">
          <div class="flex justify-between items-center">
            <span class="flex">
              <h1 class="font-bold">Vue.js Developers</h1>
              <h2 class="ml-1 font-xs text-gray-500">@fahrihamzah</h2>
            </span>
          </div>

          <p>Lorem ipsum dolor ...</p>
        </div>
      </div>
      <div class="text-gray-500">Dec 29, 2019</div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Messages',
  components: {
    SearchBar
  }
}
</script>

<style>
</style>
