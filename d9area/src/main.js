import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.less'
import '@/assets/js/rem'
// import 'amfe-flexible'
// 引入element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import VueI18n from 'vue-i18n'
// import i18n from './i18n/i18n'
Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
    locale: 'cn', // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'cn': require('./i18n/langs/cn'), // 中文语言包
        'en': require('./i18n/langs/en') // 英文语言包
    }
})
import "swiper/dist/css/swiper.min.css";

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)


Vue.config.productionTip = false


new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app')