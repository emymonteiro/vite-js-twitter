<template>
        <header class="sticky t-0 flex items-center text-left profileHeader border-solid border-b border-white dark:border-outline" >
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
                <button id="editProfileButton" class="buttonInGeneral outlined border border-solid border-white dark:border-outline dark:hover:bg-outline hover:bg-white">
                    Editar Perfil
                </button>

                <h1>Emilly Monteiro</h1>
                <h2>@emymonteiro</h2>

                <p>
                    Developer at <a href="https://cidadesouth.com">SouthRP</a>
                </p>

                <ul>
                    <li>
                        <LocationMarkerIcon class="h-5 w-5 text-gray mr-1" />
                        Campo Grande, MS - Brazil
                    </li>
                    <li>
                        <CakeIcon class="h-5 w-5 text-gray mr-1" />
                        Nascida em 25 de Agosto de 1997
                    </li>
                </ul>
                <div id="Followage" class="flex">
                    <span>
                        seguindo <strong> 94 </strong>
                    </span>
                    <span>
                        <strong>94 </strong> seguidores
                    </span>
                </div>
            </div>
        </main>

    
</template>

<script>
    import { ArrowLeftIcon } from "@heroicons/vue/outline"
    import { LocationMarkerIcon, CakeIcon } from "@heroicons/vue/solid"
    export default{
        components: { ArrowLeftIcon, LocationMarkerIcon, CakeIcon }
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

        background: var(--twitter);
        position: relative;
    }
    #BannerAvatar{
        width: max(45px, min(135px, 22vw));
        height: max(45px, min(135px, 22vw));

        border: 3.75px solid ;
        background: var(--gray);
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
