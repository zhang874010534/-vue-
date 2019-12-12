<template>
	<div>
		<van-tabs>
		  <van-tab v-for="(index,i) in 8" :key="i" :title="'标签 ' + index">
		    <ul class="photolist">
		      <li v-for="(item,i) in list" :key="i">
		        <img v-lazy="item.imgSrc">
		      </li>
		    </ul>
		  </van-tab>
		</van-tabs>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{imgSrc:'https://s2.ax1x.com/2019/11/24/MLQKw4.png'},
					{imgSrc:'https://s2.ax1x.com/2019/11/24/MLRCB8.png'},
					{imgSrc:'https://s2.ax1x.com/2019/11/24/MLRPHS.png'},
					{imgSrc:'https://s2.ax1x.com/2019/11/24/MLR9nf.png'},
					{imgSrc:'https://s2.ax1x.com/2019/11/24/MLRFAg.png'},
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.photolist{
		text-align: center;
		li{
			img[lazy=loading] {
			  width: 40px;
			  height: 300px;
			  margin: auto;
			}
		}
	}
	
</style>
