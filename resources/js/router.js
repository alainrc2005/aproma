import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './views/login'

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Login, name: 'login'},
        { path: '*', redirect: '/' }
    ]
})

export default router;