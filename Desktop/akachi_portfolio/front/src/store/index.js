import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import skill from './modules/skill'
import modal from './modules/modal'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    skill,
    modal
  }
})

export default store
