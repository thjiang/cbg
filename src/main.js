import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './app.vue';

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueResource);

new Vue(App);
