<template>
  <section class="evolution-chain">
    <base-card
      v-for="evo in p.evolutions"
      :key="evo.name"
      :class="evoSelected(evo.id)"
      class="clickable"
    >
      <div class="pokemon-info" @click="changePokemon(evo.id)">
        <img :src="evo.image" />
        <h4>{{ evo.name }}</h4>
      </div>
    </base-card>
  </section>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  props: ['pokemon'],
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const isLoading = ref(false);
    const error = ref(null);

    const getPokemon = async id => {
      isLoading.value = true;
      try {
        await store.dispatch('getPokemon', { id: id || props.pokemon.id });
      } catch (err) {
        error.value = err.message || err;
      }
      isLoading.value = false;
    };

    const changePokemon = async id => {
      const path = route.path.replace(props.pokemon.id, id);
      router.replace(path);
      await getPokemon(id);
    };

    const evoSelected = id => {
      return { evoSelected: +props.pokemon.id === +id };
    };

    return { error, p: props.pokemon, isLoading, changePokemon, evoSelected };
  }
};
</script>

<style scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pokemon-list > .card {
  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.evoSelected {
  border-width: 3px;
  border-color: #363b81;
  border-style: solid;
}

.pokemon-info {
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.clickable:hover {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: center;
}

p {
  margin: 0px;
  text-align: center;
}
</style>
