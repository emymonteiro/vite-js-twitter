<template>
    <div id="TweetsContainer" class="flex flex-col flex-shrink-0">
        <tweet />
        <tweet />
        <tweet />
        <tweet />
        <tweet />
    </div>
</template>

<script>
    import Tweet from './Tweet.vue'
    export default {
        components: { Tweet }
    }
</script>

<style>

</style>