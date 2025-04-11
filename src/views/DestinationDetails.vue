<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import sourceData from "../data.json";

const route = useRoute();

const destinationId = computed(() => parseInt(route.params.id));
const destination = computed(() =>
  sourceData.destinations.find(
    (destination) => destination.id === destinationId.value
  )
);
</script>

<template>
  <section class="destination">
    <h1>{{  destination.name }}</h1>
    <article class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </article>
  </section>
</template>

<style scoped></style>
