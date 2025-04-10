<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="container">
    <header>
      <nav id="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/brazil">Brazil</RouterLink>
        <RouterLink to="/hawaii">Hawaii</RouterLink>
        <RouterLink to="/panama">Panama</RouterLink>
        <RouterLink to="/jamaica">Jamaica</RouterLink>
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped></style>
