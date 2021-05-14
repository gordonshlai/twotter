import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},
  // Mutations are functions that effect the STATE. (directly changes the state)
  mutations: {},
  // Actions are functions that you call throughout the application that call mutations.
  actions: {},
  modules: {
    User: UserModule,
  },
});
