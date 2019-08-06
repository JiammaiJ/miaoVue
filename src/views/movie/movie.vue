<template>
    <div class="container">
        <Header :title="movieTitle" />
        <Tabs />
        <div class="content">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Tabs from '@/components/Tabs.vue'
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        name:'movie',
        components:{
        },
        data () {
            return {
                movieTitle:'movie'
            }
        },
        methods:{
           
        },
        components:{
            Tabs,
            Header,
            Footer
        }
    }

</script>

<style lang="scss" scoped>
    .container{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        .content{
           width:100%;
           height:100%;
        }
    }
</style>