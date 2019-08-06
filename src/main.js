import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routers'
import store from './store'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// font-awesome
import 'font-awesome/css/font-awesome.min.css'
// globe component
import Scroll from '@/components/Scroll.vue'
//axios prototype
Vue.prototype.axios = axios
    // globe register
Vue.component('BScroll', Scroll)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')