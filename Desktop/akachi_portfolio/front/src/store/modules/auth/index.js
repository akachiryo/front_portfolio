import axios from 'axios'

const state = {
  currentUser: null
}

const getters = {
  currentUser (state) {
    return state.currentUser
  }
}

const mutations = {
  SET_CURRENT_USER: (state, data) => {
    state.currentUser = data
    localStorage.setItem('currentUser', JSON.stringify(data))
    axios.defaults.headers.common.Authorization = `Bearer ${data.user.token}`
  },
  CLEAR_CURRENT_USER: () => {
    localStorage.removeItem('currentUser')
    localStorage.setItem('currentUser', {
      id: null,
      admin: null
    })
  }
}

const actions = {
  async login ({ commit }, sessionParams) {
    // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOIN
    const res = await axios.post('http://localhost:3000/api/session', sessionParams)
    commit('SET_CURRENT_USER', res.data)
  },

  logout ({ commit }) {
    commit('CLEAR_CURRENT_USER')
  },
  async updateProfile ({ commit, state }, userParams) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
    const res = await axios.patch('/api/v1/me/account', userParams)
    commit('SET_CURRENT_USER', {
      ...res.data,
      ...{ token: state.currentUser.token }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}