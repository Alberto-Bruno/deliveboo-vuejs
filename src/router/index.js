// importo le funzioni di vue router
import { createRouter, createWebHistory } from "vue-router";

// importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import RestaurantsPage from "../pages/RestaurantsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

// creiamo il router e definiamo le rotte
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/restaurants",
      name: "restaurants",
      component: RestaurantsPage,
      props: (route) => ({ query: route.query.types }),
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
