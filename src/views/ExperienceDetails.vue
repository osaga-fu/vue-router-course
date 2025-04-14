<script setup>
import { computed } from "vue";
import sourceData from "../data.json";
import GoBack from "../components/GoBackButton.vue";

const props = defineProps({
  id: { type: String, required: true },
  experienceSlug: { type: String, required: true },
});

const destination = computed(() => {
  return sourceData.destinations.find((destination) => {
    return destination.id === parseInt(props.id);
  });
});

const experience = computed(() => {
  return destination.value.experiences.find((experience) => {
    return experience.slug === props.experienceSlug;
  });
});
</script>

<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
    <GoBack />
  </section>
</template>

<style scoped></style>
