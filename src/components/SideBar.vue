<template>
    <div id="SideBarContainer"  ref="sidebarContent" class="hidden media:flex flex-col">
        <div id="SearchWrapper" class=" p-[10px_24px] fixed max-h-[57px] focus-within:transition focus-within:ease-in-out focus-within:delay-180 focus-within:text-twitter top-0 z-[2] bg-tw dark:bg-primary">
            <input placeholder="Search" class="outline-0 focus:text-primary dark:focus:text-white  border border-solid border-transparent focus:border-twitter w-full placeholder:text-gray relative rounded-[19.5px] bg-lesswhite dark:bg-search h-[39px] text-[14px] p-[0_10px_0_52px]" >
            <SearchIcon class="h-[27px] w-[27px]   relative top-[-33px] left-[15px] z-[1] ease-in-out delay-180" />
            
        </div>
        
        <div id="SideBarBody" :class="sidebarStyles">
            <List
            title="O que foi utilizado"
            :elements="[
                { component: components.followercomponent , 'name': 'Vite', 'nick': 'vitejs.dev', url: 'https://vitejs.dev/logo.svg' },
                { component: components.followercomponent , 'name': 'Vue 3', 'nick': 'v3.vuejs.org', url: 'https://v3.vuejs.org/logo.png' },
                { component: components.followercomponent , 'name': 'Tailwind CSS', 'nick': 'tailwindcss.com', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' },
            ]"
             />
             
            <List 
                title="Front-end development"
                :elements="[
                    { 
                        component: components.languages, data: [
                            { name: 'HTML', img: 'https://logospng.org/download/html-5/logo-html-5-2048.png', class: 'w-8 h-8' },
                            { name: 'CSS', img: 'https://logospng.org/download/css-3/logo-css-3-2048.png', class: 'w-8 h-8' },
                            { name: 'Javascript', img: 'https://media.discordapp.net/attachments/419592647255261184/926560466547933194/logo-2048.png?width=564&height=564', class: 'w-8 h-8' },
                        ],
                    },
                    { 
                        component: components.languages, data: [
                            { name: 'Vite', img: 'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png', class: 'w-6' },
                            { name: 'Vue', img: 'https://v3.vuejs.org/logo.png', class: 'w-6' },
                            { name: 'React', img: 'https://logospng.org/download/react/logo-react-256.png', class: 'ml-[-6px] w-8' },
                            { name: 'Tailwind', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png', class: 'ml-[-6px] w-8' },
                            { name: 'SASS/SCSS', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png', class: 'ml-[-6px] w-8' },
                            
                        ],
                    },
                ]"
             />

            <List 
                title="Back-end development"
                :elements="[
                    { 
                        component: components.languages, data: [
                            { name: 'Node',  class: 'w-6' , img: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' },
                            { name: 'TypeScript', img: 'https://cdn.discordapp.com/attachments/681309726797201420/927972035638992956/file_type_typescript_icon_130108.png', class: 'w-8 h-8' },
                            { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png', class: 'w-8 h-8' },
                            { name: 'LUA', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/947px-Lua-Logo.svg.png', class: 'w-8 h-8' },
                            { name: 'C#', img: 'https://static.cdnlogo.com/logos/c/68/c-sharp-350x350.png', class: 'w-8 h-8' },
                        ],
                    },
                ]"
             />

            <List 
                title="Database management"
                :elements="[
                    { 
                        component: components.languages, data: [
                            { name: 'MySQL', img: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png', class: 'w-8 h-8' },
                            { name: 'MariaDB', img: 'https://cdn.worldvectorlogo.com/logos/mariadb.svg', class: '' },
                            { name: 'MongoDB', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/1200px-Antu_mongodb.svg.png', class: 'ml-2 w-8 h-8' },
                        ],
                    },
                    { 
                        component: components.languages, data: [
                            { name: 'TypeORM', img: 'https://user-images.githubusercontent.com/30929568/119166117-e0c9d700-ba7b-11eb-9aac-3916430ad28a.png', class: '' },
                        ],
                    },
                ]"
             />
             
        </div>
    </div>
</template>

<script type='text/javascript'>
    import _ from 'lodash';
    import List from './List.vue'
    import FollowSugestion from './FollowSugestion.vue'
    import Mylanguages from './Mylanguages.vue';
    import News from './News.vue'
    import { SearchIcon } from '@heroicons/vue/outline'
    import { markRaw } from 'vue'
    

    const components = markRaw({ 
        newscomponent: News,
        followercomponent: FollowSugestion,
        languages: Mylanguages
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
               if ((this.sidebar.windowScrollTop + this.sidebar.windowHeight) > this.sidebar.height){
                    return { 'fixed-bottom': true}
               }

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
                this.sidebar.height = this.$refs.sidebarContent.offsetHeight;
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