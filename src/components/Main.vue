<template>
    <header class="flex flex-col">
        <button>
            <ArrowLeftIcon class="h-5 w-5 text-twitter" />
        </button>
        <div id="ProfileInfo">
            <strong>Emilly Monteiro</strong>
            <span>612 Tweets</span>
        </div>
    </header>
    <main></main>
</template>
<script>
    import { ArrowLeftIcon } from "@heroicons/vue/solid"
    export default{
        components: { ArrowLeftIcon }
    }
</script>
