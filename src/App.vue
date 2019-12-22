<template>
	<div class="container">
		<!-- header -->
		<mt-header fixed title="vue 商城">
			<span slot="left" @click="goBack" v-show="!(this.$route.path == '/home')"><mt-button icon="back">返回</mt-button></span>
		</mt-header>
		<!-- router-view -->

		<transition><router-view></router-view></transition>
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
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">{{ this.$store.state.shopCart.length }}</span>
				</span>
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
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	},
	mounted() {
		
	}
	// watch:{
	// 	'$route.path':function(){
	// 		console.log(!(this.$route.path=='/home'));
	// 	}

	// }
};
</script>

<style scoped>
.mui-bar-tab {
	margin-bottom: -5px;
}
.container {
	padding-top: 40px;
	padding-bottom: 60px;
	overflow-x: hidden;
}
.v-enter {
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}
</style>
