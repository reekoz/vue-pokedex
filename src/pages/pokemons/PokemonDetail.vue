<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div class="detail" v-if="p">
    <section class="pokemon">
      <base-card>
        <header>
          <h2>{{ p.name }}</h2>
          <img :src="p.sprites.front_default" />
        </header>
        <section>
          <base-badge
            v-for="rootType in p.types"
            :key="rootType.type.name"
            :type="rootType.type.name"
            :title="rootType.type.name"
          ></base-badge>
        </section>
      </base-card>
    </section>
    <section class="pokemon-list">
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
        <div class="actions"></div>
      </base-card>
    </section>
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
import { useRouter, useRoute } from 'vue-router';

export default {
  props: ['id'],
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const error = ref(null);
    const isLoading = ref(false);

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

    const changePokemon = async id => {
      const path = route.path.replace(props.id, id);
      router.replace(path);
      await getPokemon(id);
    };

    const evoSelected = id => {
      return { evoSelected: props.id === id };
    };

    return { error, p: pokemon, isLoading, changePokemon, evoSelected };
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

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

.pokemon-list > .card {
  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p {
  margin: 0px;
  text-align: center;
}

.evoSelected {
  border-width: 3px;
  border-color: #3d008d;
  border-style: solid;
}
</style>
