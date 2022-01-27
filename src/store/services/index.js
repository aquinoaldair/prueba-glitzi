import axios from 'axios'

export default {
  namespaced: true,
  state: {
    professions: [],
    areas: [],
  },
  getters: {
    professions: state => state.professions,
    areas: state => state.areas,
  },
  mutations: {
    SET_PROFESSIONS(state, professions) {
      state.professions = professions
    },
    SET_AREAS(state, areas) {
      state.areas = areas
    },
  },
  actions: {
    GET_PROFESSIONS(state) {
      axios.get('../../static/professions.json').then(response => {
        state.commit('SET_PROFESSIONS', response.data)
      })
    },
    GET_AREAS(state) {
      axios.get('../../static/areas.json').then(response => {
        state.commit('SET_AREAS', response.data)
      })
    },
  },
}
