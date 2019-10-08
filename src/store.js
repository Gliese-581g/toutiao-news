import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // activeName: "all_news",
    keepAliveComponents: []
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
    // changeTab(state, name) {
    //   state.activeName = name;
    // }
  },
  actions: {}
});
