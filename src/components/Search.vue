<template>
    <div class="search">
        <div>
            <el-input placeholder="请输入内容" v-model="searchText"></el-input>
        </div>
        <div class="searchContent">
            <p>电影/电视剧/综艺</p>
            <ul>
                <li v-for="(item,i) in movieList" :key="i">
                    <div><img :src="item.img | imgFormat "></div>
                    <div>
                        <header>{{item.nm}}</header>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                    <div>
                        <p>{{item.sc}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Search',
        data() {
            return {
                searchText:'',
                movieList:[],
                searchFlag:false
            }
        },
        methods:{
            getSearch() {
                this.axios.get('/api/searchList',{params:{cityId:59,kw:this.searchText}}).then(result =>{
                    console.log(result.data.data.movies);
                    if(result.data.data.movies){
                        this.movieList=result.data.data.movies.list;
                    }else{
                        return false;
                    }
                    
                })   
            }
        },
        watch:{
            searchText:
                // 天秀   箭头函数 ()=>{} 是不支持this关键字的，所以在箭头函数里面使用this会报错undefined
                // 写成正常函数就可以了
                function(newVal,oldVal){
                    this.getSearch();
                }
        },
        filters:{
            imgFormat:(data) =>{
                let str='128.180';
                return data.replace(/w\.h/,str);
            }
        }
    }
</script>

<style lang="less" scoped>
    .search{
        height:auto;
        margin-top:105px;
        >div:nth-child(1){
            padding:10px;
            background-color:#F5F5F5;
            .el-input{
                width:100%;
                padding:0;
            }
        }
        .searchContent{
            background-color:#ffffff;
            >p{
                color:#999999;
                line-height:40px;
                border-top:1px solid #cccccc;
                border-bottom:1px solid #cccccc;
                font-size:15px;
                font-weight:bold;
                text-indent:1.5em;
            }
            ul{
                margin:0;
                padding:0;
                li{
                    list-style:none;
                    display:flex;
                    align-items: center;
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
                        width:47px;
                        font-size:18px;
                        font-weight:bold;
                        color:orange;
                        text-align:center;
                    }
                }
            }
        }
    }
</style>