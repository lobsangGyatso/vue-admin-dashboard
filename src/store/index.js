import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: 'white',
    SidebarBg: '',
    currentJoke: ' this is a joke',
    allJokes: [' m one for all']
  },
  getters: {
    getCurrentJoke: state => state.currentJoke,
    getAllJoke: state => state.allJokes
  },
  mutations: {
    SET_SIDEBAR_DRAWER (state, payload) {
      state.Sidebar_drawer = payload
    },
    SET_CUSTOMIZER_DRAWER (state, payload) {
      state.Customizer_drawer = payload
    },
    SET_SIDEBAR_COLOR (state, payload) {
      state.SidebarColor = payload
    },
    Sidebar (state, payload) {
      state.Sidebar_drawer = payload
    },
    setCurrentjoke (state, payload) {
      state.currentJoke = payload
      state.allJokes.push(payload)
    }
  },
  actions: {
    changeSideBar: ({ commit }, payload) => {
      commit('sidebar', payload)
    },
    addjoke: ({ commit }, payload) => {
      commit('setCurrentjoke', payload)
    }
  }
})
