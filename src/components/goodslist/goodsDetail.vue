<template>
	<div class="DetailWrap">
		我是商品详情
		<div :class="{shop:true,move:moveFlag}" ref="ball"></div>
		<div>加入购物车的数量为{{goodsNum}}</div>
		<input type="button" value="+1" @click="goodsNumUp">
		<input type="text" v-model="goodsNum">
		<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
		@click="shopMove"
		>加入购物车</van-button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id:this.$route.params,
				moveFlag:false,
				goodsNum:0
			}
		},
		methods:{
			shopMove(){
				this.moveFlag=true
				setTimeout(()=>{
					this.moveFlag=false
				},1000)
				//给下面的tabbar父组件传购物数量参数
				this.$emit('getShopNum',this.goodsNum)
				console.log(this.$refs.ball.getBoundingClientRect().top)
			},
			goodsNumUp(){
				this.goodsNum=parseInt(this.goodsNum)+1
				// this.$store.commit('increment')
				// console.log(this.$store.state.count)
				console.log(this.$store.getters.backCount)
			}
		},
		watch:{
			goodsNum(){
				console.log("我goodsNum被改变了")
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	
	.DetailWrap{
		height: 900px;
	}
	.shop{
		width: 20px;
		height: 20px;
		background-color: red;
		border-radius: 50%;
		visibility: hidden;
		z-index: 2;
	}
	.move{
		animation: move 1s cubic-bezier(.35,-0.15,.83,.67) ;
	}
	@keyframes move{
		0%{
			visibility: visible;
			transform: translate(0);
		}
		100%{
			transform: translate(226px,800px);
		}
	}
</style>
