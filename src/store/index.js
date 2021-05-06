import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      pokemons: [],
      currentPokemon: null
    };
  },
  getters: {
    pokemons(state) {
      return state.pokemons;
    },
    currentPokemon(state) {
      return state.currentPokemon;
    }
  },
  actions: {
    async fetchPokemons(context) {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=200'
      );

      if (!response.ok) {
        let message = 'Failed to fetch! ';
        if (responseData.error.message) {
          message += responseData.error.message;
        } else message += responseData.message;

        const err = new Error(message);
        throw err;
      }

      const responseData = await response.json();

      const pokemons = [];

      responseData.results.forEach((p, i) => {
        const id = i + 1;
        pokemons.push({
          id,
          name: p.name,
          sprites: {
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
        });
      });

      context.commit('setPokemons', pokemons);
    },
    async getPokemon(context, payload) {
      context.commit('pokemonDetail', null);

      let response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/' + payload.id
      );

      if (!response.ok) {
        let message = 'Cannot get Pokemon';
        if (response.status === 404) {
          message = 'Pokemon Not Found';
        }
        const err = new Error(message);
        throw err;
      }

      const pokemon = await response.json();

      response = await fetch(pokemon.species.url);

      if (!response.ok) {
        let message = 'Cannot get Specie';
        const err = new Error(message);
        throw err;
      }

      const specie = await response.json();

      response = await fetch(specie.evolution_chain.url);

      if (!response.ok) {
        let message = 'Cannot get Evolution Chain';
        const err = new Error(message);
        throw err;
      }

      const rootChain = await response.json();

      const populateEvolutions = chain => {
        let evolutions = [];
        if (chain.evolves_to && chain.evolves_to.length > 0)
          evolutions = populateEvolutions(chain.evolves_to[0]);

        const id = chain.species.url
          .split('pokemon-species/')[1]
          .replace('/', '');

        evolutions.push({
          id,
          name: chain.species.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

        return evolutions;
      };

      pokemon.evolutions = populateEvolutions(rootChain.chain).reverse();

      context.commit('pokemonDetail', pokemon);
    }
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    pokemonDetail(state, payload) {
      state.currentPokemon = payload;
    }
  }
});

export default store;
