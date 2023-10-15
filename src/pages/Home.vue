<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="jumbotron">
    <div class="container">
      <h1>Table des matières</h1>
      <ul class="list-group">
        <RouterLink class="list-group-item" to="/ref" text="ref" />
        <RouterLink class="list-group-item" to="/v-model" text="v-model" />
        <RouterLink class="list-group-item" to="/v-if" text="v-if" />
        <RouterLink class="list-group-item" to="/v-for" text="v-for" />
        <RouterLink class="list-group-item" to="/classes" text="classes" />
        <RouterLink class="list-group-item" to="/events" text="events" />
        <RouterLink
          class="list-group-item"
          to="/template-ref"
          text="template ref"
        />
        <RouterLink class="list-group-item" to="/on-mounted" text="onMounted" />
      </ul>
    </div>
  </div>
</template>
