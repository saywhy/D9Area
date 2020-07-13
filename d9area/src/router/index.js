import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Online_login from '../views/online_login.vue'
import Online from '../views/online.vue'
import FilmFestival from '../views/film_festival.vue'
import QA from '../views/QA.vue'
import FilmShow from '../views/film_show.vue'
import Simple from '@/views/simple.vue'
import Messages from '@/views/messages.vue'
import Login from '@/views/login.vue'
import SubmitType from '@/views/submit_type.vue'
import SubmitAgree from '@/views/submit_agree.vue'
import Upload from '@/views/upload.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
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
    },
    {
        path: '/simple',
        name: 'Simple',
        component: Simple
    },
    {
        path: '/messages',
        name: 'Messages',
        component: Messages
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/submit_type',
        name: 'SubmitType',
        component: SubmitType
    },
    {
        path: '/submit_agree',
        name: 'SubmitAgree',
        component: SubmitAgree
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload
    }
]

const router = new VueRouter({
    routes
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});
export default router