<script>
const apiBase = "http://127.0.0.1:8000/api/restaurants/types";
import axios from "axios";
import AppLoader from "../components/AppLoader.vue";
export default {
  name: "RestaurantsPage",
  components: { AppLoader },
  data() {
    return {
      restaurants: [],
      isLoading: false,
      typesFilter: this.$route.query.types,
    };
  },
  watch: {
    "$route.query.types"(newQuery, oldQuery) {
      if (newQuery != oldQuery) {
        this.typesFilter = this.$route.query.types;
        this.getRestaurants();
        this.$refs.container.scrollIntoView();
      }
    },
  },
  methods: {
    getRestaurants() {
      this.restaurants = [];
      this.isLoading = true;
      const query = {
        params: {
          types: this.typesFilter,
        },
      };
      axios
        .get(apiBase, query)
        .then((res) => {
          this.restaurants = res.data.restaurants;
        })
        .catch((err) => {
          this.$router.push({ name: "not-found" });
        })
        .then(() => {
          this.isLoading = false;
        });
    },

    getRestaurantTypes(types) {
      let t = "";
      types.forEach((type) => {
        t += type.name + ", ";
      });
      return t.slice(0, -2);
    },

    getImageRestaurants(restaurant) {
      if (restaurant.image) return restaurant.image;
      return restaurant.types[0].image;
    },
  },
  mounted() {
    this.getRestaurants();
    this.$refs.container.scrollIntoView();
  },
};
</script>

<template>
  <section>
    <app-loader v-if="isLoading" label="Sto cercando">
      <div
        class="container py-4 justify-content-center d-flex flex-column align-items-center"
        ref="container"
      >
        <font-awesome-icon
          icon="fa-solid fa-bolt-lightning"
          class="fa-4x my-5 fa-beat text-light"
        ></font-awesome-icon>
        <h1 class="text-white text-center mb-4">Sto cercando i ristoranti</h1>
      </div>
    </app-loader>
    <div
      v-else
      class="container py-4 justify-content-center d-flex flex-column align-items-center"
      ref="container"
    >
      <h1 v-if="restaurants.length" class="text-white text-center mb-4">
        Ristoranti Trovati
      </h1>
      <h1 v-else class="text-white text-center my-4">
        Non ci sono ristoranti che corrispondono alla tua ricerca
      </h1>
      <div class="my-2 align-self-start pb-4">
        <RouterLink
          :to="{ name: 'home' }"
          class="d-flex align-items-center gap-2"
        >
          <i class="fa-solid fa-arrow-left fa-2x text-green"></i>
        </RouterLink>
      </div>

      <div class="card-deck">
        <div
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          class="card mb-3"
        >
          <div class="row no-gutters">
            <div class="col-md-4 img-section">
              <a href="#">
                <img
                  :src="getImageRestaurants(restaurant)"
                  class="card-img h-100"
                  :alt="restaurant.name"
                />
              </a>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title mb-4 fw-bold menu-page">
                  <router-link
                    :to="{ name: 'menu', params: { slug: restaurant.slug } }"
                  >
                    {{ restaurant.name }}
                  </router-link>
                </h3>
                <div class="row">
                  <div class="col-md-6">
                    <h5 class="card-title mb-2">{{ restaurant.address }}</h5>
                    <h5 class="card-title">{{ restaurant.phone }}</h5>
                  </div>
                  <div class="col-md-6 text-right">
                    <h5 class="card-title fw-bold">
                      Costo di consegna:<span class="txt-light">{{
                        restaurant.delivery_cost === "0.00"
                          ? " Gratis"
                          : "€ " + restaurant.delivery_cost
                      }}</span>
                    </h5>

                    <h5 class="card-title fw-bold">
                      Ordine Minimo:<span class="txt-light">
                        {{
                          restaurant.min_order
                            ? "€" + restaurant.min_order
                            : " -"
                        }}</span
                      >
                    </h5>
                    <div class="d-flex">
                      <h5 class="fw-bold me-2">Tipologia:</h5>
                      <div class="type-span">
                        <span class="me-2">
                          {{ getRestaurantTypes(restaurant.types) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

.text-green {
  font-size: 50px;
  margin-left: 20px;
}

.type-span {
  padding-top: 1px;
}

.card {
  max-width: 900px;
  margin-bottom: 30px;
  flex-basis: 100%;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.txt-light {
  font-weight: normal;
}

@media (max-width: 767px) {
  .card:hover {
    transform: none;
    box-shadow: 0 0 15px rgba(255, 255, 255, 1);
  }

  .card-img {
    max-height: 230px;
  }
}

@media (min-width: 1024px) {
  .card-img {
    max-height: 200px;
  }
}
</style>
