<template>
    <div class="citylist" ref="city" @touchend="go">
        <div class="hotcity">
            <h1>hot</h1>
            <ul>
               <li v-for="(item) in hotList" :key="item.id">{{item.nm}}</li>
            </ul>
        </div>
        <div class="citygroup" v-for="(item,i) in cityList" :key="i">
            <h1>{{item.firstLetter}}</h1>
            <ul>
                <li v-for="(item) in item.list" :key="item.id">{{item.nm}}</li>
            </ul>
        </div>
        <div class="citynav">
            <ul>
                <li v-for="(item,i) in cityList" :key="i">{{item.firstLetter}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'cityList',
        data() {
            return {
                cityList:[],
                hotList:[]
            }
        },
        methods:{
            getCityList() {
                let that=this;
                this.axios.get('/api/cityList').then((result) =>{ 
                    this.cityList=this.cityListFormat(result.data.data);
                    this.hotList=this.hotListFormat(this.cityList);
                })
            },
            cityListFormat(cities) {
                let cityList=[];
                for(let i=0;i<cities.cities.length;i++){
                    let city=cities.cities[i];
                    let firstLetter=city.py.substr(0,1).toUpperCase();
                    if(judgeFirstLetter(firstLetter)){
                        cityList.push({firstLetter:firstLetter,list:[city]})
                    }else{
                        for(let j=0;j<cityList.length;j++){
                            if(firstLetter===cityList[j].firstLetter){
                                cityList[j].list.push(city);
                            }
                        }
                    }
                }
                function judgeFirstLetter(firstLetter) {
                    for(let i=0;i<cityList.length;i++){
                        if(firstLetter===cityList[i].firstLetter){
                            return false
                        }
                    }
                    return true
                }
                return cityList.sort(function(obj1,obj2){
                    if(obj1.firstLetter>obj2.firstLetter){
                        return 1
                    }else{
                        return -1
                    }
                });
            },
            hotListFormat(data) {
                let hotList=[];
                for(let i=0;i<data.length;i++){
                    for(let j=0;j<data[i].list.length;j++){
                        if(data[i].list[j].isHot===1){
                            hotList.push(data[i].list[j]);
                        }
                    }
                }
                return hotList;
            },
            go(e) {
                let tag=e.target.innerText
                let $h1=this.$refs.city.querySelectorAll('h1');
                for(let i=0;i<$h1.length;i++){
                    if($h1[i].innerText===tag){
                        //let top=Number($h1[i].getBoundingClientRect().y);
                        // getBoundingClientRect()方法的位置位置是变化的,是相对于页面的位置,可以为正负
                        // window.scrollTo(0,top);
                        // offsetTop的理解,有点类似position属性,它的位置是相对于和它离的最近的父级元素。如果它所有的父级以上元素
                        // 都没有position属性,那么它会相对于根元素定位.并且offsetTop的位置值不会变,可以不用和卷曲高度那样做计算
                        let top=$h1[i].offsetTop;
                        console.log(top);
                        window.scrollTo(0,top);
                    }
                }
            }
        },
        mounted() {
             this.getCityList();
        }
    }
</script>
<style lang="less" scoped>
    .citylist{
        width:92%;
        height:auto;
        background-color:bisque;
        position:relative;
        margin-top:105px;
        margin-bottom:60px;
        .hotcity{
            width:100%;
            margin-top:20px;
            h1{
                width:100%;
                height:40px;
                background-color:cadetblue;
                text-align:center;
                font-size:20px;
                line-height:40px;
            }
            ul{
                width:100%;
                list-style:none;
                margin:0;
                padding:0;
                li{
                    float:left;
                    width:29%;
                    height:45px;
                    line-height:45px;
                    text-align:center;
                    border:1px solid #cccccc;
                    border-radius:3px;
                    margin-left:3%;
                    margin-top:10px;
                }
            }
            ul::before,ul::after{
                display:block;
                content:'';
                clear:both;
            }
        }
        .citygroup{
            width:100%;
            margin-top:10px;
            h1{
                width:100%;
                height:40px;
                background-color:cadetblue;
                text-align:center;
                font-size:20px;
                line-height:40px;
            }
            ul{
                width:100%;
                list-style:none;
                margin:0;
                padding:0;
                li{
                    float:left;
                    width:29%;
                    height:45px;
                    line-height:45px;
                    text-align:center;
                    border:1px solid #cccccc;
                    border-radius:3px;
                    margin-left:3%;
                    margin-top:10px;
                }
            }
            ul::before,ul::after{
                display:block;
                content:'';
                clear:both;
            }
        }
        .citynav{
            position:fixed;
            right:0;
            top:50%;
            width:8%;
            transform:translateY(-50%);
            ul{
                width:100%;
                margin:0;
                padding:0;
                li{
                    width:100%;
                    font-size:17px;
                    text-align:center;
                    list-style:none;
                }
            }
        }
    }
</style>