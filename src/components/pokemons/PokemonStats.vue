<template>
  <section class="stats">
    <base-card>
      <h5>
        ❤️ {{ stats[0].stat.name }}
        <span class="stat">{{ stats[0].base_stat }}</span>
      </h5>
      <h5>
        ⚔️ {{ stats[1].stat.name }}
        <span class="stat">{{ stats[1].base_stat }}</span>
      </h5>
      <h5>
        🛡️ {{ stats[2].stat.name }}
        <span class="stat">{{ stats[2].base_stat }}</span>
      </h5>
      <h5>
        🔮 {{ stats[3].stat.name }}
        <span class="stat">{{ stats[3].base_stat }}</span>
      </h5>
      <h5>
        🔰 {{ stats[4].stat.name }}
        <span class="stat">{{ stats[4].base_stat }}</span>
      </h5>
      <h5>
        ⚡️ {{ stats[5].stat.name }}
        <span class="stat">{{ stats[5].base_stat }}</span>
      </h5>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['stats'],
  setup() {}
};
</script>

<style scoped>
span,
h5 {
  text-transform: uppercase;
}

.stat {
  font-size: 1.15rem;
  float: right;
  margin-left: 1rem;
}
</style>
