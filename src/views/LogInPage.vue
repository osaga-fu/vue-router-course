<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();
const route = useRoute();

const login = () => {
  // Simulated authentication
  window.user = username.value;
  const redirectPath = route.query.redirect || '/protected'
  router.push(redirectPath);
}
</script>

<template>
  <div class="login">
    <form @submit.prevent="login" class="form">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="text" name="password" class="input" />
      <button class="btn">Log in</button>
    </form>
  </div>
</template>

<style scoped></style>
