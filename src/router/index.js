import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: () => import('../views/AboutPage.vue') },
  { path: "/destination/:id/:slug", name: "destination.details", component: () => import('../views/DestinationDetails.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
