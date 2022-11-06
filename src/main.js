// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import App from "./App";
import Vuetify from "vuetify";
import SelectCrypto from "./components/SelectCrypto";
import AccommodationView from "./components/AccommodationView";
import ShowAllAccommodations from "./components/ShowAllAccommodations";

Vue.use(Vuetify);

Vue.use(VueRouter);

Vue.use(VueRouter);

Vue.use(BootstrapVue);

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "AccommodationView",
            component: AccommodationView,
            path: "/AccommodationView",
            children: [],
            props: true,
        },
        {
            name: "SelectCrypto",
            component: SelectCrypto,
            path: "/SelectCrypto",
            children: [],
            props: true,
        },
        {
            name: "ShowSelected",
            component: ShowAllAccommodations,
            path: "/ShowAllAccommodations",
            children: [],
            props: true,
        },
    ],
});

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify: new Vuetify(),
    render: (h) => h(App),
}).$mount("#app");
