import axios from 'axios'

const state = {
  skillTypes: null
}

const getters = {
  skillTypes (state) {
    return state.skillTypes
  }
}

const mutations = {
  SET_SKILL_TYPES: (state, data) => {
    state.skillTypes = data.skill_types
  }
}

const actions = {
  async fetchSkillTypes ({ commit }) {
    // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOIN
    const res = await axios.get('http://localhost:3000/api/skill_types/1')
    commit('SET_SKILL_TYPES', res.data)
  },
  async updateSkill ({ commit }, { skillId, skillParams }) {
    // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
    const res = await axios.patch(`http://localhost:3000/api/skills/${skillId}`, skillParams)
    commit('SET_SKILL_TYPES', res.data)
  },
  async deleteSkill ({ commit }, skillId) {
    // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
    const res = await axios.delete(`http://localhost:3000/api/skills/${skillId}`)
    commit('SET_SKILL_TYPES', res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
