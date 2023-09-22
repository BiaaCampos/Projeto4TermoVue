<script>
import "../components/style.css/About.css"
import axios from 'axios';

export default {
  data() {
    return {
      planet: [], // Resultados da pesquisa de planetas
      planetInfo: {},
      page: 1,
      loading: false,
      searchTerm: "", // Termo de pesquisa
    };
  },
  mounted() {
    this.loadPlanets(1);
  },
  methods: {
    async loadPlanets(page) {
      try {
        let response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
        let data = await response.json();
        this.page = page;
        this.planetInfo = data;
        this.planets = data.results;
        setTimeout(() => {
          this.loading = true;
        }, 1000);
      } catch (error) {
        console.error("Error loading planets:", error);
      }
    },
    prevPage() {
      this.loadPlanets(this.page - 1);
    },
    nextPage() {
      this.loadPlanets(this.page + 1);
    },
    async searchPlanets() {
      // Pesquisa de planetas
      try {
        let response = await fetch(`https://swapi.dev/api/planets/?search=${this.searchTerm}`);
        let data = await response.json();
        this.planetInfo = data;
        this.planets = data.results;
      } catch (error) {
        console.error("Error searching planets:", error);
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
          <p class="p-search-personagens">Planetas</p>
        </div>
        <div class="search-container">
          <input class="input-search-personagens" v-model="searchTerm" @input="searchPlanets"
            placeholder="Pesquisar planetas">
        </div>
        <article v-for="(planet, index) in planets" :key="index">
          <p class="name-persona"><strong>{{ planet.name }}</strong></p>
          <p class="descricao">Para saber mais sobre esse planeta, clique no botão abaixo:</p>
          <div class="router-div">
            <a><router-link class="btn-5" :to="`/planet/${planet.url.match(/\d+/g)}`">Acessar</router-link></a>
          </div>
        </article>
        <div class="actions">
          <button :disabled="planetInfo.previous === null" @click="prevPage">Anterior</button>
          <button :disabled="planetInfo.next === null" @click="nextPage">Próximo</button>
        </div>
      </div>
    </div>
  </div>
</template>
