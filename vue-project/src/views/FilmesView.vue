<script>
import "../components/style.css/About.css"

export default {
  data() {
    return {
      films: [], // Resultados da pesquisa de filmes
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
  <div class="background-star-wars">
    <div class="main-list">
      <Loader v-if="!loading" />
      <div v-else>
        <div class="title-search">
          <p class="p-search-personagens">Filmes</p>
        </div>
        <div class="search-container">
          <input class="input-search-personagens" v-model="searchTerm" @input="searchFilms" placeholder="Pesquisar filmes">
        </div>
        <article v-for="(film, index) in films" :key="index">
          <p class="name-persona"><strong>{{ film.title }}</strong></p>
          <p class="film-director">Diretor: {{ film.director }}</p>
          <p class="film-producer">Produtor: {{ film.producer }}</p>
          <p class="descricao">Para saber mais sobre esse personagem, clique no botão abaixo:</p>
          <div class="router-div">
            <a><router-link class="btn-5" :to="`/films/${film.url.match(/\d+/g)}`">Detalhes</router-link></a>
          </div>
        </article>
        <div class="actions">
          <button :disabled="filmInfo.previous === null" @click="prevPage">Anterior</button>
          <button :disabled="filmInfo.next === null" @click="nextPage">Próximo</button>
        </div>
      </div>
    </div>
  </div>
</template>
