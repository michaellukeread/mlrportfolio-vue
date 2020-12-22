import Vue from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Swimlane from 'vue-swimlane';

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Swimlane);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
