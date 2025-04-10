<script setup>
import { RouterView } from "vue-router";
import NavigationMenu from "./components/NavigationMenu.vue";
</script>

<template>
  <main class="container">
    <header>
      <NavigationMenu />
    </header>
    <RouterView />
  </main>
</template>

<style scoped></style>
