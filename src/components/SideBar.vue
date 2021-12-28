<template>
    <div id="SideBarContainer"  class="hidden media:flex flex-col">
        <div id="SearchWrapper" class=" p-[10px_24px] fixed max-h-[57px] focus-within:transition focus-within:ease-in-out focus-within:delay-180 focus-within:text-twitter top-0 z-[2] bg-tw dark:bg-primary">
            <input placeholder="Search" class="outline-0 focus:text-primary dark:focus:text-white  border border-solid border-transparent focus:border-twitter w-full placeholder:text-gray relative rounded-[19.5px] bg-lesswhite dark:bg-search h-[39px] text-[14px] p-[0_10px_0_52px]" >
            <SearchIcon class="h-[27px] w-[27px]   relative top-[-33px] left-[15px] z-[1] ease-in-out delay-180" />
            
        </div>
        
        <div id="SideBarBody" ref="sidebarContent" :class="sidebarStyles">
            <List
            title="Talvez você curta"
            :elements="[
                { component: components.followercomponent , 'name': 'Emilly', 'nick': '@emymonteiro' },
                { component: components.followercomponent , 'name': 'Guilherme', 'nick': '@guiserra' },
                { component: components.followercomponent , 'name': 'Emilly', 'nick': '@emymonteiro' },
            ]"
             />
             
            <List 
                title="O que está acontecendo"
                :elements="[
                    { component: components.newscomponent },
                    { component: components.newscomponent },
                    { component: components.newscomponent },
                    { component: components.newscomponent },
                ]"
             />
             
            <List 
                title="O que está acontecendo"
                :elements="[
                    { component: components.newscomponent },
                    { component: components.newscomponent },
                    { component: components.newscomponent },
                    { component: components.newscomponent },
                ]"
             />
        </div>
    </div>
</template>

<script type='text/javascript'>
    import _ from 'lodash';
    import List from './List.vue'
    import FollowSugestion from './FollowSugestion.vue'
    import News from './News.vue'
    import { SearchIcon } from '@heroicons/vue/outline'
    import { markRaw } from 'vue'
    

    const components = markRaw({ 
        newscomponent: News,
        followercomponent: FollowSugestion
    })

    export default {
        components: { SearchIcon, List, FollowSugestion, News },
        data(){
            return{
                components,
                sidebar: {
                    height: 0,
                    windowHeight: 0,
                    windowScrollTop: 0
                }
            }
        },
        computed:{
            sidebarStyles(){
               /* console.log('height ' + this.sidebar.height)
               console.log('window ' + this.sidebar.windowHeight)
               console.log('scroll ' + this.sidebar.windowScrollTop)
               console.log('scroll + window ' + (this.sidebar.windowScrollTop + this.sidebar.windowHeight)) */
               if(this.sidebar.height <= this.sidebar.windowHeight)
                return { 'fixed-top': true}
               if ((this.sidebar.windowScrollTop + this.sidebar.windowHeight) > this.sidebar.height)
                return { 'fixed-bottom': true}
            }
        },
        created(){
            window.addEventListener('resize', this.handleResize)
            window.addEventListener('scroll', this.handleScroll)
        },
        mounted(){
            this.calculateSidebar()
        },
        methods: {
            handleResize: _.throttle(function(){
                this.calculateSidebar();
            }, 1),
            handleScroll: _.throttle(function(){
                this.sidebar.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            },1),
            calculateSidebar(){
                this.sidebar.height = this.$refs.sidebarContent.offsetHeight || 0;
                this.sidebar.windowHeight = window.innerHeight;
            }
        }
    }
</script>

<style>
    #SideBarBody{
        display: flex;
        flex-direction: column;
        padding: 57px 24px 200px;
        margin-top: 3px;
        /* flex flex-col p-[57px_24px_200px] mt-[3px] */

    }
    .fixed-top{
        position: fixed;
        top: 0;
    }
    .fixed-bottom{
        position: fixed;
        bottom: 0;
    }  
    #SideBarContainer, #SearchWrapper, #SideBarBody{
        width: min(399px, 100%)
    }
    #SideBarBody >div:not(:first-child){
        margin-top: 15px;
    }
</style>