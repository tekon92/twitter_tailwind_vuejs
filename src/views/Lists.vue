<template>
  <div class="bg-white">
    <nav class="flex justify-center">
      <button
        class="w-full font-bold text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
      >Owned</button>
      <button class="w-full font-bold text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">Subscribed</button>
      <button class="w-full font-bold text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">Member</button>
    </nav>
    <div class="flex flex-col items-center mt-5">
      <h1 class="font-bold text-lg">
        You haven’t created any Lists yet
      </h1>
      <p class="text-gray-500 mt-2">When you do, it’ll show up here.</p>
      <button class="bg-blue-500 px-4 py-2 mt-2 rounded-full text-white font-bold">Create a List</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Lists'
}
</script>

<style>
</style>
