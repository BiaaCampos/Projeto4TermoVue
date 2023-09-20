<script>
import '../components/style.css/About.css';

export default {
  data() {
    return {
      personas: [], // Resultados da pesquisa
      personaInfo: {},
      page: 1,
      loading: false,
      searchTerm: "", // Termo de pesquisa
    };
  },
  mounted() {
    this.loadPersonas(1);
  },
  methods: {
    async loadPersonas(page) {
      // Carregamento inicial dos personagens
      try {
        let response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        let data = await response.json();
        this.page = page;
        this.personaInfo = data;
        this.personas = data.results;
        setTimeout(() => {
          this.loading = true;
        }, 1000);
      } catch (error) {
        console.error("Error loading personas:", error);
      }
    },
    prevPage() {
      this.loadPersonas(this.page - 1);
    },
    nextPage() {
      this.loadPersonas(this.page + 1);
    },
    async searchPersonas() {
      // Pesquisa de personagens
      // if (this.searchTerm.trim() === "") {
      //   // Se o campo de pesquisa estiver vazio, carregue todos os personagens novamente
      //   this.loadPersonas(1);
      //   return;
      // }

      try {
        let response = await fetch(`https://swapi.dev/api/people/?search=${this.searchTerm}`);
        let data = await response.json();
        this.personaInfo = data;
        this.personas = data.results;
      } catch (error) {
        console.error("Error searching personas:", error);
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
        <input v-model="searchTerm" @input="searchPersonas" placeholder="Pesquisar personagens">
      </div>
      <article v-for="(persona, index) in personas" :key="index">
        <strong>{{ persona.name }}</strong>
        <p>
          <strong>planet: </strong>
          {{ persona.homeworld }}
        </p>
        <p>
          <strong>this: </strong>
          {{ persona.url }}
        </p>
        <router-link :to="`/people/${persona.url.substring(29, 31)}`">Acessar</router-link>
      </article>
      <div class="actions">
        <button :disabled="personaInfo.previous === null" @click="prevPage">Anterior</button>
        <button :disabled="personaInfo.next === null" @click="nextPage">Próximo</button>
      </div>
    </div>
  </div>
</template>
