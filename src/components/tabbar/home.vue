<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in info" :key="item.url"><img :src="item.image" alt="" /></mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">Home</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">Email</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">Chat</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">location</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">Search</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">Phone</div>
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
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
	border: none;
}
</style>
