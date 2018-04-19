// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './firebase'
import VueFire from 'vuefire'
import VeeValidate from 'vee-validate'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VeeValidate)
/* eslint-disable no-new */
let app

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
