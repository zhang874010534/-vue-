<template>
	<div class="goodsWrapper">
		<router-link :to="'/home/goodslist/'+item.id" class="singleItem" v-for="item in goodslist" :key="item.id">
			<img :src="item.imgSrc" alt="" />
			<div class="title">Redmi Note 8 Pro</div>
			<div class="brief">6400万全场景四摄</div>
			<div class="price">
				<span>￥1299起</span>
				<span class="priceOld">￥1399起</span>
			</div>
		</router-link>
		<van-button type="info" size="large" @click="getList">加载更多</van-button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				goodslist:[
					{id:1,imgSrc:'https://s2.ax1x.com/2019/12/13/QgNndH.png',title:'Redmi Note 8 Pro',brief:'6400万全场景四摄',price:'￥1299起',priceOld:'￥1399起'
					},
					{id:2,imgSrc:'https://s2.ax1x.com/2019/12/13/QgNZLD.png',title:'Redmi Note 8 Pro',
					brief:'6400万全场景四摄',price:'￥1299起',priceOld:'￥1399起'
					},
					{id:3,imgSrc:'https://s2.ax1x.com/2019/12/13/QgNndH.png',title:'Redmi Note 8 Pro',brief:'6400万全场景四摄',price:'￥1299起',priceOld:'￥1399起'
					}
				],
				goodslist2:[
					{id:5,imgSrc:'https://s2.ax1x.com/2019/12/13/QgNndH.png',title:'Redmi Note 8 Pro',brief:'6400万全场景四摄',price:'￥1299起',priceOld:'￥1399起'
					},
					{id:6,imgSrc:'https://s2.ax1x.com/2019/12/13/QgNZLD.png',title:'Redmi Note 8 Pro',
					brief:'6400万全场景四摄',price:'￥1299起',priceOld:'￥1399起'
					},
					{id:7,imgSrc:'https://s2.ax1x.com/2019/12/13/QgNndH.png',title:'Redmi Note 8 Pro',brief:'6400万全场景四摄',price:'￥1299起',priceOld:'￥1399起'
					},
					{id:8,imgSrc:'https://s2.ax1x.com/2019/12/13/QgNZLD.png',title:'Redmi Note 8 Pro',
					brief:'6400万全场景四摄',price:'￥1299起',priceOld:'￥1399起'
					}
				]
			}
		},
		created() {
		},
		methods:{
			getList(){
				this.goodslist=this.goodslist.concat(this.goodslist2)
				// this.$router.push('/home/jdiwoqjioejqioejwq'+id)
			}
		}
	}
</script>

<style lang="scss">
.goodsWrapper {
	display: flex;
	flex-wrap: wrap;
	padding: 7px;
	justify-content: space-between;
	.singleItem {
		text-align: center;
		margin-top: 5px;
		width: 49%;
		img {
			width: 100%;
		}

		.title {
			font-size: 14px;
			color: rgba(0, 0, 0, 0.87);
		}
		.brief {
			font-size: 12px;
			color: rgba(0, 0, 0, 0.54);
		}
		.price {
			font-size: 14px;
			color: #ea625b;
			.priceOld {
				color: rgba(0, 0, 0, 0.54);
				text-decoration: line-through;
			}
		}
	}
}
</style>
