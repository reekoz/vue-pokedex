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
  background-color: #363b81;
  color: white;
}

.fighting {
  background-color: #71008d;
  color: white;
}

.flying {
  background-color: #ade9da;
  color: black;
}

.poison {
  background-color: #bbbe06;
  color: black;
}

.ground {
  background-color: #794707;
  color: white;
}

.rock {
  background-color: #c4c4c4;
  color: black;
}
.bug {
  background-color: #5fd132;
  color: black;
}

.ghost {
  background-color: #d6d6d6;
  color: black;
}

.steel {
  background-color: #7a7a7a;
  color: white;
}

.fire {
  background-color: #e23a3a;
  color: white;
}

.water {
  background-color: #35b89b;
  color: black;
}

.grass {
  background-color: #07911a;
  color: white;
}

.electric {
  background-color: #f8ec3c;
  color: black;
}

.psychic {
  background-color: #693277;
  color: white;
}

.ice {
  background-color: #7ecde6;
  color: black;
}

.dragon {
  background-color: #691225;
  color: white;
}

.dark {
  background-color: #303030;
  color: white;
}

.fairy {
  background-color: #df74d0;
  color: black;
}

.unknown {
  background-color: #797979;
  color: white;
}

.shadow {
  background-color: #313131;
  color: white;
}
</style>
