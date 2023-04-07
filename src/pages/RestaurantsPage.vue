<script>
export default {
  name: "RestaurantsPage",
  data() {
    return {
      params: this.$route.query.types,
    };
  },
};
</script>

<template>
  <section>
    <div class="container py-4">
      <h1 class="text-white text-center mb-4">Ristoranti Trovati</h1>
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
