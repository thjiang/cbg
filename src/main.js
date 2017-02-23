import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './components/app'
Vue.config.debug = true;//开启错误提示

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
