  <script>
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
    <div>
      <h1>Detalhes do Personagem</h1>
      <div v-if="personagem">
        <h2>{{ personagem.name }}</h2>
        <p>Altura: {{ personagem.height }} cm</p>
        <p>Peso: {{ personagem.mass }} kg</p>
        <p>Aniversário: {{ personagem.birth_year }}</p>
        <h3>Filmes em que participou:</h3>
        <ul>
          <li v-for="film in personagem.filmsData" :key="film.url">
            {{ film.title }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Carregando...</p>
      </div>
    </div>
  </template>
  