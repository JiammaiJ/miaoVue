<template>
    <header>{{title}}</header>
</template>


<script>
    export default {
        name:'Header',
        props:{
            title:{
                type:String,
                default:'喵'
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:60px;
        background-color:orange;
        font-size:20px;
        color:white;
        text-align:center;
        line-height:60px;
        z-index:555;
    }
</style>