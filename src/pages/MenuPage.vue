<script>
import axios from "axios";

export default {
  name: "MenuPage",
  data() {
    return {
      restaurant: {},
      dishes: [],
      cartDishes: [],
    };
  },
  watch: {
    cartDishes: {
      handler(newValue) {
        if (this.addToLocalCart()) {
          localStorage.setItem("cartDishes", JSON.stringify(newValue));
          if (!JSON.parse(localStorage.getItem("cartDishes")).length)
            localStorage.clear();
          console.log(localStorage);
        }
      },
      deep: true,
    },
  },
  methods: {
    addToCart(dish) {
      dish.quantity = 1;
      dish.addedToCart = true;
      const cartDish = { name: dish.name, quantity: dish.quantity };
      this.cartDishes.push(cartDish);
      this.addToLocalCart();
    },
    incrementQuantity(dish) {
      dish.quantity++;
      const cartDish = this.cartDishes.find((cartDish) => {
        return cartDish.name === dish.name;
      });
      cartDish.quantity++;
    },
    decrementQuantity(dish) {
      const cartDish = this.cartDishes.find((cartDish) => {
        return cartDish.name === dish.name;
      });
      if (dish.quantity > 1) {
        dish.quantity--;
        cartDish.quantity--;
      } else {
        dish.addedToCart = false;
        dish.quantity = 0;
        const i = this.cartDishes.indexOf(cartDish);
        this.cartDishes.splice(i, 1);
      }
    },
    addToLocalCart() {
      const restaurantName = this.restaurant.slug;
      if (!localStorage.getItem("restaurantName")) {
        localStorage.setItem("restaurantName", restaurantName);
      } else if (localStorage.getItem("restaurantName") !== restaurantName) {
        console.error("Non puoi effettuare ordini da ristoranti diversi!");
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.$refs.myFocus.focus();
    const slug = this.$route.params.slug;

    axios
      .get(`http://127.0.0.1:8000/api/restaurants/${slug}`)
      .then((res) => {
        this.restaurant = res.data.restaurant;
        this.dishes = res.data.dishes.map((dish) => {
          return {
            ...dish,
            addedToCart: false,
            quantity: 0,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div class="container py-4">
    <h1 class="text-center text-white mb-5" ref="myFocus">
      Il Menù di "{{ restaurant.name }}"
    </h1>
    <div class="row d-flex flex-column align-items-center">
      <div class="col-6 mb-4" v-for="dish in dishes" :key="dish.id">
        <div class="card h-100">
          <div class="row g-0">
            <div class="col-md-4 p-2">
              <img
                v-if="dish.image"
                :src="dish.image"
                class="img-fluid rounded h-100"
                alt="..." />
              <img
                v-else
                src="https://www.salepepe.it/files/2019/06/cibo-spazzatura-@salepepe.jpg"
                class="img-fluid rounded-start"
                alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">{{ dish.name }}</h4>
                <p class="card-text">{{ dish.description }}</p>
                <p class="badge text-bg-success">€ {{ dish.price }}</p>
                <div class="d-flex justify-content-end">
                  <button
                    v-if="!dish.addedToCart"
                    class="btn btn-primary"
                    @click="addToCart(dish)">
                    Aggiungi al carrello
                  </button>
                  <div
                    v-if="dish.addedToCart"
                    class="d-flex align-items-center">
                    <button
                      class="btn btn-danger me-2"
                      @click="decrementQuantity(dish)">
                      -
                    </button>
                    <span id="counter" class="me-2">{{ dish.quantity }}</span>
                    <button
                      class="btn btn-success"
                      @click="incrementQuantity(dish)">
                      +
                    </button>
                  </div>
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

.card {
  cursor: pointer;
}
.card:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}

#counter {
  font-size: 20px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  //   color: rgb(218, 150, 24);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (min-width: 1440px) {
  .card {
    width: 700px;
  }
}
</style>
