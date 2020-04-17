import Vue from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Toast, {
  transitionDuration: 0,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
