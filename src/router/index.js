// importo le funzioni di vue router
import { createRouter, createWebHistory } from "vue-router";

// importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import RestaurantsPage from "../pages/RestaurantsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import MenuPage from "../pages/MenuPage.vue";

// creiamo il router e definiamo le rotte
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/restaurants/:slug",
      name: "menu",
      component: MenuPage,
    },
    {
      path: "/restaurants/:slug",
      name: "menu",
      component: MenuPage,
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
