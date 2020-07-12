import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Online_login from '../views/online_login.vue'
import Online from '../views/online.vue'
import FilmFestival from '../views/film_festival.vue'
import QA from '../views/QA.vue'
import FilmShow from '../views/film_show.vue'
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
        path: '/film_festival',
        name: 'FilmFestival',
        component: FilmFestival
    },
    {
        path: '/QA',
        name: 'QA',
        component: QA
    },
    {
        path: '/film_show',
        name: 'FilmShow',
        component: FilmShow
    }
   
]

const router = new VueRouter({
    routes
})

export default router