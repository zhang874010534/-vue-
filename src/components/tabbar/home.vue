<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in info" :key="item.url"><img :src="item.image" alt="" /></mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newlist">
					<img src="./image/new.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="./image/pic.png" alt="">
					<div class="mui-media-body">图片分享</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="./image/shop.png" alt="">
					<div class="mui-media-body">商品购买</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="./image/comment.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="./image/video.png" alt="">
					<div class="mui-media-body">视频专区</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="./image/contact.png" alt="">
					<div class="mui-media-body">联系我们</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			info: [{ url: 'https://www.taobao.com', image: require('./image/dnf1.jpg') }, { url: 'https://www.baidu.com', image: require('./image/dnf2.jpg') }]
		};
	},
	methods: {}

	// mounted() {
	// 	console.log(this.info);
	// 	this.$axios
	// 		.get('https://github.com/zhang874010534/vue-mobile-mall/blob/master/demo.json')
	// 		.then(response => (this.info = response))
	// 		.catch(function(error) {
	// 			// 请求失败处理
	// 			console.log(error);
	// 		});

	// }
};
</script>

<style lang="scss" scoped="scoped">
.mint-swipe {
	height: 200px;

	.mint-swipe-item {
		&:nth-child(1) {
			background-color: lightpink;
		}
		&:nth-child(2) {
			background-color: lightgreen;
		}
		&:nth-child(3) {
			background-color: lightskyblue;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.mui-grid-view.mui-grid-9 {
	background-color: white;
	img{
		width: 40px;
		height: 40px;
	}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
	border: none;
}
</style>
