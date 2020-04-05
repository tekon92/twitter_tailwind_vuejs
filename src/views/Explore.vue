<template>
  <div class="w-full">
    <div
      class="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
      style="background-image: url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
    >
      <div class="w-full">
        <!-- <p class="font-bold text-sm uppercase">Services</p> -->
        <p class="text-sm">Coronavirus live</p>
        <p class="text-lg font-bold mb-10 leading-none">Update on the Covid-19 situation in Indonesia</p>
        <!-- <a
          href="#"
          class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
        >Contact us</a> -->
      </div>
    </div>
    <trends />
    <list-header title="Juventus FC">
      <timeline />
      <!-- need to add slot on list-header to accomodate another content-->
    </list-header>
  </div>
</template>

<script>
import Trends from '@/components/Trends'
import Timeline from '@/components/Timeline'
import ListHeader from '@/components/ListHeader'

export default {
  name: 'Explore',
  components: {
    Trends,
    Timeline,
    ListHeader
  }
}
</script>

<style>
</style>
