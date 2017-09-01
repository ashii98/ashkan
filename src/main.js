import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'
import About from './components/About.vue'
import Ac from './components/ac.vue'
import psu from './components/psu.vue'
import shams from './components/shams.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/work', component: Hello },
  { path: '/ashkan', component: About },
  { path: '/', component: About },
  { path: '/work/ac', component: Ac },
  { path: '/work/psu', component: psu },
  { path: '/work/shams', component: shams }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
