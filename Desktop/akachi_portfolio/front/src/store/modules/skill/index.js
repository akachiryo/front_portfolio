import axios from 'axios'

const state = {
  skillTypes: [
    {
      id: 1,
      name: 'インフラ',
      skills: [
        {
          id: 1,
          user_id: 1,
          name: 'ruby',
          level: 50
        },
        {
          id: 2,
          user_id: 1,
          name: 'rails',
          level: 80
        }
      ]
    },
    {
      id: 2,
      name: 'バックエンド',
      skills: []
    },
    {
      id: 3,
      name: 'フロントエンド',
      skills: []
    }
  ]
}

const getters = {
  skillTypes (state) {
    return state.skillTypes
  }
}

const mutations = {
  SET_SKILL_TYPES: (state, data) => {
    state.skillTypes = data
  }
}

const actions = {
  async fetchSkillTypes ({ commit }) {
    // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOIN
    const res = await axios.get('http://localhost:3000/api/skill_types/1')
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
