<template>
    <div class="mine">
        <Header :title="mineTitle"/>
         
        <Footer />
     </div>   
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        name:'mine',
        data() {
            return{
                mineTitle:'mine'
            }
        },
        components:{
            Header,
            Footer
        },
        mounted() {
            this.axios.post('/login',{username:'admin',password:'admin123'}).then((res) =>{
                console.log(res);
            })
			console.log(this.$route.params.name);
			console.log(this.$route.params.age);
        }
    }

</script>

<style lang="scss" scoped>
    .mine{
        width:100%;
    }
</style>