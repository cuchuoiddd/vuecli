import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);
Vue.config.productionTip = false
Vue.prototype.$baseURL = 'http://localhost/blog/public/api/'

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)


new Vue({
    router,
    Paginate,
    vSelect,
    render: h => h(App)
}).$mount('#app')