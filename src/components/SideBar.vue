<template>
    <div id="SideBarContainer" class="hidden media:flex flex-col">
        <div id="SearchWrapper" class=" p-[10px_24px] sticky max-h-[57px] focus-within:text-twitter top-0 z-[2] bg-tw dark:bg-primary">
            <input placeholder="Search" class="outline-0 focus:text-primary dark:focus:text-white  focus:border focus:border-solid focus:border-twitter w-full ease-in-out delay-180 placeholder:text-gray relative rounded-[19.5px] bg-white dark:bg-search h-[39px] text-[14px] p-[0_10px_0_52px]" >
            <SearchIcon class="h-[27px] w-[27px]   relative top-[-33px] left-[15px] z-[1] ease-in-out delay-180" />
            
        </div>

        <div id="SideBarBody">
            <p v-for="index in 90" :key="index">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    </div>
</template>

<script>
    import { SearchIcon } from '@heroicons/vue/solid'
    export default {
        components: { SearchIcon }
    }
</script>

<style>
    #SideBarContainer, #SearchWrapper{
        width: min(399px, 100%)
    }
</style>