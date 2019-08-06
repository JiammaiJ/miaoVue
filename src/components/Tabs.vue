<template>
    <div class="tabs">
        <div>
            <router-link to="/movie/cityList" tag="div">city<span class="fa fa-caret-down"></span></router-link>
            <div><router-link to="/movie/nowFire" tag="span">nowFire</router-link><router-link to="/movie/comingSoon" tag="span">comingSoon</router-link></div>
            <router-link to="/movie/search" tag="div"><span class="fa fa-search"></span></router-link>
        </div>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css'

    export default {
        name:'tabs'
    }
</script>

<style lang="less" scoped>  
       .router-link-active{
           border-bottom:2px solid red;
       }
       .tabs{
           width:100%;
           border-bottom:1px solid #cccccc;
           position:fixed;
           top:60px;
           left:0;
           z-index:555;
           background-color:white;
           >div{
               display:flex;
               justify-content:space-between;
               >div{
                   font-size:17px;
                   line-height:45px;
               }
               >div:nth-child(1){
                       margin-left:20px;
                }
                >div:nth-child(3){
                       margin-right:20px;
                }
                >div:nth-child(2){
                    span{
                        display:inline-block;
                        padding:0 10px;
                        line-height:45px;
                    }
                }
           }
       }
</style>