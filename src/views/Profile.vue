<template>
        <header class="sticky z-[2] bg-tw dark:bg-primary top-0 flex items-center text-left profileHeader border-solid border-b border-white dark:border-outline" >
            <button class="p-2 outline-0 cursor-pointer rounded-full hover:dark:bg-outline hover:bg-white">
                <ArrowLeftIcon class="profileSVG " />
            </button>
            <div id="ProfileInfo" class="flex flex-col">
                <strong >Emilly Monteiro</strong>
                <span>612 Tweets</span>
            </div>
        </header>
        <main id="ProfileContainer" class="flex flex-col max-h-full overflow-y-auto ">
            <div id="Banner">
                <div id="BannerAvatar" class=" text-tw dark:text-primary">

                </div>
            </div>
            <div id="ProfileData">
                <button id="editProfileButton" @click="this.$root.darkMode = !this.$root.darkMode" class="buttonInGeneral outlined border border-solid border-white dark:border-outline dark:hover:bg-outline hover:bg-white">
                    {{this.$root.darkMode ? 'Desativar Modo Noturno' : 'Ativar Modo Noturno'}}
                </button>

                <h1>Emilly Monteiro</h1>
                <h2>@emymonteiro</h2>

                <p>
                    - Desenvolvedora - 
                </p>
                <p>
                    Atualmente trabalhando com <a href="https://fivem.net" target="_blank">FiveM</a> <br/>
                    Atuando no servidor em especifico <a href="https://cidadesouth.com" target="_blank">SouthRP</a>
                </p>

                <p>
                    <a href="https://github.com/emymonteiro/" target="_blank">Github</a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/emilly-monteiro-580254191/" target="_blank">Linkedin</a>
                </p>
                <p></p>

                <ul>
                    <li>
                        <CakeIcon class="h-5 w-5 text-outline dark:text-white mr-1" />
                        Nascida em 25 de Agosto de 1997
                        
                    </li>
                    <li>
                       <LocationMarkerIcon class="h-5 w-5 text-outline dark:text-white mr-1" />
                        Campo Grande - MS, Brasil
                    </li>
                    <li>
                       <InboxIcon class="h-5 w-5 text-outline dark:text-white mr-1" />
                        emymonteiro.sweetie@gmail.com
                    </li>
                    <li>
                       <DeviceMobileIcon class="h-5 w-5 text-outline dark:text-white mr-1" />
                        (67) 9 9108-5487
                    </li>
                </ul>
                <div id="Followage" class="flex">
                    <span>
                        <strong class="text-outline dark:text-white"> 112 </strong> seguindo
                    </span>
                    <span>
                        <strong class="text-outline dark:text-white"> 135 </strong> seguidores
                    </span>
                </div>
            </div>
        </main>
        <Feed/>

    
</template>

<script>
    import { ArrowLeftIcon } from "@heroicons/vue/outline"
    import Feed from '../components/Feed.vue'
    import { LocationMarkerIcon, CakeIcon, InboxIcon, DeviceMobileIcon } from "@heroicons/vue/outline"
    export default{
        components: { ArrowLeftIcon, LocationMarkerIcon, CakeIcon, InboxIcon, DeviceMobileIcon , Feed }
    }
</script>

<style>
    .profileHeader{
        padding: 2px 0 2.5px 3.5px;
    }
    .profileSVG{
        width: 18px;
        height: 18px;
    }
    #ProfileInfo{
        margin-left: 17px;
    }
    #ProfileInfo >strong{
        font-size: 19px;
    }
    #ProfileInfo >span{
        font-size: 12px;
        color: var(--gray);
    }
    #ProfileContainer{
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        
    }
    #ProfileContainer::-webkit-scrollbar {
        display: none;
    }
    #Banner{
        flex-shrink: 0;
        width: 100%;
        height: min(33vw, 199px);

        position: relative;
        background: url('https://media.discordapp.net/attachments/419592647255261184/918603786908475403/Emy_1.png?width=1335&height=445') no-repeat;
        background-size: 100% 100%;
    }
    #BannerAvatar{
        width: max(45px, min(135px, 22vw));
        height: max(45px, min(135px, 22vw));

        border: 3.75px solid ;
        background: url('https://avatars.githubusercontent.com/u/49368251?v=4');
        background-size: 110% 110%;
        background-position: center;
        border-radius: 50%;
        position: absolute;
        bottom: max(-60px, -10vw);
        left: 15px;
    }
    #ProfileData{
        padding: min(calc(10vw + 7px), 67px) 19px 0;
        display: flex;
        flex-direction: column;

        position: relative; 
    }
    #ProfileData >h1{
        font-weight: bold;
        font-size: 19px;
    }
    #ProfileData >h2{
        font-weight: normal;
        font-size: 15px;

        color: var(--gray);
    }
    #ProfileData >p{
        font-size: 15px;
        margin-top: 11px;
    }
    #ProfileData >p >a{
        text-decoration: none;
        color: var(--twitter);
    }
    #ProfileData > ul{
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    #ProfileData > ul >li {
        display: flex;
        align-items: center;
        font-size: 15px;
        color: var(--gray);
    }
    #Followage >span{
        font-size: 15px;
        color: var(--gray);
    }
    #Followage >span:not(:first-child){
       margin-left: 20px;
    }
    #editProfileButton{
        position: absolute;
        top: 2vw;
        right: 7px;

        padding: 8px 16px;
        font-size: 13px;
    }
    @media (min-width: 320px) {
        #editProfileButton{
            top: 10px;
            font-size: 15px;
        }
    }

</style>
