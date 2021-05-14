export const UserModule = {
  namespaced: true,

  state: {
    user: null,
  },

  // Mutations are functions that effect the STATE. (directly changes the state)
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },

  // Actions are functions that you call throughout the application that call mutations.
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
