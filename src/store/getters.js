export default {
  pokemons(state) {
    return state.pokemons;
  },
  currentPokemon(state) {
    return state.currentPokemon;
  },
  pokemonTypes(state) {
    return state.pokemonTypes;
  },
  filteredPokemons(state) {
    return state.filteredPokemons;
  },
  showDialogUpdateFound(state) {
    return state.showDialogUpdateFound;
  },
  showDialogUpdateReady(state) {
    return state.showDialogUpdateReady;
  }
};
