import Vue from 'vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if(res.status == 0) {
    return res.data;
  } else if(res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
})

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')