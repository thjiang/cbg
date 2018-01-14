import Vue from 'vue';
// import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './app.vue';
// import routerConfig from './router';

// Vue.use(VueRouter);
Vue.use(iView);

// const router = new VueRouter(routerConfig);

new Vue({
    el: '#app',
    // router: router,
    render: h => h(App)
});
