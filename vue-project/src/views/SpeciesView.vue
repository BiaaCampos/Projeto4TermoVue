<script>
import '../components/style.css/About.css';

export default {
  data() {
    return {
      species: [], // Resultados da pesquisa
      speciesInfo: {},
      page: 1,
      loading: false,
      searchTerm: "", // Termo de pesquisa
    };
  },
  mounted() {
    this.loadSpecies(1);
  },
  methods: {
    async loadSpecies(page) {
      // Carregamento inicial das espécies
      try {
        let response = await fetch(`https://swapi.dev/api/species/?page=${page}`);
        let data = await response.json();
        this.page = page;
        this.speciesInfo = data;
        this.species = data.results;
        setTimeout(() => {
          this.loading = true;
        }, 1000);
      } catch (error) {
        console.error("Error loading species:", error);
      }
    },
    prevPage() {
      this.loadSpecies(this.page - 1);
    },
    nextPage() {
      this.loadSpecies(this.page + 1);
    },
    async searchSpecies() {
      // Pesquisa de espécies
      try {
        let response = await fetch(`https://swapi.dev/api/species/?search=${this.searchTerm}`);
        let data = await response.json();
        this.speciesInfo = data;
        this.species = data.results;
      } catch (error) {
        console.error("Error searching species:", error);
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
        <input v-model="searchTerm" @input="searchSpecies" placeholder="Pesquisar espécies">
      </div>
      <article v-for="(specie, index) in species" :key="index">
        <strong>{{ specie.name }}</strong>
        <p>
          <strong>Classificação: </strong>
          {{ specie.classification }}
        </p>
        <p>
          <strong>Designação: </strong>
          {{ specie.designation }}
        </p>
        <router-link :to="`/species/${specie.url.substring(29, 31)}`">Acessar</router-link>
      </article>
      <div class="actions">
        <button :disabled="speciesInfo.previous === null" @click="prevPage">Anterior</button>
        <button :disabled="speciesInfo.next === null" @click="nextPage">Próximo</button>
      </div>
    </div>
  </div>
</template>
