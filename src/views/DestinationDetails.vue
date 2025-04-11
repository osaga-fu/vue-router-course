<script setup>
import { computed } from "vue";
import sourceData from "../data.json";

const props = defineProps({ id: { type: String, reguired: true } });

const destination = computed(() =>
  sourceData.destinations.find((destination) => {
    return destination.id === parseInt(props.id);
  })
);

</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <article class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </article>
  </section>
</template>

<style scoped></style>
