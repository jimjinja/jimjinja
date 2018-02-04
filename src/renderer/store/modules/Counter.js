const limit = 5;

const state = {
  count: 0,
  history: [],
};

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.count -= 1;
    state.history.push('DECREMENT_MAIN_COUNTER');
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.count += 1;
    state.history.push('INCREMENT_MAIN_COUNTER');
  },
};

const actions = {
  increment: ({ commit }) => commit('INCREMENT_MAIN_COUNTER'),
  decrement: ({ commit }) => commit('DECREMENT_MAIN_COUNTER'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('INCREMENT_MAIN_COUNTER');
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('INCREMENT_MAIN_COUNTER');
        resolve();
      }, 1000);
    });
  },
};

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
  recentHistory(state) {
    const end = state.history.length;
    const begin = end - limit < 0 ? 0 : end - limit;
    return state.history
      .slice(begin, end)
      .toString()
      .replace(/,/g, ', ');
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
