import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
axios.defaults.baseURL = 'http://localhost:5000'; //'http://10.100.90.23';

axios.defaults.headers.common = {
  "Content-Type": "application/json",
  'X-Requested-With': 'XMLHttpRequest',
};

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



// Vue.component('font-awesome-icon', FontAwesomeIcon)
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  
  render: h => h(App)
}).$mount('#app')
