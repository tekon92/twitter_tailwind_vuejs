<template>
  <div class="modal" v-on:click.stop.self="onClose">
    <div class="modal_overlay"></div>
    <div class="modal_conatiner">
      <h1 class="title title--cover">"Modal"</h1>
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
      </div> -->
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
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
