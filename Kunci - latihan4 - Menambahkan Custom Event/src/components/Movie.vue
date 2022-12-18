<template>
  <div class="movie-detail" @click="showDetail">
    <img :src="movieImage" alt="Movie" />
    <p>{{ movieTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "MovieVue",
  props: ["movie"],
  data() {
    return {
      movieTitle: this.movie.title,
      movieImage: require(`../assets/${this.movie.imageName}`),
    };
  },
  methods: {
    showDetail() {
      this.$emit("showDetailMovie", this.movie);
    },
  },
};
</script>

<style>
.movie-detail:hover {
  cursor: pointer;
}
</style>
