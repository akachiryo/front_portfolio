import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import skill from './modules/skill'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    skill
  }
})

export default store
