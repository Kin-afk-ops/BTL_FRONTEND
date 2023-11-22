import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    user: null,
    cart: null,
  },

  getters: {
    user: (state) => {
      return state.user;
    },

    cart: (state) => {
      return state.cart;
    },
  },

  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    cart(context, cart) {
      context.commit("cart", cart);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    cart(state, cart) {
      state.cart = cart;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
