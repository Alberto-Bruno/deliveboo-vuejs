<script>
import axios from "axios";
const apiBase = "http://127.0.0.1:8000/api/types";
export default {
  name: "HomePage",
  data: () => ({
    types: [],
    loader: false,
    isActive: false,
    checked: [],
  }),

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
  },
  created() {
    this.getType();
  },
};
</script>

<template>
  <section>
    <div class="jumbo"></div>
    <div class="container">

      <div class="section-header my-5">
        <h1 class="fw-bolder text-light">Le cucine più amate </h1>
        <p class="text-light my-3">Trova le cucine più amate dai ristoranti e ordina online a domicilio.</p>
      </div>

      <div class="text-center">
        <p class="text-light fw-4 fs-4 m-0">Scegli le tue tipologie
          <font-awesome-icon icon="fa-solid fa-arrow-down" class="fs-2" />
        </p>
      </div>

      <div class="row row-cols-lg-3  row-cols-md-2 row-cols-1 mb-5 mt-3 d-flex justify-content-center">

        <div class="col my-5" :class="{ checked: checked.includes(t.name) }" v-for="t in types" :key="t.id">
          <input v-model="checked" type="checkbox" :id="t.name" :value="t.name" />
          <label :for="t.name" class="h-100 w-100">
            <div class="cs-card h-100 w-100 d-flex justify-content-center">
              <figure class="h-100 w-100 px-5">
                <img :src="t.image" :alt="t.name" class="w-100 h-100" :class="{ activeTop: checked.includes(t.name) }" />
                <figcaption class="bg-light" :class="{ activeBottom: checked.includes(t.name) }">{{ t.name }}</figcaption>
              </figure>
            </div>
          </label>
        </div>
      </div>

      <div class="d-flex justify-content-center my-3 ">
        <button class="btn btn-success py-1 px-3 fs-5">
          <font-awesome-icon icon="fa-solid fa-utensils" class="me-2" />
          Conferma le tue selezioni
        </button>
      </div>


    </div>
  </section>

  <section id="deliveboo-app">

  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.jumbo {

  height: 350px;
  background-image: url("../assets/img/photo_2023-04-11_09.20.16.jpeg");
  background-size: cover;
  background-position-y: 25%;
  background-position-x: 50%;
}

.fs-2 {
  transform: translateY(15%);
}

.col {
  position: relative;
  height: 200px;


  input {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .cs-card {
    cursor: pointer;
  }

  figure {
    position: absolute;
    top: 0;

    img {
      border-top-right-radius: 5%;
      border-top-left-radius: 5%;
    }

    figcaption {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      text-align: center;
      text-transform: capitalize;
      font-weight: 500;
      padding: 10px 0;
    }



  }
}

.cs-card:hover figcaption {
  text-decoration: underline;
}

.checked {
  transform: translateY(-10%);
}

.activeTop {
  box-shadow: -10px -10px 10px -10px #e5c68b, 10px -10px 10px -10px #e5c68b, 10px 10px 10px -10px #e5c68b, -10px 10px 10px -10px #e5c68b, 0px 0px 10px #e5c68b;

}

.activeBottom {
  box-shadow: -10px 10px 10px -10px #e5c68b, 10px 10px 10px -10px #e5c68b, 0px 0px 10px #e5c68b;

}
</style>
