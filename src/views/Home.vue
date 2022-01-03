<template>
    <div class="flex flex-col border-b border-solid border-white dark:border-outline">
        <div class="justify-between flex w-full sticky bg-tw z-[2] dark:bg-primary top-0 hidden pt-[10px] px-[10px] cel-header items-center">
            <div class="flex">
                <img src="https://avatars.githubusercontent.com/u/49368251?v=4" class="w-[40px] h-[40px] rounded-full bg-gray text-tw dark:text-primary" />
                <span class="font-bold text-[19px] ml-2">Pagina Inicial</span>
            </div>
            <SparklesIcon class="w-5 h-5" />
        </div>
        <div class="hidden flex-col w-full cel:flex">
            <div class="justify-between flex pt-[15px] px-[15px] items-center">
                <span class="font-bold text-[19px]">Pagina Inicial</span>
                <SparklesIcon class="w-5 h-5" />
            </div>
            <main class="flex flex-col max-h-full overflow-y-auto pt-2 border-b border-solid border-white dark:border-outline ">
                <div class="flex p-[10px] items ">
                    <img src="https://avatars.githubusercontent.com/u/49368251?v=4" class="rounded-full w-[60px] h-[60px] text-tw dark:text-primary" />
                    <textarea @input="resize($event)" class="box-border overflow-y-hidden ml-[10px] mt-[10px] border-b border-solid text-[19px] border-white dark:border-outline" v-model="tweetValue" placeholder="O que está acontecendo" rows="1" cols="50" ></textarea>
                </div>
                <div v-if="url" class="flex bg-tw  justify-center flex-col ">
                    <XIcon class="self-end mr-[50px] w-8 h-8 p-1 rounded-full bg-lesswhite cursor-pointer dark:bg-secondary hover:dark:bg-tdarkhover hover:bg-white" @click="resetUrl" />
                    <img :src="url" class="bg-tw" />
                </div>
                <input class="hidden" type="file" ref="file" id="myfile" name="myfile" accept="image/*" @change="onFileChange">
                <div class="ml-[80px] mr-[50px] text-twitter items-center flex pb-3 justify-between">
                    <PhotographIcon class="w-8 h-8 p-1 cursor-pointer hover:bg-white rounded-full" @click="$refs.file.click()" />
                    <button @click="SendTweet" class="bg-twitter text-tw py-2 rounded-full px-3">Tweetar</button>
                </div>
            </main>
        </div>
            <keep-alive v-for="(tweet , index) in UserTweets" :key="index">
                <component :is="Tweet" :tweet="tweet" />
            </keep-alive>
        
        <!-- <Feed /> -->
    </div>
</template>

<script>
    export default{
        data(){
            return {
                url: undefined,
                authorPic: "https://cdn.discordapp.com/attachments/861412803256123394/926585509696913478/tenor.gif",
                authorName: 'Emysbot',
                authorNick: '@ImaRobot',
                tweetValue: '',
                UserTweets: [{
                    author: {
			            profile_img_url: "https://cdn.discordapp.com/attachments/861412803256123394/926585509696913478/tenor.gif",
			            display_name: "Emysbot",
			            username: "@ImaRobot"
		            },
		            date: 'Hoje',
                    isTweet: true,
		            body: 
                    `
                        Aqui você pode experimentar criar novos tweets e, até mesmo adicionar novas imagens, fiz de um jeito divertido, espero que aproveite.
		            `,
		            stats: {
		            	likes: ['user_1'],
		            	retweets: [],
		            	comments: [
		            		{
		            			username: '@user_1',
		            			body: 'Persistence'
		            		},
		            		{
		            			username: '@user_2',
		            			body: 'Consistency'
		            		},
		            	]
		            }
                }]

            }
        },
        methods: {
            onFileChange(e){
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
            },
            resetUrl(){
                this.url = undefined;
                document.getElementById("myfile").value = "";
            },
            SendTweet(){
                let image = undefined

                if (this.url){
                    image = {
                        url: this.url,
                        alt: 'image'
                    }
                }
                
                this.UserTweets.push(
                    {
                        author: {
                            profile_img_url: this.authorPic,
                            display_name: this.authorName,
                            username: this.authorNick
                        },
                        isTweet: true,
                        body: this.tweetValue,
                        image,
                        stats: {
		            	    likes: [],
		            	    retweets: [],
		            	    comments: []
		                }

                    }
                );
                this.resetUrl();
                this.tweetValue = ''
            }
        }
    }
</script>

<script setup>
    import Tweet from '../components/Tweet.vue'
    import { PhotographIcon, SparklesIcon, XIcon } from '@heroicons/vue/outline';
   
    const resize = (e) =>{
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
    }




</script>

<style scoped>
    @media (max-width: 499px) {
        .cel-header{
            display: flex;
        }
    }
</style>