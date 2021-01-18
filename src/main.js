import Vue from 'vue'
import './plugins/element.js'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI);

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import BootstrapVueIcons from 'bootstrap-vue'
Vue.use(BootstrapVueIcons)

import axios from 'axios'
import VueAxios from 'vue-axios'
//import axios from 'https://cdn.bootcdn.net/ajax/libs/axios/0.20.0/axios.min.js'
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios
axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

axios.defaults.baseURL = 'http://47.110.132.41:8081';

// import qs from 'qs'
// Vue.use(VueAxios, axios_instance);

// import Vuex from 'vuex'
// Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  });

// var axios_instance = axios.create({
//   // baseURL: 'http://localhost:8081/',
//   transformRequest: [function (data) {
//     // data = qs.stringify(data);
//     data = JSON.stringify(data);
//     return data;
//   }],
//   headers: {
//     // 'Content-Type': 'application/x-www-form-urlencoded'
//     'Content-Type': 'application/json'
//   }
// })