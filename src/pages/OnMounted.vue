<script setup>
import { ref, onMounted } from 'vue';

const people = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  console.log(`Le composant est monté!`);
  const response = await fetch('https://api-annuaire.vercel.app/api/personnes');
  people.value = await response.json();
  isLoading.value = false;
});
</script>

<template>
  <h1>Annuaire</h1>
  <ul class="list-group mt-3" v-if="!isLoading">
    <li
      v-for="(person, index) in people"
      :key="`person-${index}`"
      class="list-group-item"
    >
      {{ person.prenom }} {{ person.nom }}
    </li>
  </ul>
  <ul class="list-group mt-3" v-else>
    <li class="list-group-item">Chargement ...</li>
  </ul>
</template>
