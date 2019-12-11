<template>
	<div>
		<div>
			我是新闻详情
		</div>
		<div>
			我是路由参数
			{{$route.params.id}}
		</div>
		//评论子组件
	</div>
</template>

<script>
	import comment from '../subcomponents/comment.vue'
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
</style>
