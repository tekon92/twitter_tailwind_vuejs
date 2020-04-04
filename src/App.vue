<template>
  <div id="app" class="container flex px-0 lg:px-4 h-screen overflow-scroll">
    <div class="w-2/7 text-center px-4 py-2 sticky top-0 border-r hidden sm:block">
      <sidebar />
    </div>
    <div class="w-full lg:w-4/7 overflow-y-scroll mid-content">
      <Header />
      <Tweet v-if="this.$route.path === '/home'" />
      <router-view />
      <div class="sm:hidden flex justify-between sticky bottom-0 p-1 px-4 border-t bg-white">
        <sidebar-link
          v-for="lb in linkBottom"
          :key="lb.id"
          :route="lb.route"
          :name="lb.name"
          :svg="lb.svg"
        />
      </div>
    </div>
    <div class="hidden lg:block w-3/7 p-2">
    <!-- need to fix searchbar -->
      <search-bar class="sticky top-0" v-if="showSearchBar">
        <div class="absolute search-icon" style="top: .8rem; left: .8rem;">
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
import Tweet from '@/components/Tweet'
import SidebarLink from '@/components/SidebarLink'

export default {
  name: 'App',
  components: {
    Sidebar,
    Trends,
    WhoToFollow,
    SearchBar,
    Header,
    Tweet,
    SidebarLink
  },
  data () {
    return {
      showSearchBar: false,
      showTrends: false,
      showWhoToFollow: false,
      linkBottom: [
        {
          id: 1,
          svg: [
            'M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z'
          ],
          name: 'Dashboard',
          route: '/home'
        },
        {
          id: 2,
          svg: [
            'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'
          ],
          name: 'Search',
          route: '/search'
        },
        {
          id: 3,
          svg: [
            'M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z'
          ],
          name: 'Notifications',
          route: '/notifications'
        },
        {
          id: 4,
          svg: [
            'M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z'
          ],
          name: 'Messages',
          route: '/messages'
        }
      ]
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
.mid-content::-webkit-scrollbar {
  display: none;
}
// .divtext {
//     border: ridge 2px;
//     padding: 5px;
//     width: 20em;
//     min-height: 5em;
//     overflow: auto;
// }
</style>
