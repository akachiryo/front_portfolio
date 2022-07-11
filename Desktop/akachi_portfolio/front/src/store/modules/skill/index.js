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
  async fetchSkillTypes ({ commit }, userId) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
    const res = await axios.get(`/api/skill_types/${userId}`)
    commit('SET_SKILL_TYPES', res.data)
  },
  async createSkill ({ commit }, skillParams) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
    const res = await axios.post('/api/skills', skillParams)
    commit('SET_SKILL_TYPES', res.data)
  },
  async updateSkill ({ commit }, { skillId, skillParams }) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
    const res = await axios.patch(`/api/skills/${skillId}`, skillParams)
    commit('SET_SKILL_TYPES', res.data)
  },
  async deleteSkill ({ commit }, skillId) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
    const res = await axios.delete(`/api/skills/${skillId}`)
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
