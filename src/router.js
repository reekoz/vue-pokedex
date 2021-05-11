import { createRouter, createWebHistory } from 'vue-router';

import PokemonsList from './pages/pokemons/PokemonsList.vue';

const PokemonDetail = () => import('./pages/pokemons/PokemonDetail.vue');
const NotFound = () => import('./pages/NotFound.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/pokemons' },
    { path: '/pokemons', component: PokemonsList },
    {
      path: '/pokemons/:id',
      component: PokemonDetail,
      props: true
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
