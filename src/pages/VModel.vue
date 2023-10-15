<script setup>
import { ref } from 'vue';

const person = ref({
  name: 'Véronique',
  favoriteColour: '#f360ff',
});
</script>

<template>
  <h2>{{ person.name }}</h2>

  <div class="d-flex flex-column gap-3">
    <div>
      <label for="name" class="form-label mt-3">Nom</label>
      <input id="name" class="form-control" v-model="person.name" />
      <div class="mt-2">valeur: {{ person.name }}</div>
    </div>
    <div>
      <label for="favoriteColour" class="form-label mt-3"
        >Couleur préférée</label
      >
      <input
        id="favoriteColour"
        class="form-control"
        type="color"
        v-model="person.favoriteColour"
      />
      <div class="mt-2">valeur: {{ person.favoriteColour }}</div>
    </div>
  </div>
</template>
