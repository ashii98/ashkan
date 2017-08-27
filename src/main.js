import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'
import About from './components/About.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About }
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
