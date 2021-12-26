<template>
    <div id="FeedContainer" class="flex flex-col">
        <div id="FeedTab" class="dark:hover:bg-tdarkhover hover:bg-white">Tweets</div>
        <Tweets />
    </div>
</template>

<script>
    import Tweets from "./Tweets.vue"
    export default{
        components: { Tweets }
    }
</script>

<style>
    #FeedTab{
        margin-top: 10px;
        padding: 11px 0 15px; 
        font-weight: bold;
        font-size: 15px;
        outline: none;
        cursor: pointer;
        color: var(--twitter);
        border-bottom: 2px solid var(--twitter);
        text-align: center;
    }
</style>