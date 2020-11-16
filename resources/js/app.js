require('./bootstrap');
import Vue from 'vue'
import VueRouter from "vue-router";
//Main pages
import App from './views/App'
import routes from './routes';


const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
