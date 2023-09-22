<script>
import "../components/style.css/PersonagemDetails.css";
import axios from 'axios';

export default {
  data() {
    return {
      personagem: null
    };
  },
  created() {
    const personagemId = this.$route.params.id;
    const apiUrl = `https://swapi.dev/api/people/${personagemId}/`;

    axios.get(apiUrl)
      .then(response => {
        this.personagem = response.data;
        this.fetchFilmes();
      })
      .catch(error => {
        console.error('Erro ao buscar informações do personagem:', error);
      });
  },
  methods: {
    async fetchFilmes() {
      try {
        const filmesPromises = this.personagem.films.map(url => axios.get(url));
        const filmesResponses = await Promise.all(filmesPromises);
        this.personagem.filmsData = filmesResponses.map(response => response.data);
      } catch (error) {
        console.error('Erro ao buscar informações dos filmes:', error);
      }
    }
  }
};
</script>

<template>
  <div class="backgroud-details-personagem">
    <div class="div-details">
      <h1 class="details-personagem">Detalhes do Personagem:</h1>
      <div v-if="personagem">
        <h2 class="name-personagem">{{ personagem.name }}</h2>
        <p class="p-details-personagens">Altura: {{ personagem.height }} cm</p>
        <p class="p-details-personagens">Peso: {{ personagem.mass }} kg</p>
        <p class="p-details-personagens">Aniversário: {{ personagem.birth_year }}</p>
        <p class="p-details-personagens">Cor do cabelo: {{ personagem.hair_color }}</p>
        <p class="p-details-personagens">Cor dos olhos: {{ personagem.eye_color }}</p>
        <p class="p-details-personagens">Gênero: {{ personagem.gender }}</p>
        <h3 class="details-personagem">Filmes em que participou:</h3>
        <ul>
          <li class="p-details-personagens" v-for="film in personagem.filmsData" :key="film.url">
            {{ film.title }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Carregando...</p>
      </div>
      <div class="router-div ">
        <router-link class="btn-6" to="/person">
          <a>Voltar</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
  