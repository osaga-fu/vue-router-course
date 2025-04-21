<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(RouterLink.props);

const to = computed(()=> props.to)

const isExternal = computed(()=>{
    return typeof to.value === 'string' && to.value.startsWith('http')
})
</script>

<template>
  <a v-if="isExternal" :href="to" target="_blank"><slot></slot></a>
  <router-link v-else v-bind="props"><slot></slot></router-link>
</template>

<style scoped></style>
