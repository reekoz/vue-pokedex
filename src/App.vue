<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Play', sans-serif;
  font-display: swap;
}

body {
  margin: 0;
}

.multiselect-option.is-selected {
  background: #363b81;
}

.multiselect-option.is-selected.is-pointed {
  background: #4e56be;
}
</style>
