import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    isForm: false,
  },
  mutations: {
    TOGGLE_SETTINGS(state) {
      state.isOpen = !state.isOpen;
    },
    TOGGLE_ADD_STREAM(state) {
      state.isForm = !state.isForm;
    },
  },
  actions: {},
  modules: {},
});
