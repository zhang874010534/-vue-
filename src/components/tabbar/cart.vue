<template>
	<div class="cartWrap">
		<div class="cartSingle">
			<van-checkbox-group v-model="result" ref="checkboxGroup">
				<van-checkbox name="a">复选框 a</van-checkbox>
				<img :src="shopCart[0].imgSrc" alt="">
			</van-checkbox-group>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			shopCart: this.$store.state.shopCart,
			result: []
		};
	},
	mounted() {
		console.log(this.shopCart);
	},
	methods: {
		checkAll() {
			this.$refs.checkboxGroup.toggleAll(true);
		},
		toggleAll() {
			this.$refs.checkboxGroup.toggleAll();
		}
	}
};
</script>

<style scoped="scoped" lang="scss">
.cartWrap {
	background-color: #f2f2f2;
	padding: 1px;
	.cartSingle {
		background-color: white;
		margin: 15px auto;
		width: 90%;
		border-radius: 15px;
		img{
			width: 6.875rem;
			height: 6.875rem;
		}
	}
}
</style>
