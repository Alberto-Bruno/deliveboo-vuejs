// importo le funzioni di vue router
import { createRouter, createWebHistory } from "vue-router";

// importo le pagine che voglio usare
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import MenuPage from "../pages/MenuPage.vue";
import PaymentPage from "../pages/PaymentForm.vue";

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
      path: "/payment",
      name: "payment",
      component: PaymentPage,
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
