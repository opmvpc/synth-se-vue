<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <button class="btn btn-primary" @click="isOpen = !isOpen">
    {{ isOpen ? 'Fermer' : 'Ouvrir' }}
  </button>

  <ul v-show="isOpen" class="list-group mt-3">
    <li class="list-group-item">Pomme</li>
    <li class="list-group-item">Banane</li>
    <li class="list-group-item">Poire</li>
    <li class="list-group-item">Raisin</li>
  </ul>

  <ul v-if="isOpen" class="list-group mt-3">
    <li class="list-group-item">Pomme</li>
    <li class="list-group-item">Banane</li>
    <li class="list-group-item">Poire</li>
    <li class="list-group-item">Raisin</li>
  </ul>

  <ul v-else class="list-group mt-3">
    <li class="list-group-item">Listes cachées</li>
  </ul>
</template>
