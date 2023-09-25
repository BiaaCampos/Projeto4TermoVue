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

        
      //this.$route.params.id <-- usar isso para busca dinamica
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
  <div class="background-star-wars">
    <div class="main-list">
      <Loader v-if="!loading" />
      <div v-else>
        <div class="title-search">
          <p class="p-search-personagens">Personagens</p>
        </div>
        <div class="search-container">
          <input class="input-search-personagens" v-model="searchTerm" @input="searchPersonas" placeholder="Pesquisar personagens">
        </div>
        <article v-for="(persona, index) in personas" :key="index">
          <p class="name-persona"><strong>{{ persona.name }}</strong></p>
          <p class="descricao">Para saber mais sobre esse personagem, clique no botão abaixo:</p>
          <div class="router-div">
            <a><router-link class="btn-5" :to="`/people/${persona.url.match(/\d+/g)}`">Acessar</router-link></a>
          </div>
        </article>
        <div class="actions">
          <button :disabled="personaInfo.previous === null" @click="prevPage">Anterior</button>
          <button :disabled="personaInfo.next === null" @click="nextPage">Próximo</button>
        </div>
      </div>
    </div>
  </div>
</template>
