<script setup>
import { ref, onMounted } from 'vue';

const input = ref(null);

onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <input class="form-control" ref="input" />
</template>
