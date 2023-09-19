<script setup>
import { onMounted, reactive, ref } from 'vue';
import ListPokemons from '../components/ListSW.vue';
import '../components/style.css/Home.css';

let baseUrlSvg = ref("https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/");
let pokemons = reactive(ref());

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
  .then(response => response.json())
  .then(response => {
    pokemons.value = response.results;
    console.log(response);
  })
})
</script>


<template>
  <main>
    <div class="main-container">
      <p class="p-image"></p>
      <div class="escrita">
        <p class="p-escrita">Saiba tudo sobre o MUNDO de STAR WARS!</p>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-sm-6 col-md-3">
          <div class="card" style="width: 18rem;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre Star Wars</h5>
              <!-- <p class="card-text">Saiba tudo sobre o mundo de StarWars</p> -->
              <a href="#" class="bottom btn btn-primary">clique aqui</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card" style="width: 18rem;">
            <img src="https://cinepop.com.br/wp-content/uploads/2021/04/starwars.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre Personagens</h5>
              <!-- <p class="card-text">Saiba tudo sobre o mundo de StarWars</p> -->
              <a href="#" class="bottom btn btn-primary">clique aqui</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card" style="width: 18rem;">
            <img src="https://t.ctcdn.com.br/FlW3vW4SceQnoSxEas4zU7MAH94=/963x542/smart/i447716.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre os Filmes</h5>
              <!-- <p class="card-text">Saiba tudo sobre o mundo de StarWars</p> -->
              <a href="#" class="bottom btn btn-primary">clique aqui</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card" style="width: 18rem;">
            <img src="https://bcdn.lanetaneta.com/wp-content/uploads/2021/03/1616863822_835_Los-mejores-planetas-del-universo-de-Star-Wars-clasificados.5.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre os Mundos</h5>
              <!-- <p class="card-text">Saiba tudo sobre o mundo de StarWars</p> -->
              <a href="#" class="bottom btn btn-primary">clique aqui</a>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm-12 col-md-6">
          <div class="card">
            <div class="card-body row">
              <ListPokemons 
              v-for="pokemon in pokemons"
              :key="pokemon.name"
              :name="pokemon.name"
              :url="pokemon.url"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </main>
</template>
