<template>
  <div class="modal fixed top-0 left-0 w-full h-full z-50 p-12" v-on:click.stop.self="onClose">
    <div class="modal_overlay"></div>
    <div class="modal_conatiner max-w-screen-sm m-auto bg-white rounded-lg overflow-hidden">
      <a class="hover:text-blue-300 hover:bg-gray-200 flex items-center rounded-full text-center w-10 m-2 p-2 text-blue-500" v-on:click.stop="onClose">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0"
          class="w-6 h-6"
        >
          <g>
            <path
              d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
            />
          </g>
        </svg>
      </a>
      <Tweet />
      <!-- <div class="tweetModal" v-if="tweet">
        <div class="tweet_avatar" v-if="tweet.userColor" v-bind:style="{backgroundColor: tweet.userColor}" />
        <div class="tweet_content">
          <router-link
            class="tweet_name u-hover"
            v-if="tweet.userId && tweet.userName"
            v-bind:to="{
              name: 'userTweets',
              params: { userId: tweet.userId }
            }"
            v-text="tweet.userName"
            v-on:click.stop />
          <div class="tweet_media" v-if="tweet.media" v-bind:data-color="tweet.media">
            {{ tweet.media }}
          </div>
          <div class="tweet_text" v-if="tweet.text" v-text="tweet.text" />
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Tweet from '@/components/Tweet'

export default {
  name: 'NewTweet',
  data () {
    return {
      tweet: false
    }
  },
  components: {
    Tweet
  },
  methods: {
    onClose () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.modal {
  background-color: rgba(mix(#2c3e50, #000000, 30%), 0.85);
}
.tweetModal {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6vmin 4vmin;
}
</style>
