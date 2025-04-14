import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import sourceData from "../data.json";

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
    beforeEnter: (to, from) => {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists)
        return {
          name: "NotFound",
          // Allows keeping the URL while rendering a different page
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
