<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in info" :key="item.url">
				<img :src="item.image" alt="">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>

export default {
	data() {
		return {
			info: [
				{ url:"https://www.taobao.com",image:require('./image/dnf1.jpg')},
				{ url:"https://www.baidu.com",image:require('./image/dnf2.jpg')}
			]
		};
	},
	methods: {},
	
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
		img{
			width: 375px;
			height: 200px;
		}
	}
}
</style>
