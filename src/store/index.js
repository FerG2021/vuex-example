import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      invitados: 0,
      socios: 0,
    };
  },
  mutations: {
    // INVITADOS
    increment(state) {
      state.invitados++;
    },
    incrementMore(state, payload) {
      state.invitados = state.invitados + payload;
    },
    decrement(state) {
      state.invitados--;
    },
    decrementMore(state, payload) {
      state.invitados = state.invitados - payload;
    },
    reset(state) {
      state.invitados = 0;
    },

    // SOCIOS
    incrementSocios(state) {
      state.socios++;
    },
    decrementSocios(state) {
      state.socios--;
    },
    resetSocios(state) {
      state.socios = 0;
    },

    incrementMoreSocios(state, payload) {
      state.socios = state.socios + payload;
    },

    decrementMoreSocios(state, payload) {
      state.socios = state.socios - payload;
    },
  },
  actions: {
    // INVITADOS
    incrementAction({ commit }, number) {
      commit("incrementMore", number);
    },
    decrementAction({ commit }, number) {
      commit("decrementMore", number);
    },

    // SOCIOS
    incrementActionSocios({ commit }, number) {
      commit("incrementMoreSocios", number);
    },

    decrementActionSocios({ commit }, number) {
      commit("decrementMoreSocios", number);
    },
  },
});
