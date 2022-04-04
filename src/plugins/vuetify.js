import "@fortawesome/fontawesome-free/css/all.css";
import Vue from 'vue'
import Vuetify from 'vuetify'
import { Ripple } from 'vuetify/lib/directives'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify,{
    directives: {
      Ripple
    }
  });

export default new Vuetify({
    iconfont: "mdi" | "fa" | "fas" | "fa-solid"
});
