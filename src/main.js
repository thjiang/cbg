import Vue from 'vue';
import VueResource from 'vue-resource';
// import ElementUI from 'element-ui';
import { Button, Select, Option, Table, TableColumn, Collapse, CollapseItem, Form, FormItem,
     Col, Input, Radio, RadioGroup, RadioButton, Checkbox, CheckboxGroup, Loading, Message, Pagination } from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
import App from './app.vue';

Vue.config.debug = true;

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Pagination);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

Vue.use(VueResource);

new Vue(App);
