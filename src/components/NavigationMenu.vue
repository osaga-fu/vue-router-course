<script setup>
import sourceData from "../data.json";
import AppLink from "./AppLink.vue";

const destinations = sourceData.destinations;
</script>

<template>
  <nav id="nav">
    <AppLink id="logo" to="/">Travel App</AppLink>
    <AppLink to="/">Home</AppLink>
    <AppLink to="/about">About</AppLink>
    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.details',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{ name: 'Protected' }">Dashboard</AppLink>
    <AppLink to="https://google.com">Google</AppLink>
  </nav>
</template>

<style scoped></style>
