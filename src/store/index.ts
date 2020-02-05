import Vue from 'vue'
import Vuex from 'vuex'
import { Counter } from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      counter: Counter
  }
})
