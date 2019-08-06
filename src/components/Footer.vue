<template>
    <footer>
		<button @click="go">1 </button>
       <div class="bottom">
           <router-link to="/movie" tag="div"><span>movie</span><span class="fa fa-film"></span></router-link>
           <router-link to="/cinema" tag="div"><span>cinema</span><span class="fa fa-bookmark"></span></router-link>
           <router-link to="/mine" tag="div"><span>mine</span><span class="fa fa-user"></span></router-link>
       </div>
    </footer>
</template>

<script>
    export default {
        name:'Footer',
        data() {
            return {
              id:123
            }
        },
		methods:{
			go(){
				this.$router.push({
					name:'mine',
					params:{
						name:'word',
						age:'11'
					}
				})

			}
		}
    }
</script>

<style lang="scss" scoped>
    .router-link-active{
        color:#006699;
    }
    footer{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        border-bottom:1px solid #cccccc;
        border-top:1px solid #cccccc;
        z-index:555;
        background-color:white;
        .bottom{
            display:flex;
            div{
                flex:1;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                span:nth-child(1){
                    font-size:18px;
                    line-height:35px;
                }
            }
        }
    }
</style>