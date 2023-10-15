<script setup>
import NavLink from './NavLink.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Vue.js</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <NavLink url="/" text="Accueil" />
          <NavLink url="/ref" text="ref" />
          <NavLink url="/classes" text="classes" />
          <NavLink url="/v-if" text="v-if" />
          <NavLink url="/v-for" text="v-for" />
          <NavLink url="/events" text="events" />
          <NavLink url="/v-model" text="v-model" />
          <NavLink url="/on-mounted" text="onMounted" />
          <NavLink url="/template-ref" text="template ref" />
        </ul>
      </div>
    </div>
  </nav>
</template>
