<script setup>
import { ref } from 'vue';

const fruits = ref([
  {
    name: 'Pomme',
  },
  {
    name: 'Banane',
  },
  {
    name: 'Poire',
  },
  {
    name: 'Raisin',
  },
]);
</script>

<template>
  <h1>Liste de fruits</h1>
  <ul class="list-group mt-3">
    <li
      v-for="(fruit, index) in fruits"
      :key="`fruit-${index}`"
      class="list-group-item"
    >
      {{ fruit.name }}
    </li>
  </ul>
</template>
