<template>
    <div class="cinema">
        <Header :title="cinemaTitle"/>
        <div class="cinemaContent">
            <div>
                <div>全城<span class="fa fa-angle-down"></span></div>
                <div>品牌<span class="fa fa-angle-down"></span></div>
                <div>特色<span class="fa fa-angle-down"></span></div>
            </div>
            <div class="cinemaInfo" v-for="(item,i) in cinemaList" :key="i">
                <header>{{item.nm}}<span>{{item.sellPrice}}元起</span></header>
                <div><span>{{item.addr}}</span><span>{{item.distance}}</span></div>
                <el-tag v-for="(val,key,idx) in item.tag" v-if="val==1" :key="idx" :type="key | typeFormat" effect="dark">{{key | keyFormat}}</el-tag>
                <!-- 这里是警告。不是报错。vue标准建议v-for 和 v-if 不要一起使用 循环放在外层就可以了 -->
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import BScroll from 'better-scroll'
    export default {
        name:'cineam',
        data() {
            return{
                cinemaTitle:'cinema',
                cinemaList:[]
            }
        },
        methods:{
            getCinema() {
                this.axios.get('/api/cinemaList',{params:{cityId:59}}).then(result =>{
                    if(result.data.msg==='ok' && result.data.status===0) {
                        this.cinemaList=result.data.data.cinemas;
                        console.log(result.data.data.cinemas);
                    }
                })
            }
        },
        filters:{
            keyFormat:(key) =>{
                let tags=[
                    { key : 'allowRefund' , value : '改签' },
                    { key : 'endorse' , value : '退' },
                    { key : 'sell' , value : '折扣卡' },
                    { key : 'snack' , value : '小吃'}
                ]
                for(let i=0;i<tags.length;i++){
                    if(key===tags[i].key){
                        return tags[i].value;
                    }
                }
            },
            typeFormat:(key) =>{
                let tags=[
                    { key : 'allowRefund' , value : 'success' },
                    { key : 'endorse' , value : 'info' },
                    { key : 'sell' , value : 'warning' },
                    { key : 'snack' , value : 'danger'}
                ]
                for(let i=0;i<tags.length;i++){
                    if(tags[i].key===key){
                        return tags[i].value;
                    }
                }
            }
        },
        mounted() {
            this.getCinema();
        },
        components:{
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .cinema{
       width:100%;
       .cinemaContent{
           padding-top:60px;
           padding-bottom:60px;
           >div:nth-child(1){
               width:100%;
               height:45px;
               border-bottom:1px solid #cccccc;
               display:flex;
                div{
                    flex:1;
                    text-align:center;
                    line-height:45px;
                }
           }
           .cinemaInfo{
               padding:10px;
               border-bottom:1px solid #cccccc;
                header{
                    font-size:18px;
                    span{
                        font-size:18px;
                        color:orange;
                    }
                }
                >div{
                    display:flex;
                    justify-content:space-between;
                    span{
                        color:#666666;
                    }
                    span:nth-child(1){
                        width:200px;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
                .el-tag{
                    height:25px;
                    line-height:20px;
                    margin-right:5px;
                    margin-top:10px;
                }
           }
       }
    }
</style>