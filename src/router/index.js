import Vue from 'vue'
import Router from 'vue-router'
import myMusic from '../components/myMusic'
import down from '../components/down'
import frends from '../components/frends'
import musicer from '../components/musicer'
import shop from '../components/shop'
import login from '../components/login'
import creater from '../components/creater'
import home from '../components/home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        }, {
            path: '/myMusic',
            name: 'myMusic',
            component: myMusic
        },
        {
            path: '/creater',
            name: 'creater',
            component: creater
        }, {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/down',
            name: 'down',
            component: down
        },
        {
            path: '/frends',
            name: 'frends',
            component: frends
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop
        }, {
            path: '/musicer',
            name: 'musicer',
            component: musicer
        }
    ]
})