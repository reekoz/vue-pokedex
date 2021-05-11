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
      selectedType: [],
      pokemonColors: [
        'black',
        'blue',
        'brown',
        'gray',
        'green',
        'pink',
        'purple',
        'red',
        'white',
        'yellow'
      ]
    };
  },
  getters,
  actions,
  mutations
});

export default store;
