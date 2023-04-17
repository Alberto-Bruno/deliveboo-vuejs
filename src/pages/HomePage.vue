<script>
import axios from "axios";
import RestaurantsPage from "./RestaurantsPage.vue";
const apiBase = "http://127.0.0.1:8000/api/types";
export default {
  name: "HomePage",
  components: { RestaurantsPage },
  data: () => ({
    types: [],
    loader: false,
    isActive: false,
    checked: [],
  }),
  watch: {
    checked(newValue) {
      this.$router.push({ path: "/", query: { types: newValue } });
    },
    "$route.query.types"(newQuery) {
      if (!newQuery) {
        this.checked = [];
      }
    },
  },
  methods: {
    getType() {
      const endpoint = apiBase;
      axios
        .get(endpoint)
        .then((res) => {
          this.types = res.data.types;
        })
        .catch((err) => {
          this.$router.push({ name: "not-found" });
        })
        .then(() => {
          this.loader = false;
        });
    },

    buildImagePath(image) {
      const url = new URL(`../assets/img/${image}`, import.meta.url);
      return url.href;
    },
  },
  mounted() {
    this.getType();
    if (this.$route.query.types) {
      this.checked =
        typeof this.$route.query.types == "string"
          ? [this.$route.query.types]
          : this.$route.query.types;
    }
  },
};
</script>

<template>
  <section>
    <div class="jumbo" ref="jumbo"></div>
    <div class="container">
      <div class="section-header my-5">
        <h1 class="fw-bolder text-light text-center">I piatti che ami, a domicilio.</h1>
        <h5 class="text-center text-light">
          Trova le cucine più amate e ordina online a domicilio.
        </h5>

        <h1 v-if="checked.length === 0" class="text-white text-center mt-5">
          Le cucine più amate
        </h1>
        <h1 v-else class="text-white text-center mt-5">
          Seleziona un ristorante e scopri il suo menù!
        </h1>
      </div>

      <div class="row align-items-stretch d-flex justify-content-center flex-wrap g-4 mb-5 pb-5" ref="types-restaurant">
        <div class="check-col col-lg-2 col-md-4 col-sm-5 col-8" :class="{ checked: checked.includes(t.name) }"
          v-for="t in types" :key="t.id">
          <input v-model="checked" type="checkbox" :id="t.name" :value="t.name" />
          <label :for="t.name" class="h-100 w-100">
            <div class="cs-card d-flex flex-column h-100">
              <figure class="m-0 h-75">
                <img :src="t.image" :alt="t.name" class="h-100 w-100" :class="{ activeTop: checked.includes(t.name) }" />
              </figure>
              <figcaption class="bg-light h-25 d-flex align-items-center justify-content-center"
                :class="{ activeBottom: checked.includes(t.name) }">
                <h5>{{ t.name }}</h5>
              </figcaption>
            </div>
          </label>
        </div>
      </div>
    </div>
  </section>
  <restaurants-page></restaurants-page>
  <section id="app">
    <div class="container my-3">
      <div class="row d-flex justify-content-between align-items-center my-3">
        <div class="col-12 col-sm-5 col-md-4 col-lg-4">
          <figure>
            <img class="w-100" :src="buildImagePath('DeliveBoo.png')" alt="" />
          </figure>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-5">
          <div>
            <h1 class="fw-bolder text-light">Il bello è prenderci gusto</h1>
            <p class="text-light">
              Scarica l'app di Deliveboo e ordina dove vuoi, qualunque cosa
              desideri.
            </p>
          </div>
          <div class="group-button d-flex gap-2">
            <div class="btn bg-dark d-flex align-items-center gap-3">
              <font-awesome-icon icon="fa-brands fa-apple" class="text-light fa-2x" />
              <div class="d-flex flex-column">
                <span class="text-light">Scarica su</span>
                <a class="text-light text-decoration-none" href="#">App Store</a>
              </div>
            </div>
            <div>
              <div class="btn bg-dark d-flex align-items-center gap-3">
                <font-awesome-icon icon="fa-brands fa-google-play" class="text-light fa-2x" />
                <div class="d-flex flex-column">
                  <span class="text-light">Scarica su</span>
                  <a class="text-light text-decoration-none" href="#">Google Play</a>
                </div>
              </div>
            </div>
            <div class="btn-small bg-dark"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="deliveboo-app"></section>
</template>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.jumbo {
  height: 350px;
  background-image: url("../assets/img/Hamb-jumbotron.png");
  background-size: cover;
  background-position-y: 100%;
  background-position-x: 50%;
}

#arrow-types {
  color: inherit;
}

.fs-2 {
  transform: translateY(15%);
}

.check-col {
  position: relative;
  height: 200px;

  input {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
  }

  .cs-card {
    cursor: pointer;
  }

  img {
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
  }
}

figcaption {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 500;
}

.cs-card:hover figcaption {
  text-decoration: underline;
}

.checked {
  transform: translateY(-10%);
}

.activeTop {
  box-shadow: -10px -10px 10px -10px #e5c68b, 10px -10px 10px -10px #e5c68b,
    10px 10px 10px -10px #e5c68b, -10px 10px 10px -10px #e5c68b,
    0px 0px 10px #e5c68b;
}

.activeBottom {
  box-shadow: -10px 10px 10px -10px #e5c68b, 10px 10px 10px -10px #e5c68b,
    0px 0px 10px #e5c68b;
}

span {
  font-size: 0.5rem;
  align-self: start;
}

@media (max-width: 575px) {
  .cs-card {
    figcaption {
      h5 {
        font-size: 1.35rem;
      }
    }
  }
}
</style>
