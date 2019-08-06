<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name:'BScroll',
        data(){
            return {}
        },
        props:{

        },
        methods:{

        },
        mounted() {
            let scroll=new BScroll(this.$refs.wrapper,{probeType:1});
            scroll.on('scroll',(e)=>{
                this.$emit('scroll',e)
            });
            scroll.on('touchEnd',(e) =>{
                this.$emit('scrollEnd',e)
            })
        }
    }
</script>

<style lang="less" scoped>
    .wrapper{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
    }
</style>