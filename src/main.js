// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入element ui 
import ElementUI from '../node_modules/element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

//引入vuex
import store from './store'

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'

//定义一个全局过滤器
// Vue.filter('musicFilter', function(value) {
//     return value.code % 10 == 10;
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})