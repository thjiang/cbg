import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// 不再打包CSS，直接使用link标签引入

import VueRouter from 'vue-router';
import routerConfig from './router';

import App from './app.vue';

Vue.use(iView);
// Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
