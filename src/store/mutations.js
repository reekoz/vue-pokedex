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
  setDialogState(state, payload) {
    state.showDialog = payload;
  }
};
