// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import Cookie from "../static/cookie"
import Command from "../static/command";

Vue.prototype.$axios=Axios;
// 把接口地址的js绑定给vue对象的原型
Vue.prototype.$apiUrl=Command;
Vue.prototype.$cookie=Cookie;



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
