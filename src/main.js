// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    Paginate,
    vSelect,
    components: { App },
    template: '<App/>'
})