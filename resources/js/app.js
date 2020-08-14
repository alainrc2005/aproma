import Vue from 'vue'
import Vuex from 'vuex'
import Quasar from 'quasar'
import langQ from 'quasar/lang/es'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import App from './app.vue'
import moment from 'moment'

const axiosContext = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
    },
    withCredentials: true
});
Vue.prototype.$axios = axiosContext;
Vuex.Store.prototype.$axios = axiosContext;
Vue.prototype.$ld = require('lodash');

Vue.use(Quasar, {
    lang: langQ
});

Vue.filter('formatDateTime', function (value) {
    if (!value) return ''
    return moment(value,'YYYY-MM-DD HH:mm').format('DD/MM/YYYY HH:mm')
})

Vue.use(Vuelidate);

window.app = new Vue({
    el: '#app',
    render: h => h(App)
});