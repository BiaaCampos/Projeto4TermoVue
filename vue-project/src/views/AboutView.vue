import '../components/style.css/About.css';

<template>
  <div class="main-list">
    <Loader v-if="!loading" />
    <div v-else>
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

<script>
export default {
  data() {
    return {
      personas: [],
      personaInfo: {},
      page: 1,
      loading: false,
    };
  },
  mounted() {
    this.loadPersonas(1);
  },
  methods: {
    async loadPersonas(page) {
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
  },
};
</script>

<style scoped>
/* Estilos CSS podem ser importados aqui */
</style>
