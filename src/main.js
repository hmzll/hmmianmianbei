import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './router/index'
import "./style/base.css"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
