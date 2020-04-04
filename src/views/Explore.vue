<template>
  <div class="w-full">
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
