<template>
        <div class="Tweet max-w-full flex flex-col border-solid border-b border-white dark:border-outline">
            <div v-if="!tweet.isTweet" class="Retweeted flex items-center text-gray ml-[30px] ">
                <fa icon="retweet" class="retweetIcon mr-[10px]  h-[16px] w-[16px]" />
                Você retweetou
            </div>
            <div class="TweetBody flex mt-1 relative">
                <img :src="tweet.author.profile_img_url" class="TweetAvatar absolute top-0 left-0 h-12 w-12 rounded-full flex-shrink-0 bg-gray" />
                <div class="TweetBodyContainer flex flex-col w-full mt-[2px] pl-[59px]">
                    <div class="TweetHeader flex items-center text-[15px] whitespace-nowrap">
                        <strong class="mr-[5px] whitespace-nowrap text-ellipsis overflow-hidden">{{tweet.author.display_name}}</strong>
                        <span class="text-gray">{{tweet.author.username}}</span>
                        <div class="mx-[10px] bg-gray h-[2px] w-[2px]"></div>
                        <time class="text-gray whitespace-nowrap text-ellipsis overflow-hidden">{{tweet.date}}</time>
                    </div>
                    <p class="TweetDescription text-[14px] mt-[4px]" v-html="tweet.body"></p>
                    <figure v-if="tweet.image" class="TweetImageContent mt-[12px] w-full overflow-hidden rounded-[14px] cursor-pointer hover:opacity-[.7]">
                        <img :src="tweet.image.url" :alt="tweet.image.alt" class="w-full object-cover h-full" />
                    </figure>
                    <div class="TweetIcons flex items-center text-gray text-[14px] w-full mt-[11px] mx-auto justify-between flex-wrap">
                        <div class="TweetStatus flex items-center group">
                            <div class="p-[5px] mr-[5px] group-hover:bg-opacity-[.1] dark:group-hover:bg-opacity-100 dark:group-hover:drop-shadow-none group-hover:drop-shadow-tcomment rounded-full group-hover:bg-white dark:group-hover:bg-tdarkhover   group-hover:text-twitter">
                                <ChatIcon class="iconTweet h-5 w-5 group-hover:text-twitter " icon="heart" />
                            </div>
                            <p class="group-hover:text-twitter">{{tweet.stats.comments.length}}</p>
                        </div>
                        <div class="TweetStatus flex items-center  group ">
                            <div class="p-[5px] mr-[5px] group-hover:bg-opacity-[.1] dark:group-hover:bg-opacity-100 dark:group-hover:drop-shadow-none group-hover:drop-shadow-tlike rounded-full group-hover:bg-white dark:group-hover:bg-tdarkhover  group-hover:text-like">
                                <HeartIcon class="iconTweet  h-5 w-5 group-hover:text-like " icon="heart" />
                            </div>
                            <p class="group-hover:text-like">{{tweet.stats.likes.length}}</p>
                        </div>
                        <div class="TweetStatus flex items-center group">
                            <div class="p-[5px] mr-[5px] group-hover:bg-opacity-[.1] dark:group-hover:bg-opacity-100 dark:group-hover:drop-shadow-none group-hover:drop-shadow-tshare rounded-full group-hover:bg-white dark:group-hover:bg-tdarkhover  group-hover:text-retweet">
                                <fa class="" icon="retweet" />
                            </div>
                            <p class="group-hover:text-retweet">{{tweet.stats.retweets.length}}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import { HeartIcon, ChatIcon } from "@heroicons/vue/outline";
    export default {
        components: { HeartIcon, ChatIcon },
        props: ['tweet']
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
</style>