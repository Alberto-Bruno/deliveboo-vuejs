<script>
import axios from "axios";

export default {
  name: "MenuPage",
  data() {
    return {
      restaurant: {},
      dishes: [],
    };
  },
  mounted() {
    const slug = this.$route.params.slug;
    // console.log(slug);

    axios
      .get(`http://127.0.0.1:8000/api/restaurants/${slug}`)
      .then((res) => {
        this.restaurant = res.data.restaurant;
        this.dishes = res.data.dishes;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center text-white mb-5">{{ restaurant.name }} Menù</h1>
    <div class="row d-flex flex-column align-items-center">
      <div class="col-6 mb-4" v-for="dish in dishes" :key="dish.id">
        <div class="card h-100">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                v-if="dish.image"
                :src="dish.image"
                class="img-fluid rounded-start"
                alt="..."
              />
              <img
                v-else
                src="https://www.salepepe.it/files/2019/06/cibo-spazzatura-@salepepe.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">{{ dish.name }}</h4>
                <p class="card-text">{{ dish.description }}</p>
                <p class="badge text-bg-success">€ {{ dish.price }}</p>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-danger me-2">-</button>
                  <button class="btn btn-success">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.card-title {
  min-height: 48px;
}

@media (min-width: 1440px) {
  .card {
    width: 700px;
  }
}
</style>
