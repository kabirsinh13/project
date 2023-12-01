import { createApp } from 'vue'

import router from './router.js'
import App from './App.vue'
import { createStore } from 'vuex'
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

const store = createStore({
  state(){
    return{
      isAuth:false,
    }
  },
  mutations:{
    setAuth(state,payload){
      state.isAuth=payload.value
    }
  },
  actions:{
    login(context){
      context.commit('setAuth',{value:true})
    },
    logout(context){
      context.commit('setAuth',{value:false})
    }
  },
  getters:{
    userAuthienticated(state){
      return state.isAuth;
    }
  }
})

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
