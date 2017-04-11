/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  actions: {
    INCREMENT({ commit }) {
      commit('INCREMENT');
    },
  },
  mutations: {
    INCREMENT(state) {
      state.counter += 1;
    },
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
  },
  strict: true,
});

export default store;
