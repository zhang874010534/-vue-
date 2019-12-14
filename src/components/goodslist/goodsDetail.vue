<template>
	<div>
		我是商品详情{{id}}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id:this.$route.params
			}
		}
	}
</script>

<style>
</style>
