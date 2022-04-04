
import Vue from 'vue'
import Vuex from 'vuex'
import project from './project'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...project.state,
    ...user.state,
  },
  getters: {
    ...project.getters,
    ...user.getters,
  },
  mutations: {
    ...project.mutations,
    ...user.mutations,
  },
  actions: {
  },
  modules: {
  }
})
