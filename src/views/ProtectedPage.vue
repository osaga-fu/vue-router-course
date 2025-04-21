<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref(window.user)

function logout() {
  window.user = null
  router.push({ name: 'Home' })
}

</script>

<template>
  <h1>Welcome {{ username }}</h1>
  <button @click="logout">Log Out</button>
</template>

<style scoped>

</style>