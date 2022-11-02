// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import SelectCrypto from "./components/SelectCrypto";
import AccommodationView from "./components/AccommodationView"
import HelloWorld from "./components/HelloWorld"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify';
Vue.use(Vuetify);

Vue.use(Router);

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/AccommodationView", name: 'AccommodationView', component: AccommodationView },
  { path: "/SelectCrypto", name: 'SelectCrypto', component: SelectCrypto },
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

// new Vue({
//   router,
//   vuetify,
// }).$mount('#app')
new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')