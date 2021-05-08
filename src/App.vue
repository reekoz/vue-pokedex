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
}

body {
  margin: 0;
}

.multiselect-option.is-selected {
  background: #3d008d;
}

.multiselect-option.is-selected.is-pointed {
  background: #5300be;
}
</style>
