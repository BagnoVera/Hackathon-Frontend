import Vue from "vue";
import router from './routing';
import store from './store';
import App from './App.vue';
import vuetify from './plugins/vuetify'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
