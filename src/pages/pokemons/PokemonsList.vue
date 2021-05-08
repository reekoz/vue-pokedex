<template>
  <base-dialog
    title="Update Found"
    :show="showDialogUpdateFound"
    @close="onCloseDialogUpdateFound"
  >
    <p>A new version is available, downloading and installing right now...</p>
  </base-dialog>
  <base-dialog
    title="Update Ready"
    :show="showDialogUpdateReady"
    @close="onCloseDialogUpdateReady"
  >
    <p>The new version is ready! Close to refresh the page</p>
  </base-dialog>
  <div class="actions">
    <base-button mode="flat" @click="performSort('asc')"
      >Sort Ascending</base-button
    >
    <base-button mode="flat" @click="performSort('desc')"
      >Sort Descending</base-button
    >
    <base-search @search="updateSearch" :search-term="query"></base-search>
  </div>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <section>
    <vue-multiselect
      v-model="selectedTypes"
      :options="pokemonTypes"
      @change="onTypeChange"
      :placeholder="'Select type...'"
    />
  </section>
  <section class="pokemon-list">
    <base-card v-for="p in finalPokemons" :key="p.id">
      <div class="pokemon-info">
        <img :src="p.sprites.front_default" />
        <h4>{{ p.name }}</h4>
      </div>
      <div class="actions">
        <base-button link :to="detailLink(p.id)">View Details</base-button>
      </div>
    </base-card>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const pokemons = computed(() => store.getters.filteredPokemons);
    const sort = ref(null);
    const query = ref('');
    const selectedTypes = reactive([]);
    const showDialogUpdateFound = computed(() => store.getters.showDialogUpdateFound);
    const showDialogUpdateReady = computed(() => store.getters.showDialogUpdateReady);

    const pokemonTypes = computed(() => store.getters.pokemonTypes);

    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      try {
        await store.dispatch('fetchPokemons');
      } catch (error) {
        error.value = error.value.message || 'Something went wrong!';
      }

      try {
        await store.dispatch('fetchPokemonTypes');
      } catch (error) {
        error.value = error.value.message || 'Something went wrong!';
      }
      isLoading.value = false;
    });

    const filterPokemons = computed(() => {
      let filteredItems = [];
      if (query.value) {
        filteredItems = pokemons.value.filter(item =>
          item.name.toUpperCase().includes(query.value.toUpperCase())
        );
      } else if (pokemons.value) {
        filteredItems = pokemons.value;
      }
      return filteredItems;
    });

    const finalPokemons = computed(() => {
      if (!sort.value) {
        return filterPokemons.value;
      }
      return filterPokemons.value.slice().sort((p1, p2) => {
        if (sort.value === 'asc' && p1.name > p2.name) {
          return 1;
        } else if (sort.value === 'asc') {
          return -1;
        } else if (sort.value === 'desc' && p1.name > p2.name) {
          return -1;
        } else {
          return 1;
        }
      });
    });

    const performSort = mode => (sort.value = mode);

    const updateSearch = val => {
      query.value = val;
    };

    const detailLink = id => route.path + '/' + id;

    const onTypeChange = async type => {
      if (!type) {
        store.dispatch('resetFilteredPokemon');
        return;
      }

      isLoading.value = true;
      try {
        await store.dispatch('filterPokemonByType', {
          type: type.toLowerCase()
        });
      } catch (error) {
        error.value = error.value.message || 'Something went wrong!';
      }
      isLoading.value = false;
    };

    const onCloseDialogUpdateFound = () => {
      store.dispatch('toggleDialogUpdateFound', {
        show: false
      });
    };

    const onCloseDialogUpdateReady = () => {
      store.dispatch('toggleDialogUpdateReady', {
        show: false
      });
      document.location.reload();
    };

    return {
      finalPokemons,
      performSort,
      query,
      updateSearch,
      detailLink,
      isLoading,
      pokemonTypes,
      selectedTypes,
      onTypeChange,
      showDialogUpdateFound,
      showDialogUpdateReady,
      onCloseDialogUpdateFound,
      onCloseDialogUpdateReady,
    };
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
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

h4 {
  text-transform: uppercase;
  font-size: 1.4rem;
}

h4,
h5 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: center;
}

.multiselect {
  margin: 0 25rem;
}
</style>
