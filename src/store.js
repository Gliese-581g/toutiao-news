import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftText: ''
  },
  mutations: {
      changeLeftText(state) {
        state.leftText = '返回'
      }
  },
  actions: {

  }
})
