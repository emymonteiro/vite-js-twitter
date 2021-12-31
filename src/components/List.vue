<template>
    <div id="ListContainer" class="flex flex-col bg-lesswhite dark:bg-secondary rounded-[14px]">
        <div id="ListItems" class="">
            <div class="ListItem ">
                <div id="ListTitle" class=" font-bold text-[19px]">{{title}}</div>
            </div>

            <div v-for="(element,index) in elements" :key="index">
                
                <div class="ListItem border-t border-solid border-white dark:border-outline">
                    <component 
                        :is="element.component" 
                        :username="element.name" 
                        :nickname="element.nick" 
                        :url="element.url" 
                        :data="element.data"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        elements: {
            type: [String, Object],
            default: 'div'
        },
    },
    data () {
        

        return {

        }
    }
}
</script>

<style>
    .ListItem{
        padding: 10px 16px;
    }
    /* #ListItems > div:not(:first-child){
       
       /* border-top : 1px solid; 
    } */
    #ListItems > div:first-child{
       padding-top: 13px;

    }
    
    /* #ListItems > div:last-of-type{
        /* padding-bottom: 13px; 
    } */
</style>