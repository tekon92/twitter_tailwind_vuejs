<template>
  <list-header title="Who To Follow">
    <div class="p-2 hover:bg-gray-300 border-b-2 rounded-lg flex justify-between" v-for="n in 4" :key="n.id">
      <div class="flex justify-between items-center">
        <img src="https://remoteok.io/assets/jobs/91a57dac87f283c0dc336f10edec876d.png" class="h-12 w-12 rounded-full mx-auto md:mx-0 md:mr-6">
        <div>
          <h1 class="font-bold">CNN Indonesia</h1>
          <h2>@CNNIndonesia</h2>
        </div>
      </div>
      <button class="rounded-full text-blue-500 border border-blue-500 px-3 hover:bg-blue-200">Follow</button>
    </div>
  </list-header>
</template>

<script>
import ListHeader from '@/components/ListHeader'

export default {
  name: 'WhoToFollow',
  components: {
    ListHeader
  }
}
</script>

<style>
</style>
