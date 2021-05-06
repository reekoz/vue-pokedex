<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.normal {
  background-color: #3d008d;
  color: white;
}

.fighting {
  background-color: #71008d;
  color: white;
}

.flying {
  background-color: #4f9494;
  color: white;
}
.poison {
  background-color: #7b9605;
  color: white;
}

.ground {
  background-color: #794707;
  color: white;
}

.rock {
  background-color: #797979;
  color: white;
}
.bug {
  background-color: #03460e;
  color: white;
}

.ghost {
  background-color: #575757;
  color: white;
}

.steel {
  background-color: #7a7a7a;
  color: white;
}
.fire {
  background-color: #b92020;
  color: white;
}

.water {
  background-color: #138a70;
  color: white;
}

.grass {
  background-color: #16a529;
  color: white;
}
.electric {
  background-color: #cabf29;
  color: white;
}

.psychic {
  background-color: #693277;
  color: white;
}

.ice {
  background-color: #418ba1;
  color: white;
}
.dragon {
  background-color: #810e27;
  color: white;
}

.dark {
  background-color: #303030;
  color: white;
}

.fairy {
  background-color: #993a85;
  color: white;
}
.unknown {
  background-color: #3d008d;
  color: white;
}

.shadow {
  background-color: #3f3f3f;
  color: white;
}
</style>
