<template>
	<div class="photoContainer">
		<van-tabs>
			<van-tab v-for="(index, i) in 8" :key="i" :title="'标签 ' + index">
				<img v-for="(img, i) in list" :key="i" v-lazy="img.imgSrc" />
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list:
			[
				{ imgSrc: 'https://s2.ax1x.com/2019/11/24/MLQKw4.png' },
				{ imgSrc: 'https://s2.ax1x.com/2019/11/24/MLRCB8.png' },
				{ imgSrc: 'https://s2.ax1x.com/2019/11/24/MLRPHS.png' },
				{ imgSrc: 'https://s2.ax1x.com/2019/11/24/MLR9nf.png' },
				{ imgSrc: 'https://s2.ax1x.com/2019/11/24/MLRFAg.png' }
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss">
	.photoContainer{
		width: 100%;
		img {
			display: block;
			width: 200px;
			margin: auto;
		}
		.van-tabs__line{
			z-index: 0;
		}
	}
	
</style>
