<template>
	<div class="cartWrap">
		<div class="cartSingle">
			<van-checkbox-group v-model="result" ref="checkboxGroup">
				<div v-for="(item,i) in shopCart" :key="i" class="infoWrap" >
					<van-checkbox :name="i">
						<div class="vantCheckBox">
							<img :src="item.imgSrc" alt="">
							<div class="shopInfo">
								<p>商品信息</p>
								<p>商品信息</p>
								<p>商品信息</p>
							</div>
						</div>
					</van-checkbox>
					<div class="deleleButton" @click="del(i)">删除</div>
				</div>
				
				
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
		},
		del(i){
			this.$store.commit('del',i)
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
		.infoWrap{
			position: relative;
			img{
				width: 6.875rem;
				height: 6.875rem;
			}
			.vantCheckBox{
				display: flex;
				position: relative;
				.shopInfo{
					margin-top: 20px;
					margin-left: 20px;
				}
				
			}
			.deleleButton{
				color: red;
				position: absolute;
				right: 30px;
				bottom: 10px;
			}
		}
		
	}
}
</style>
