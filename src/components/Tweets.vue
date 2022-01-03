<template>
    <div id="TweetsContainer" class="flex flex-col flex-shrink-0">
        <Tweet v-for="(tweet, index) in tweets" :key="index" :tweet="tweet" />
    </div>
</template>

<script>

    import { ref } from 'vue'
    import Tweets from '../tweets.js'
    import Tweet from './Tweet.vue'
    export default {
        components: { Tweet },
        setup(){
            const tweets = ref(Tweets);
            return {
                tweets
            }
        }
    }
</script>

<style>

</style>