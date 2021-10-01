import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userAddress: "",
  },
  mutations: {
    setAddress: (state, address) => {
      state.userAddress = address;
    },
  },
  actions: {},
  modules: {},
});
