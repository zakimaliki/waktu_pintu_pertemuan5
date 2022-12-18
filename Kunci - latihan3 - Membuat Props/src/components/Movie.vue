<template>
    <div class="movie-detail">
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
};
</script>
