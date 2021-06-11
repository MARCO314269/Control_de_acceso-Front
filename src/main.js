import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue';
import 'ant-design-vue/lib/date-picker/style/css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'

import VModal from 'vue-js-modal'
import router from './router'
import store from './store'
import Vuelidate from "vuelidate"
import DatePicker from 'ant-design-vue/lib/date-picker';


/*Vue.config.productionTip = false*/

Vue.use(VModal)
Vue.use(VueRouter, router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate);
Vue.use(DatePicker);

Vue.component(Button.name, Button)

Vue.config.productionTip = false


/*axios.defaults.baseURL = process.env.VUE_APP_URL*/

new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')

module.exports = {
  presets: ["@vue/app"],
 plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};