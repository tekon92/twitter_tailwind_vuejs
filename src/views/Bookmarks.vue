<template>
  <div class="w-full">
    <timeline v-for="n in 10" :key="n.id"/>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'

export default {
  name: 'Bookmark',
  components: {
    Timeline
  }
}
</script>
