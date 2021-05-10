import { createStore } from 'vuex';

import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
  state() {
    return {
      pokemons: [],
      currentPokemon: null,
      pokemonTypes: [],
      filteredPokemons: [],
      showDialogUpdateFound: false,
      showDialogUpdateReady: false,
      selectedType: []
    };
  },
  getters,
  actions,
  mutations
});

export default store;
