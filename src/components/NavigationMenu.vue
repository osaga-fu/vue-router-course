<script setup>
import { RouterLink } from "vue-router";
import sourceData from "../data.json";

const destinations = sourceData.destinations;
</script>

<template>
  <nav id="nav">
    <RouterLink id="logo" to="/">Travel App</RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.details',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </RouterLink>
    <RouterLink :to="{ name: 'Protected' }">Dashboard</RouterLink>
  </nav>
</template>

<style scoped></style>
