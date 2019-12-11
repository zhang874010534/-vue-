import VueRouter from 'vue-router'

import cart from './components/tabbar/cart.vue'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/newlist/newlist.vue'
import newInfo from './components/newlist/newInfo.vue'
var router = new VueRouter({
	routes: [
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/home/newlist',component:newlist},
		{path:'/home/newlist/:id',component:newInfo},
		{path:'/member',component:member},
		{path:'/cart',component:cart},
		{path:'/search',component:search}
	],
	linkActiveClass:'mui-active'
})

export default router
