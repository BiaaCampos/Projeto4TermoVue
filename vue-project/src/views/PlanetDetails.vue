<script>
import axios from 'axios';
import "../components/style.css/Planet.css";

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
  <div class="backgroud-details-personagem ">
    <div class="div-details">
      <h1 class="details-planet">Detalhes do Planeta:</h1>
      <div v-if="planet">
        <h2 class="name-planet">{{ planet.name }}</h2>
        <p class="p-details-planet">Diâmetro: {{ planet.diameter }} km</p>
        <p class="p-details-planet">Clima: {{ planet.climate }}</p>
        <p class="p-details-planet">População: {{ planet.population }}</p>
        <p class="p-details-planet">Gravidade: {{ planet.gravity }}</p>
        <p class="p-details-planet">Periodo de rotação: {{ planet.rotation_period }} horas</p>
      </div>
      <div v-else>
        <p>Carregando...</p>
      </div>
      <div class="router-div ">
        <router-link class="btn-6" to="/planet">
          <a>Voltar</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
  