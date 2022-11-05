// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import App from "./App";
import Vuetify from 'vuetify';
import SelectCrypto from "./components/SelectCrypto"
import HelloWorld from "./components/HelloWorld"
import AccommodationView from "./components/AccommodationView"

// import HelloWorld from "../"


Vue.use(Vuetify);

Vue.use(VueRouter);

Vue.use(VueRouter);

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "HelloWorld", component: HelloWorld, path: "/HelloWorld", children: [] },
    { name: "AccommodationView", component: AccommodationView, path: "/AccommodationView", children: [] },
    { name: "SelectCrypto", component: SelectCrypto, path: "/SelectCrypto", children: [], props: true }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')