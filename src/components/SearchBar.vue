<template>
  <div class="relative">
    <input
      type="search"
      placeholder="Search"
      class="rounded-full w-full bg-gray-300 text-sm text-black transition border border-transparent focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal placeholder-gray-500 h-10"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
input:focus {
  color: black;
}
</style>
