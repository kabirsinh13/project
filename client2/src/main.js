import { createApp } from 'vue'

import router from './router.js'
import App from './App.vue'
// import


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' 
import '@fortawesome/fontawesome-free/css/all.css'
import {fa} from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export default createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        fa
      },
    },
})

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app.use(router);
// app.use(router);

app.use(vuetify);

app.mount('#app');
