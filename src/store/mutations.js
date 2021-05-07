export default {
  setPokemons(state, payload) {
    state.pokemons = payload;
  },
  pokemonDetail(state, payload) {
    state.currentPokemon = payload;
  }
};
