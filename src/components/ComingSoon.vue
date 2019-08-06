<template>
    <div class="comingSoon">
        <div class="box" ref="box">
            <ul>
                <li v-for="(item) in comingMovie" :key="item.id">
                    <div><img :src="item.img | imgFormat"></div>
                    <div>
                        <header>{{item.nm}}</header>
                        <p>{{item.wish}}想看</p>
                        <p>主演:{{item.star}}</p>
                        <p>{{item.rt}}上映</p>
                    </div>
                    <div><el-button type="primary">预售</el-button></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name:'ComingSoon',
        data() {
            return {
                comingMovie:[]
            }
        },
        methods:{
            getComingMovie() {
                this.axios.get('/api/movieComingList',{params:{cityId:1}}).then(result =>{
                    this.comingMovie=result.data.data.comingList;
                    this.$nextTick(() =>{
                        // new BScroll(this.$refs.box,{})
                    })
                })
            }
        },
        mounted() {
            this.getComingMovie();
        },
        filters:{
            imgFormat: (data) =>{
                let str='128.180'
                return data.replace(/w\.h/,str);
            }
        }
    }
</script>

<style lang="less" scoped>
     .comingSoon{
       .box{
           position:absolute;
           left:0;
           top:0;
           width:100%;
           height:100%;
           ul{
            width:100%;
            margin:0;
            padding-top:105px;
            padding-bottom:60px;
            li{
                list-style:none;
                display:flex;
                align-items:center;
                padding:10px;
                border-bottom:1px solid #cccccc;
                div:nth-child(1){
                    width:64px;
                    height:90px;
                    img{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                }
                div:nth-child(2){
                    flex:1;
                    margin-left:10px;
                    header{
                        font-size:20px;
                        font-weight:bold;
                        position:relative;
                        img{
                            position:absolute;
                            right:10px;
                            top:0;
                            width:50px;
                        }
                    }
                    p{
                        color:rgb(102,102,102);
                        width:200px;
                        overflow:hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                div:nth-child(3){
                    .el-button{
                        width:47px;
                        height:27px;
                        margin:0;
                        padding:0;
                    }
                }
            }
        }
       }
        
    }
</style>