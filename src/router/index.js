import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import BrazilPage from "../views/BrazilPage.vue";
import HawaiiPage from "../views/HawaiiPage.vue";
import PanamaPage from "../views/PanamaPage.vue";
import JamaicaPage from "../views/JamaicaPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/brazil", name: "Brazil", component: BrazilPage },
  { path: "/panama", name: "Panama", component: PanamaPage },
  { path: "/hawaii", name: "Hawaii", component: HawaiiPage },
  { path: "/jamaica", name: "Jamaica", component: JamaicaPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
