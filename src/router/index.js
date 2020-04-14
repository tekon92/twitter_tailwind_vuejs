import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore'
import Notifications from '../views/Notifications'
import Messages from '../views/Messages'
import Bookmarks from '../views/Bookmarks'
import List from '../views/Lists' /* need to add user */
import Profile from '../views/Profile' /* need to add user */
import SingleTweet from '../views/SingleTweet'
import NewTweet from '../views/NewTweet'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      twModalView: true
    }
  },
  {
    path: '/compose/tweet',
    name: 'NewTweet',
    beforeEnter: (to, from, next) => {
      const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

      if (twModalView) {
        if (from.matched.length > 1) {
          const childrenView = from.matched.slice(1, from.matched.length)
          for (const view of childrenView) {
            to.matched.push(view)
          }
        }
        if (to.matched[0].components) {
          to.matched[0].components.default = from.matched[0].components.default
          to.matched[0].components.modal = NewTweet
          // Object.assign(to.params, from.params)
        }
      }
      next()
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      twModalView: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
    meta: {
      twModalView: true
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    meta: {
      twModalView: true
    }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
    meta: {
      twModalView: true
    }
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks,
    meta: {
      twModalView: true
    }
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      twModalView: true
    }
  },
  {
    path: '/:username',
    name: 'Profile',
    component: Profile,
    meta: {
      twModalView: true
    }
  },
  {
    path: '/:username/status/:id',
    name: 'Tweet',
    component: SingleTweet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
