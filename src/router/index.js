import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Info from '@/components/Info/Info'
import Me from '@/components/Me/Me'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/home',
        name: 'Home',
        component: Home,
    }]
})