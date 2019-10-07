import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from '../src/router/router';
import Nprogress from 'nprogress';
Vue.use(VueRouter);
Vue.config.productionTip = false
new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
// navigation guards before each
router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

// navigation guard after each
router.afterEach(() => {
  Nprogress.done();
});