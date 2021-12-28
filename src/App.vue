<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="flex flex-col min-h-screen bg-tw dark:bg-primary text-primary dark:text-white">
      <div id="wrapper" class="h-full max-w-1280px m-0-auto flex justify-center ">
        <MenuBar />
        <div id="wrapperChild" class="flex flex-col w-full bg-tw dark:bg-primary  border-r border-l border-white dark:border-outline cel:border-solid z-[2]  ">
          <router-view />
          <footer id="footerFather" class=" w-full flex justify-between fixed bottom-0 left-0 z-[2] bg-tw dark:bg-primary">
            <HomeIcon class="footerButtons" />
            <SearchIcon class="footerButtons" />
            <BellIcon class="footerButtons" />
            <InboxIcon class="footerButtons" />
          </footer>
        </div>  
        <SideBar />

      </div>
    </div>
  </div>
</template>

<script>
import { HomeIcon, BellIcon, SearchIcon, InboxIcon } from '@heroicons/vue/outline'
import Main from './components/Profile.vue'
import MenuBar from './components/MenuBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: { HomeIcon, BellIcon, SearchIcon, InboxIcon, Main, MenuBar, SideBar },
  data(){
    return {
      darkMode: true
    }
  }
}

</script>

<style>
    #wrapperChild{
        width: min(601px, 100%);
    }
    @media (min-width: 500px){

        #footerFather{
          display: none;
        }
    }
    #footerFather{
      border-top: 1px solid var(--outline);
      padding: 8px min(46px, max(10vw, 10px));
    }
    .footerButtons{
      widows: 31px;
      height: 31px;
      cursor: pointer;
      color: var(--gray);
    }
    .footerButtons:hover{
      color: var(--twitter);
    }
    .buttonInGeneral{
      padding: 16px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 15px;
      outline: 0;
      cursor: pointer;
    }

    :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --lesswhite: #d4d4d4;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }

</style> 
