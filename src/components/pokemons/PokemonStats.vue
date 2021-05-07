<template>
  <section class="stats">
    <base-card>
      <h3>❤️ {{ stats[0].base_stat }}</h3>
      <h3>🛡️ {{ stats[1].base_stat }}</h3>
      <h3>👊 {{ stats[2].base_stat }}</h3>
      <h3>🔮 {{ stats[3].base_stat }}</h3>
      <h3>🔰 {{ stats[4].base_stat }}</h3>
      <h3>⚡️ {{ stats[5].base_stat }}</h3>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['stats'],
  setup() {}
};
</script>

<style scoped></style>
