<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div class="detail" v-if="p">
    <section class="pokemon">
      <base-card>
        <header>
          <h2>{{ p.name }}</h2>
          <img
            :src="'/img/pokemons/' + p.id + '.png'"
            width="96"
            height="96"
          />
        </header>
        <br />
        <section>
          <base-badge
            v-for="rootType in p.types"
            :key="rootType.type.name"
            :type="rootType.type.name"
            :title="rootType.type.name"
            class="clickable"
            @click="setPokemonType(rootType.type.name)"
          ></base-badge>
        </section>
      </base-card>
      <pokemon-stats :stats="p.stats"></pokemon-stats>
    </section>
    <pokemon-evolution :pokemon="p"></pokemon-evolution>
  </div>
  <section v-if="error">
    <base-card>
      <h1>😔 {{ error }}</h1>
    </base-card>
  </section>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import PokemonEvolution from '../../components/pokemons/PokemonEvolution.vue';
import PokemonStats from '../../components/pokemons/PokemonStats.vue';
import { useRouter } from 'vue-router';

export default {
  components: { PokemonEvolution, PokemonStats },
  props: ['id'],
  setup(props) {
    const store = useStore();
    const error = ref(null);
    const isLoading = ref(false);
    const router = useRouter();

    const getPokemon = async id => {
      isLoading.value = true;
      try {
        await store.dispatch('getPokemon', { id: id || props.id });
      } catch (err) {
        error.value = err.message || err;
      }
      isLoading.value = false;
    };

    onMounted(getPokemon);

    const pokemon = computed(() => store.getters.currentPokemon);

    const setPokemonType = async type => {
      store.dispatch('setSelectedType', { type: type.toUpperCase() });
      router.replace('/pokemons');
      try {
        await store.dispatch('filterPokemonByType', {
          type: type
        });
      } catch (error) {
        error.value = error.value.message || 'Something went wrong!';
      }
    };

    return { error, p: pokemon, isLoading, setPokemonType };
  }
};
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section {
  display: flex;
  justify-content: center;
}

h2 {
  text-transform: uppercase;
}

.clickable:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
