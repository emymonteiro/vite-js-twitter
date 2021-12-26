<template>
  <div class="dark">
    <div class="flex flex-col min-h-screen bg-tw dark:bg-primary text-primary dark:text-white">
      <div id="wrapper" class="h-full max-w-1280px m-0-auto flex justify-center">
          <div class="side-left"></div>
          <div class="center">
            <router-view />
           <!--  <footer>
              <HomeIcon class="h-5 w-5 " />
              <SearchIcon class="h-5 w-5 " />
              <BellIcon class="h-5 w-5 " />
              <InboxIcon class="h-5 w-5 " />
            </footer> -->
          </div>
          <div class="side-left"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeIcon, BellIcon, SearchIcon, InboxIcon } from '@heroicons/vue/outline'
import Main from './components/Main.vue'
export default {
  components: { HomeIcon, BellIcon, SearchIcon, InboxIcon, Main }
}

</script>

<style>
  

</style>
