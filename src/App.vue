<template>
	<div class="container">
		<!-- header -->
		<mt-header fixed title="特二神商城"></mt-header>
		<!-- router-view -->
		<router-view></router-view>
		<!-- tabBar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item" id="defaultTab" ref="home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
	
};
</script>

<style scoped>
.container {
	padding-top: 40px;
}
</style>
