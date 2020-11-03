// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(Router);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

