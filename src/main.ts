import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dotenv from "dotenv";
dotenv.config();
Vue.config.productionTip = false;

const x = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
console.log(x)