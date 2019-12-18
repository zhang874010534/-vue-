import VueRouter from 'vue-router'

import cart from './components/tabbar/cart.vue'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/newlist/newlist.vue'
import newInfo from './components/newlist/newInfo.vue'
import photolist from './components/photos/photolist.vue'
import goodslist from './components/goodslist/goodslist.vue'
import goodsInfo from './components/goodslist/goodsInfo.vue'

var router = new VueRouter({
	routes: [
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/home/newlist',component:newlist},
		{path:'/home/newlist/:id',component:newInfo},
		{path:'/home/photolist',component:photolist},
		{path:'/home/goodslist',component:goodslist},
		{path:'/home/goodslist/:id',component:goodsInfo},
		{path:'/member',component:member},
		{path:'/cart',component:cart},
		{path:'/search',component:search}
	],
	linkActiveClass:'mui-active'
})

export default router
