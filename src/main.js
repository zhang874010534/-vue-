
import Vue from 'vue'


import app from './App.vue'

import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'
var vm=new Vue({
	el:'#app',
	data:{
		
	},
	render(c) {
		return c(app)
	}
})