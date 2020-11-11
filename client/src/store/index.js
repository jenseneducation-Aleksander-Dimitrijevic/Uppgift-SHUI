import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    channels: [],
    isLoading: false,
  },
  mutations: {
    TOGGLE_SETTINGS(state) {
      state.isOpen = !state.isOpen;
    },
    SET_SUBSCRIPTION(state, channel) {
      state.channels = channel;
    },
    SET_LOADING: (state) => (state.isLoading = !state.isLoading),
  },
  actions: {},
  modules: {},
});
