<script setup>
import { ref } from 'vue';

function say(message) {
  alert(message);
}

function warn(message, event) {
  if (event) {
    event.preventDefault();
    console.log(event.target);
  }
  alert(message);
}
</script>

<template>
  <div class="d-flex flex-column mb-3 gap-3">
    <button class="btn btn-primary" @click="say('hello')">Say hello</button>
    <button class="btn btn-primary" @click="say('bye')">Say bye</button>
    <button
      class="btn btn-primary"
      @click="warn('Le formulaire ne peut pas encore être soumis.', $event)"
    >
      Submit
    </button>
  </div>
</template>
