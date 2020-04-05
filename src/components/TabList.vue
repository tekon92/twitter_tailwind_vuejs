<template>
  <nav class="flex justify-center">
    <button
      class="w-full text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 hover:border-b-2 font-medium hover:border-blue-500"
      v-for="i in list"
      :key="i.id"
    >{{i.name}}</button>
  </nav>
</template>

<script>
export default {
  name: 'TabList',
  props: {
    list: Array
  }
}
</script>

<style>
</style>
