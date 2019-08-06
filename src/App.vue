<template>
    <div class="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
  export default {
      name:'app'
  }
 
</script>

<style>
   .app{
       width:100%;
       height:100%;
   }
</style>