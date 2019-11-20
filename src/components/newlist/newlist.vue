<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" :src="item.imgSrc" />
					<div class="mui-media-body">
						{{item.title}}
						<p class="mui-ellipsis">
							<span>{{item.add_time}}</span>
							<span>{{item.clickNum}}</span>
						</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newList: [
				{
					id: 1,
					title: '睡觉',
					'add_time': '2019-11-20 15:50',
					clickNum: '2',
					imgSrc: 'https://s2.ax1x.com/2019/11/20/MWOWf1.jpg'
				}
			]
		};
	},
	created() {
		this.getNewList();
	},
	mounted() {},
	methods: {
		getNewList() {
			this.$axios
				.get('./src/components/newlist/newListData.json')
				.then(response => {
					this.newList = response.data.data;
				})

				.catch(function(error) {
					// 请求失败处理
					console.log(error);
				});
		}
	}
};
</script>

<style scoped="scoped" lang="scss">
.title {
	margin: 20px 15px 10px;
	color: #6d6d72;
	font-size: 15px;
}
.mui-ellipsis {
	display: flex;
	justify-content: space-between;
}
</style>
