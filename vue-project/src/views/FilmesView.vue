<script>
import '../components/style.css/About.css';

export default {
  data() {
    return {
      films: [], // Resultados da pesquisa
      filmInfo: {},
      page: 1,
      loading: false,
      searchTerm: "", // Termo de pesquisa
    };
  },
  mounted() {
    this.loadFilms(1);
  },
  methods: {
    async loadFilms(page) {
      // Carregamento inicial dos filmes
      try {
        let response = await fetch(`https://swapi.dev/api/films/?page=${page}`);
        let data = await response.json();
        this.page = page;
        this.filmInfo = data;
        this.films = data.results;
        setTimeout(() => {
          this.loading = true;
        }, 1000);
      } catch (error) {
        console.error("Error loading films:", error);
      }
    },
    prevPage() {
      this.loadFilms(this.page - 1);
    },
    nextPage() {
      this.loadFilms(this.page + 1);
    },
    async searchFilms() {
      // Pesquisa de filmes
      try {
        let response = await fetch(`https://swapi.dev/api/films/?search=${this.searchTerm}`);
        let data = await response.json();
        this.filmInfo = data;
        this.films = data.results;
      } catch (error) {
        console.error("Error searching films:", error);
      }
    },
  },
};
</script>

<template>
  <div class="main-list">
    <Loader v-if="!loading" />
    <div v-else>
      <div class="search-container">
        <input v-model="searchTerm" @input="searchFilms" placeholder="Pesquisar filmes">
      </div>
      <article v-for="(film, index) in films" :key="index">
        <strong>{{ film.title }}</strong>
        <p>
          <strong>Episódio: </strong>
          {{ film.episode_id }}
        </p>
        <p>
          <strong>Dirigido por: </strong>
          {{ film.director }}
        </p>
        <router-link :to="`/films/${film.url.substring(27, 29)}`">Acessar</router-link>
      </article>
      <div class="actions">
        <button :disabled="filmInfo.previous === null" @click="prevPage">Anterior</button>
        <button :disabled="filmInfo.next === null" @click="nextPage">Próximo</button>
      </div>
    </div>
  </div>
</template>
