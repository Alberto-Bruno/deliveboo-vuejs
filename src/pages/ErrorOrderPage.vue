<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
  mounted() {
    this.loader();

    setTimeout(() => {
      this.$router.push({ name: "checkout" });
    }, 10000);
  },
};
</script>
<template lang="">
  <div>
    <div v-if="loading" class="container-loader">
      <h1>Stiamo inviando il tuo ordine...</h1>
      <div class="loader"></div>
    </div>
    <div v-else class="container-content">
      <h1 class="grazie fw-bold">
        Abbiamo riscontrato un problema nel pagamento :-(
      </h1>
      <p class="fw-bold">Stai per essere reindirizzato al form del pagamento</p>
      <!-- <router-link :to="{ name: 'home' }" class="btn btn-danger fw-bold"
        >Torna alla Home</router-link
      > -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-loader {
  width: 100%;
  height: 90vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  h1 {
    color: white;

    margin-bottom: 30px;
  }

  .loader {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transition: 0.5;
    border: 8px solid #d1914b;
    --c: radial-gradient(farthest-side, #d64123 94%, #0000);
    --b: radial-gradient(farthest-side, #000 94%, #0000);
    background: var(--c) 11px 15px, var(--b) 6px 15px, var(--c) 35px 23px,
      var(--b) 29px 15px, var(--c) 11px 46px, var(--b) 11px 34px,
      var(--c) 36px 0px, var(--b) 50px 31px, var(--c) 47px 43px,
      var(--b) 31px 48px, #f6d353;
    background-size: 15px 15px, 6px 6px;
    background-repeat: no-repeat;
    animation: hu4 3s infinite;

    @keyframes hu4 {
      0% {
        -webkit-mask: conic-gradient(#0000 360deg, #000 0);
      }

      16.67% {
        -webkit-mask: conic-gradient(#0000 300deg, #000 0);
      }

      33.33% {
        -webkit-mask: conic-gradient(#0000 240deg, #000 0);
      }

      50% {
        -webkit-mask: conic-gradient(#0000 180deg, #000 0);
      }

      66.67% {
        -webkit-mask: conic-gradient(#0000 120deg, #000 0);
      }

      83.33% {
        -webkit-mask: conic-gradient(#0000 60deg, #000 0);
      }

      100% {
        -webkit-mask: conic-gradient(#0000 0deg, #000 0);
      }
    }
  }
}

.container-content {
  width: 50%;
  height: 90vh;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  h1 {
    display: block;
    color: white;

    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    display: block;
    color: white;

    margin-bottom: 30px;
  }
}
</style>
