<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            <div id="SuggestionAvatar" :style="'background: url('+url+') no-repeat; background-size:100% 100%;background-position: center;'" class="flex items-center w-[49px] h-[49px] rounded-full bg-gray mr-[10px]"></div>
            <div id="SuggestionInfo" class="flex flex-col">
                <strong class="text-[14px]">{{username}}</strong>
                <span class="text-[14px] text-gray">{{nickname}}</span>
            </div>
        </div>

        <a :href="'https://' + nickname" target="_blank">
        <button class="buttonInGeneral p-[6px_17px] outlined border border-solid border-white dark:border-outline dark:hover:bg-outline hover:bg-white">
            Seguir
        </button>
        </a>
        
    </div>
</template>

<script>
export default {
    props: {
        username: String,
        nickname: String,
        url: String
    },
    data () {
        

        return {}
    }
}
</script>

<style>

</style>