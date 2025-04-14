import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.details",
    component: () => import("../views/DestinationDetails.vue"),
    props: true,
    // NESTED ROUTE
    // children: [
    //   {
    //     path: ":experienceSlug",
    //     name: "experience.details",
    //     component: () => import("../views/ExperienceDetails.vue"),
    //     props: true,
    //   },
    // ],
  },
  {
    path: "/experience/:id/:slug/:experienceSlug",
    name: "experience.details",
    component: () => import("../views/ExperienceDetails.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
