<template>
  <div>
    <div class="pokemon-container">
      <img
        class="hidden-pokemon"
        v-if="!showPokemon"
        :src="this.imgSrc"
        alt=""
      />
      <img class="fade-in" v-else :src="this.imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>
<style scoped>
.hidden-pokemon {
  filter: brightness(0) invert(0.5);
}
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
