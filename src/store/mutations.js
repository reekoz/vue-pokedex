export default {
  setPokemons(state, payload) {
    state.pokemons = payload;
  },
  pokemonDetail(state, payload) {
    state.currentPokemon = payload;
  },
  setPokemonTypes(state, payload) {
    state.pokemonTypes = payload;
  },
  setFilteredPokemons(state, payload) {
    state.filteredPokemons = payload;
  },
  setDialogUpdateFoundState(state, payload) {
    state.showDialogUpdateFound = payload;
  },
  setDialogUpdateReadyState(state, payload) {
    state.showDialogUpdateReady = payload;
  },
};
