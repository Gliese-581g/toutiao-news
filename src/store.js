import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeNamePre: '',
    activeName: '__all__',
    scrollTop: {
      pre: 0,
      curr: 0
    },
  },
  mutations: {
    keepAlive(state, component) {
      // 注：防止重复添加（当然也可以使用Set）
      !state.keepAliveComponents.includes(component) &&
        state.keepAliveComponents.push(component);
    },
    noKeepAlive(state, component) {
      const index = state.keepAliveComponents.indexOf(component);
      index !== -1 && state.keepAliveComponents.splice(index, 1);
    },
    // savePosition(state, position) {
    //   state.srcollTop = position;
    // },
    savePosition(state, curr) {
      state.scrollTop.curr = curr;
    },
    exchangePosition(state) {
      state.scrollTop.pre =  state.scrollTop.curr;
    },
    saveActiveNamePre(state, pre) {
        state.activeNamePre = pre;
    },
    saveActiveName(state, activeName) {
      state.activeName = activeName;
    }
  },
  actions: {}
});