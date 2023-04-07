<script>
import axios from "axios";
const apiBase = "http://127.0.0.1:8000/api/types";
export default {
  name: "HomePage",
  data: () => ({
    types: [],
    loader: false,
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
      <div class="row row-cols-3">
        <div class="col" v-for="t in types" :key="t.id">
          <input type="checkbox" :id="t.name" :value="t.name" />
          <label :for="t.name">
            <div class="cs-card">
              <figure>
                <img
                  :src="`http://127.0.0.1:8000/storage/${t.image}`"
                  :alt="t.name"
                  class="img-fluid" />
              </figure>
            </div>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.jumbo {
  width: 100%;
  height: 350px;
  background-image: url("	https://d2egcvq7li5bpq.cloudfront.net/a/hw/img/decoration/bg_hero-wide.jpg");
  background-size: cover;
}

.col {
  position: relative;
  padding: 0 20px;
  height: 200px;

  input {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
  }

  figure {
    position: absolute;
    top: 0;
  }
}
</style>
