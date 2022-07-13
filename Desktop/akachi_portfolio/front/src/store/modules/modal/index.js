const state = {
  createModal: true
}

const getters = {
  createModal (state) {
    return state.createModal
  }
}

const mutations = {
  SET_CREATE_MODAL: (state) => {
    state.createModal = true
  }
}

const actions = {
  fetchCreateModal ({ commit }) {
    // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOIN
    commit('SET_CREATE_MODAL')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
