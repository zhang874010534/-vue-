import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'

import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//导入router
import router from './router.js'


//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// //导入moment
// import moment from 'moment'
// Vue.filter('dateFormat',function(date,pattern="YYYY-MM-DD HH:mm:ss"){
// 	return moment(date).format(pattern)
// })

var vm = new Vue({
	el: '#app',
	data: {

	},
	render(c) {
		return c(app)
	},
	router
})
