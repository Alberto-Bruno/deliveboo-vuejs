<script>
const apiBase = "http://127.0.0.1:8000/api/restaurants/types";
import axios from "axios";
export default {
  name: "RestaurantsPage",
  data() {
    return {
      restaurants: [],
      types: [],
      typesFilter: this.$route.query.types,
    };
  },
  methods: {
    getRestaurants() {
      const query = {
        params: {
          types: this.typesFilter,
        },
      };
      axios
        .get(apiBase, query)
        .then((res) => {
          this.restaurants = response.data.restaurants;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getRestaurants();
  },
};
</script>

<template>
  <section>
    <div
      class="container py-4 justify-content-center d-flex flex-column align-items-center">
      <h1 class="text-white text-center mb-4">Ristoranti Trovati</h1>

      <div class="card-deck">
        <div
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4 img-section">
              <a href="#">
                <img
                  :src="restaurant.types[0].image"
                  class="card-img"
                  alt="..." />
              </a>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <a href="#">
                  <h3 class="card-title mb-4 fw-bold">{{ restaurant.name }}</h3>
                </a>
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
}
</style>
