  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        planet: null,
      };
    },
    created() {
      const planetId = this.$route.params.id;
      const apiUrl = `https://swapi.dev/api/planets/${planetId}/`;
  
      axios
        .get(apiUrl)
        .then((response) => {
          this.planet = response.data;
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do planeta:', error);
        });
    },
  };
  </script>

<template>
    <div>
      <h1>Detalhes do Planeta</h1>
      <div v-if="planet">
        <h2>{{ planet.name }}</h2>
        <p>Diâmetro: {{ planet.diameter }} km</p>
        <p>Clima: {{ planet.climate }}</p>
        <p>População: {{ planet.population }}</p>
      </div>
      <div v-else>
        <p>Carregando...</p>
      </div>
    </div>
  </template>
  