import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isStream: false,
  },
  mutations: {
    TOGGLE_ADD_STREAM(state) {
      state.isStream = !state.isStream;
    },
  },
  actions: {},
  modules: {},
});
