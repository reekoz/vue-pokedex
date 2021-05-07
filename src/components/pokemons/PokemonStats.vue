<template>
  <section class="stats">
    <base-card>
      <h5>
        ❤️ {{ stats[0].stat.name }}
        <span class="stat" :class="getStatColor(stats[0].base_stat)">{{
          stats[0].base_stat
        }}</span>
      </h5>
      <h5>
        ⚔️ {{ stats[1].stat.name }}
        <span class="stat" :class="getStatColor(stats[1].base_stat)">{{
          stats[1].base_stat
        }}</span>
      </h5>
      <h5>
        🛡️ {{ stats[2].stat.name }}
        <span class="stat" :class="getStatColor(stats[2].base_stat)">{{
          stats[2].base_stat
        }}</span>
      </h5>
      <h5>
        🔮 {{ stats[3].stat.name }}
        <span class="stat" :class="getStatColor(stats[3].base_stat)">{{
          stats[3].base_stat
        }}</span>
      </h5>
      <h5>
        🔰 {{ stats[4].stat.name }}
        <span class="stat" :class="getStatColor(stats[4].base_stat)">{{
          stats[4].base_stat
        }}</span>
      </h5>
      <h5>
        ⚡️ {{ stats[5].stat.name }}
        <span class="stat" :class="getStatColor(stats[5].base_stat)">{{
          stats[5].base_stat
        }}</span>
      </h5>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['stats'],
  setup() {
    const getStatColor = value => {
      if (value < 15) return 'pomegranate';
      if (value < 24) return 'cabaret';
      if (value < 42) return 'alzarin';
      if (value < 55) return 'orange';
      if (value < 73) return 'sunflower';
      if (value < 85) return 'emerald';
      if (value < 97) return 'turquoise';
      if (value < 110) return 'greensea';
      return 'peterriver';
    };

    return { getStatColor };
  }
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

.pomegranate {
  color: #c0392b;
}

.cabaret {
  color: #d2527f;
}

.alzarin {
  color: #e74c3c;
}

.orange {
  color: #ff851b;
}

.sunflower {
  color: #f1c40f;
}

.emerald {
  color: #2ecc71;
}

.turquoise {
  color: #1abc9c;
}

.greensea {
  color: #16a085;
}

.peterriver {
  color: #3498db;
}
</style>
