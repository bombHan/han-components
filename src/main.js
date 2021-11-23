import Vue from 'vue'
import App from './App.vue'
import components from '../components/index'

Vue.config.productionTip = false

Vue.use(components.install)

new Vue({
  render: h => h(App),
}).$mount('#app')
