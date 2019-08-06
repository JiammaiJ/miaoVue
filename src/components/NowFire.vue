<template>
    <div class="nowFire">
        <BScroll @scroll="scroll" @scrollEnd="scrollEnd">
            <ul>
                <li v-if="scrollDownMessage.length>0">{{scrollDownMessage}}</li>
                <li v-for="item in movieList" :key="item.id">
                    <div @click="goDetail">
                        <img :src="item.img | imgFormat('128.180')">
                    </div>
                    <div>
                        <header>{{item.nm}}<img src="@/assets/images/3d.png"></header>
                        <p>观众评<b>{{item.sc}}</b></p>
                        <p>主演:{{item.star}}</p>
                        <p>{{item.showInfo}}</p>
                    </div>
                    <div>
                        <el-button type="primary">购票</el-button>
                    </div>
                </li>
            </ul>
        </BScroll>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name:'NowFire',
        data() {
            return{
                movieList:[],
                scrollDownMessage:''
            }
        },
        methods:{
            getNowFire() {
                let that=this;
                this.axios.get('/api/movieOnInfoList?cityId=10').then(result =>{
                     this.movieList=result.data.data.movieList;
                    //  this.$nextTick(() =>{
                    //      new BScroll(that.$refs.wrapper,{

                    //      })
                    //      console.log(1);
                    //  })
                })
            },
            goDetail() {
                this.$router.push('/movie/detail')
            },
            scroll(e) {
                if(e.y>=50){
                    this.scrollDownMessage='NowFire';
                }
            },
            scrollEnd(e){
               if(e.y>=50){
                   this.axios.get('/api/movieOnInfoList?cityId=11').then(result =>{
                       this.scrollDownMessage='success';
                       setTimeout(()=>{
                           this.movieList=result.data.data.movieList;
                           this.scrollDownMessage='';
                       },2000)
                   })
               }
            }
        },
        mounted() {
            this.getNowFire();
        },
        filters:{
            imgFormat:(data,str) =>{
                return data.replace(/w\.h/, str);
            }
        }
    }
</script>


<style lang="less" scoped>
    .nowFire{
             ul{
            width:100%;
            margin:0;
            padding-bottom:60px;
            padding-top:105px;
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
                        b{
                            color:orange;
                        }
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
</style>