<script setup>
import sourceData from "../data.json";

const destinations = sourceData.destinations;
</script>

<template>
  <section class="home">
    <h1>All destinations</h1>
    <section class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
      >
        <h2>
          {{ destination.name }}
        </h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </section>
  </section>
</template>

<style scoped></style>
