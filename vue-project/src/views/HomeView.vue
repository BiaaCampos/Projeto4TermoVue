<script setup>
import { onMounted, reactive, ref } from 'vue';
import '../components/style.css/Home.css';

let pokemons = reactive(ref());

onMounted(() => {
  fetch("https://swapi.dev/api/")
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
})
</script>


<template>
  <main class="main-teste">
    <div class="main-container">
      <p class="p-image"></p>
      <div class="escrita">
        <p class="p-escrita">Saiba tudo sobre o MUNDO de <strong class="p-star-wars">STAR WARS!</strong></p>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="quadrado card" style="width: 18rem; height: 18rem;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" class="card-img-top"
              alt="..." style="height: 15rem;">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre Star Wars</h5>
              <a href="#" class="btn-5">clique aqui</a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="quadrado card" style="width: 18rem; height: 18rem;">
            <img src="https://cinepop.com.br/wp-content/uploads/2021/04/starwars.jpg" class="card-img-top" alt="..."
              style="height: 11rem;">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre Personagens</h5>
              <router-link to="/person" class="btn-5">clique aqui</router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="quadrado card" style="width: 18rem; height: 18rem;">
            <img src="https://t.ctcdn.com.br/FlW3vW4SceQnoSxEas4zU7MAH94=/963x542/smart/i447716.jpeg" class="card-img-top"
              alt="..." style="height: 15rem;">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre os Filmes</h5>
              <router-link to="/films" class="btn-5">clique aqui</router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="quadrado card" style="width: 18rem; height: 18rem;">
            <img
              src="https://bcdn.lanetaneta.com/wp-content/uploads/2021/03/1616863822_835_Los-mejores-planetas-del-universo-de-Star-Wars-clasificados.5.jpeg"
              class="card-img-top" alt="..." style="height: 15rem;">
            <div class="card-body">
              <h5 class="card-title">Tudo sobre os Planetas</h5>
              <router-link to="/planet" class="btn-5">clique aqui</router-link>
            </div>
          </div>
        </div>
    </div>
  </div>
</main></template>
