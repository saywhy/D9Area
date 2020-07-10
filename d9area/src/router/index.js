import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Online_login from '../views/online_login.vue'
import Online from '../views/online.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/online_login',
        name: 'Online_login',
        component: Online_login
    },
    {
        path: '/online',
        name: 'Online',
        component: Online
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router