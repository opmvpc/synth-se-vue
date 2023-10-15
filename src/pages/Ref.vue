<script setup>
import { ref } from 'vue';

const count = ref(0);
const name = ref('');
</script>

<template>
  <h2>Compteur</h2>
  <button class="btn btn-primary" @click="count++">{{ count }}</button>

  <h2 class="mt-3">Nom</h2>
  <div>Valeur : {{ name.length > 0 ? name : 'pas de nom' }}</div>
  <input v-model="name" />
</template>
