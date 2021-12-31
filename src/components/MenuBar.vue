<template>
    <div id="MenuBarContainer">
        <header id="ManuBarTopSide" class="flex flex-col items-center">
            <fa icon="coffee" class="text-[25px] mb-[20px] xl:ml-[15px]  text-twitter" />
            
            <button 
                v-for="(route, index) in routes" :key="index"
                class="MenuButton hover:bg-white dark:hover:bg-tdarkhover"
                :class="{ active: this.$route.path === route.path }"
                @click="this.$router.push(route.path); "
            >
                <component :is="route.icon" class="MenuIcons" />
                <span>{{route.name}}</span>
            </button>
           
            <button class="buttonInGeneral bg-twitter text-tw  hover:bg-tlighthover">
                <span class="hidden">Tweetar</span>
                <span>
                <fa icon="coffee" class="text-[18px]" />
                </span>
            </button>
        </header>
        <footer id="MenuBarFooter" class="mt-5 flex items-center">
            <div id="MenuBarAvatar" class="w-[39px] h-[39px] flex-shrink-0 rounded-full bg-gray"></div>
            <div id="MenuBarProfileData" class="hidden xl:flex flex-col ml-[10px] text-[14px]">
                <strong>Emilly Monteiro</strong>
                <span class="font-normal text-gray">@emymonteiro</span>
            </div>
            <LogoutIcon class="hidden cursor-pointer hover:text-like xl:inline-block w-6 h-6  ml-[30px]" />
        </footer>
    </div>
</template>
<script>
    import { ref, onBeforeMount } from 'vue'
    import { useRouter } from 'vue-router'
    import { HomeIcon, BellIcon, HeartIcon, InboxIcon, UserIcon, LogoutIcon } from "@heroicons/vue/outline"
    export default{
        components: {
            HomeIcon,BellIcon, HeartIcon, InboxIcon,UserIcon,LogoutIcon
        },
        setup()
        {
            const routes = ref([]);
            const router = useRouter();

            onBeforeMount(() => {
              routes.value = router.options.routes.filter(r => r.menuBar)
            });
            return {
              routes
            }
        },
    }

</script>
<style>
    .active{
        font-weight: bold;
        color: var(--twitter);
    }
    #MenuBarContainer{
        display: none;

    }
    
    .MenuButton{
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 8.25px 0;
        outline: none;
        border-radius: 25px;
    }
    #ManuBarTopSide >button:not(:first-of-type){
        margin-top: 16.5px;

    }
    #ManuBarTopSide >button:last-child{
        margin-top: 33px;
        width: 40px;
        height: 40px;
    }
    .MenuButton >span{
        display: none;
    }
    .MenuIcons{
        flex-shrink: 0;
        width: 30px;
        height: 30px;
    }
    @media (min-width:500px){
        #MenuBarContainer{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: sticky;
            top: 0;
            left: 0;
            padding: 9px 19px 20px;
            max-height: 100vh;
            overflow-y: scroll;
            /* overflow: hidden; */
             -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        #MenuBarContainer::-webkit-scrollbar {
            display: none;
        }
    }
    @media (min-width: 1280px){
        /* .active{
            background: red;
        } */
        #ManuBarTopSide{

            align-items: flex-start;
        }
        .MenuButton >span{
            display: inline;
            margin-left: 19px;
            /* font-weight: bold; */
            font-size: 19px;
        }
        #ManuBarTopSide >button{
            padding-right: 15px;
            padding-left: 15px;
        }
        #ManuBarTopSide >button:last-child{
            width: 100%;
            height: unset;
        }
        #ManuBarTopSide >button:last-child >span{
            display: inline;
        }
            #ManuBarTopSide >button:last-child  >span:last-child{
            display: none;
        }
    }
    @media (max-width: 1280px){
        #ManuBarTopSide >button:last-child {
            padding: 0px;
        }
    }
</style>