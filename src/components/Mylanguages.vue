<template>
    <div class="flex">
        <div class="flex items-center w-10 h-10" v-for="(item,index) in data" :key="index">
            <img  :src="item.img" v-bind:class="item.class" :alt="item.name" :title="item.name" />
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    },
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>