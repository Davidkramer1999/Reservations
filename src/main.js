
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import './assets/main.css'



const app = createApp(App)

app.use(VueGoodTablePlugin);

app.use(router)

app.mount('#app')
