<script setup>
import { computed } from "vue";
import sourceData from "../data.json";
import ExperienceCard from "../components/ExperienceCard.vue";
import { RouterLink } from "vue-router";

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
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <RouterLink
        :to="{
          name: 'experience.details',
          params: { experienceSlug: experience.slug },
        }"
        v-for="experience in destination.experiences"
        :key="experience.slug"
      >
        <ExperienceCard :experience="experience" />
      </RouterLink>
    </div>
  </section>
</template>

<style scoped></style>
