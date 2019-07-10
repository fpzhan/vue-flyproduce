import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import flyProduce from "./flyproduce";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  flyProduce,
  render: h => h(App)
}).$mount("#app");
