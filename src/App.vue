<template>
  <div id="app" class="container flex p-4 h-screen overflow-scroll">
    <div class="w-2/7 text-center px-4 py-2 sticky top-0">
      <sidebar />
    </div>
    <div class="w-4/7">
     <Header />
      <router-view />
    </div>
    <div class="w-3/7 p-2">
      <search-bar v-if="showSearchBar" />
      <trends v-if="showTrends" />
      <who-to-follow v-if="showWhoToFollow" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import SearchBar from '@/components/SearchBar'
import Trends from '@/components/Trends'
import WhoToFollow from '@/components/WhoToFollow'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Sidebar,
    Trends,
    WhoToFollow,
    SearchBar,
    Header
  },
  data () {
    return {
      showSearchBar: false,
      showTrends: false,
      showWhoToFollow: false
    }
  },
  methods: {
    checkCurrentRoute () {
      if (this.$route.path === '/home') {
        this.allShowTrue()
      } else if (this.$route.path === '/explore') {
        this.showSearchBar = false
        this.showTrends = false
        this.showWhoToFollow = true
      } else if (this.$route.path === '/notifications') {
        this.allShowTrue()
      } else if (this.$route.path === '/messages') {
        this.allShowFalse()
      } else if (this.$route.path === '/bookmarks') {
        this.allShowTrue()
      } else if (this.$route.path === '/list') {
        this.allShowTrue()
      } else if (this.$route.path === '/profile') {
        this.allShowTrue()
      } else {
        this.allShowFalse()
      }
    },
    allShowTrue () {
      this.showSearchBar = true
      this.showTrends = true
      this.showWhoToFollow = true
    },
    allShowFalse () {
      this.showSearchBar = false
      this.showTrends = false
      this.showWhoToFollow = false
    }
  },
  created () {
    this.checkCurrentRoute()
  },
  watch: {
    $route (to, from) {
      this.checkCurrentRoute()
    }
  }
}
</script>
<style lang="scss">
</style>
