<template>
  <div class="movies">
    <div class="movie-detail">
      <img src="../assets/movie1.jpg" alt="Movie" />
      <p>INANG</p>
    </div>
    <div class="movie-detail">
      <img src="../assets/movie2.jpg" alt="Movie" />
      <p>KALIAN PANTAS MATI</p>
    </div>
    <div class="movie-detail">
      <img src="../assets/movie3.jpg" alt="Movie" />
      <p>HALLOWEEN ENDS</p>
    </div>
    <div class="movie-detail">
      <img src="../assets/movie4.jpg" alt="Movie" />
      <p>PAMALI</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieVue",
  props: {
    msg: String,
  },
};
</script>
