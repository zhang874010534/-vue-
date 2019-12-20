<template>
	<div class="goodsWrap">
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index"><img v-lazy="image" /></van-swipe-item>
		</van-swipe>
		<!-- 商品简介开始 -->
		<div class="brief">
			<div class="price">
				<div class="nowPrice">
					<span class="l">￥</span>
					<span class="m">2158.2-4317</span>
					<span class="r">抢购价</span>
				</div>
				<div class="oldPrice">
					价格￥
					<del>2398-4796</del>
				</div>
			</div>
			<div class="intro">
				<span class="txt">Xiaomi/小米9Pro 5g版官方旗舰骁龙855plus全面屏10手机mix4pro新</span>
				<div class="share">
					<img src="./images/share.png" alt="" />
					分享
				</div>
			</div>
			<div class="fee">
				<span class="l"></span>
				<span class="c"></span>
				<span class="r"></span>
			</div>
		</div>
		<!-- 商品简介结束 -->
		
		
		 <van-button type="warning" class="shopCart" @click="()=>{ this.show=true}">加入购物车</van-button>
		<!-- 上拉菜单开始 -->
		<van-action-sheet v-model="show" title=" " class="actionSheet">
		  <div class="header">
			  <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
			  <div class="txt">
				  <div class="price">￥2158.2-4317</div>
				  <div class="stock">库存：10100</div>
			  </div>
		  </div>
		  <div class="info">
			  <p>机身颜色</p>
			  <ul>
				  <li v-for="(item,i) in 4" :key="i" class="" @click="addSingleInfo('小米9Pro【8+128G】梦之白 现货 当天发+碎屏险')">小米9Pro【8+128G】梦之白 现货 当天发+碎屏险</li>
			  </ul>
		  </div>
		  <van-button type="warning" class="shopCart" @click="addGoods">加入购物车</van-button>
		</van-action-sheet>
		<!-- 上拉菜单结束 -->
		
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
			goodsInfoObj: {
				id: '',
				imgSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg',
				num: 1,
				txt:''
			},
			show: false,
		}
	},
	mounted() {
		this.goodsInfoObj.id=this.id
	},
	methods: {
		addGoods() {
			this.$store.commit('addGoods',this.goodsInfoObj);
			this.show=false
		},
		addSingleInfo(txt){
			this.goodsInfoObj.txt=txt;
		}
		
	}
};
</script>

<style lang="scss">
.goodsWrap {
	img {
		box-sizing: border-box;
		width: 100%;
	}
	//简介
	.brief {
		padding-left: 0.625rem;
		padding-top: 15px;
		.nowPrice {
			color: #ff5000;
			.m {
				font-size: 24px;
			}
			.r {
				font-size: 12px;
			}
		}
		.oldPrice {
			color: #999;
			font-size: 12px;
		}
		.intro {
			position: relative;
			.txt {
				display: block;
				width: 85%;
				font-size: 15px;
				font-weight: bold;
			}
			.share {
				width: 3.5rem;
				height: 1.5rem;
				color: rgb(153, 153, 153);
				background-color: rgb(244, 244, 244);
				border-radius: 1.25rem;
				position: absolute;
				top: 0.625rem;
				right: 0;
				img {
					width: 1rem;
					height: 1rem;
					vertical-align: middle;
				}
			}
		}
	}
	//购物车
	.shopCart {
		margin: 0.625rem;
	}
	//上拉菜单
	.actionSheet{
		.header{
			img{
				width: 6.875rem;
				height: 6.875rem;
				margin: 0.4375rem 0 0 0.4375rem;
			}
			.txt{
				display: inline-block;
				.price{
					color: red;
				}
				.stock{
					font-size: 0.75rem;
				}
			}
		}
		.info{
		
			li{
				display: inline-block;
				font-size: 0.875rem;
				background-color: #F8F8F8;
				border-radius: 15px;
				margin: 0.3125rem 0 0 15px;
			}
		}
	}
	
}
</style>
