<template>
        <div class="Tweet max-w-full flex flex-col border-solid border-b border-white dark:border-outline">
            <div class="Retweeted flex items-center text-gray ml-[30px] ">
                <fa icon="coffee" class="retweetIcon mr-[10px]  h-[16px] w-[16px]" />
                Você retweetou
            </div>
            <div class="TweetBody flex mt-1 relative">
                <div class="TweetAvatar absolute top-0 left-0 h-12 w-12 rounded-full flex-shrink-0 bg-gray"></div>
                <div class="TweetBodyContainer flex flex-col w-full mt-[2px] pl-[59px]">
                    <div class="TweetHeader flex items-center text-[15px] whitespace-nowrap">
                        <strong class="mr-[5px] whitespace-nowrap text-ellipsis overflow-hidden">VueJs</strong>
                        <span class="text-gray">@NuxtVue3</span>
                        <div class="mx-[10px] bg-gray h-[2px] w-[2px]"></div>
                        <time class="text-gray whitespace-nowrap text-ellipsis overflow-hidden">26 de dez</time>
                    </div>
                    <p class="TweetDescription text-[14px] mt-[4px]">
                        Planning to Dev
                    </p>
                    <div class="TweetImageContent mt-[12px] w-full bg-outline rounded-[14px] cursor-pointer hover:opacity-[.7]"></div>
                    <div class="TweetIcons flex items-center text-gray text-[14px] w-full mt-[11px] mx-auto justify-between flex-wrap">
                        <div class="TweetStatus flex items-center group">
                            <div class="p-[5px] mr-[5px] rounded-full group-hover:bg-white dark:group-hover:bg-outline   group-hover:text-twitter">
                                <ChatIcon class="iconTweet h-5 w-5 group-hover:text-twitter " icon="heart" />
                            </div>
                            <p class="group-hover:text-twitter">900</p>
                        </div>
                        <div class="TweetStatus flex items-center group">
                            <div class="p-[5px] mr-[5px] rounded-full group-hover:bg-white dark:group-hover:bg-outline  group-hover:text-like">
                                <HeartIcon class="iconTweet h-5 w-5 group-hover:text-like " icon="heart" />
                            </div>
                            <p class="group-hover:text-like">900</p>
                        </div>
                        <div class="TweetStatus flex items-center group">
                            <div class="p-[5px] mr-[5px] rounded-full group-hover:bg-white dark:group-hover:bg-outline  group-hover:text-retweet">
                                <fa class="" icon="retweet" />
                            </div>
                            <p class="group-hover:text-retweet">900</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import { HeartIcon, ChatIcon } from "@heroicons/vue/outline";
    export default {
        components: { HeartIcon, ChatIcon }
    }
</script>

<style>
    .Tweet{
        padding: 14px 16px;
    }
    .Retweeted{
        font-size: 13px;
    }
    .TweetImageContent{
        height: min(285px, max(175px, 41vw));
    }
    @media (min-width: 350px){
        .TweetIcons{
            width: 63%;
        }
    }
    .TweetIcons > div{
        cursor: pointer;
    }
    .iconTweet{
        
    }
</style>