<script>
import axios from 'axios';
import "../components/style.css/Films.css"

export default {
  data() {
    return {
      film: null,
    };
  },
  created() {
    const filmId = this.$route.params.id;
    const apiUrl = `https://swapi.dev/api/films/${filmId}/`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.film = response.data;
      })
      .catch((error) => {
        console.error('Erro ao buscar informações do filme:', error);
      });
  },
};
</script>

<template>
  <div class="backgroud-details-films">
    <div class="div-details">
      <h1 class="details-films">Detalhes do Filme:</h1>
      <div v-if="film">
        <h2 class="name-films">{{ film.title }}</h2>
        <p class="p-details-films">Episódio: {{ film.episode_id }}</p>
        <p class="p-details-films">Diretor: {{ film.director }}</p>
        <p class="p-details-films">Produtor: {{ film.producer }}</p>
        <p class="p-details-films">Data de Lançamento: {{ film.release_date }}</p>
        <p class="p-details-films-2">Descrição:</p>
        <p class="p-details-films">{{ film.opening_crawl }}</p>
      </div>
      <div v-else>
        <p>Carregando...</p>
      </div>
      <div class="router-div ">
        <router-link class="btn-6" to="/films">
          <a>Voltar</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
