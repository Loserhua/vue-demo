// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(VueRouter)


const router = new VueRouter({
 routes: routers
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.component("meMe",{
   template: '<div>这是全局定义的组件me</div>'

})
Vue.component("meMe",{
   template: '<div>这是全cx局定义的组件me</div>'

})
