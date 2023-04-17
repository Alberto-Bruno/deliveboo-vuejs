<script>
import axios from "axios";
import Braintree from "../components/Braintree.vue";
const apiBase = "http://127.0.0.1:8000/api/new-order";

export default {
  name: "form-payments",
  components: { Braintree },
  data: () => ({
    form: {
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      email: "",
      delivery_time: "",
    },
    errors: {},
    showPayment: false,
  }),
  methods: {
    sendForm() {
      return console.log(this.form);
      axios
        .post(apiBase, this.form)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    goToPayments() {
      if (this.orderFormCheck()) this.showPayment = true;
    },
    orderFormCheck() {
      this.errors = {};
      if (!this.form.firstname || !isNaN(this.form.firstname)) {
        this.errors.firstname = "Il nome che hai inserito non è valido.";
      }
      if (!this.form.lastname || !isNaN(this.form.lastname)) {
        this.errors.lastname = "Il cognome che hai inserito non è valido.";
      }
      if (!this.form.address || !isNaN(this.form.address)) {
        this.errors.address = "L'indirizzo inserito non è valido.";
      }
      if (!this.form.phone || isNaN(this.form.phone)) {
        this.errors.phone = "Il numero di telefono inserito non è valido.";
      }
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      if (!this.form.email || !this.form.email.match(validRegex)) {
        this.errors.email = "La mail che hai inserito non è valida!";
      }
      if (!this.form.delivery_time) {
        this.errors.delivery_time = "Devi inserire un orario di consegna.";
      }

      return Object.keys(this.errors).length ? false : true;
    },
  },
};
</script>

<template lang="">
  <div class="container">
    <div class="row d-flex justify-content-between my-5">
      <div class="col-lg-8 col-md-12">
        <form @submit.prevent="sendForm">
          <div v-if="!showPayment">
            <div class="form-group">
              <label for="nome" class="control-label fw-semibold mt-3"
                >Nome</label
              >
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.firstname }"
                name="nome"
                id="nome"
                v-model.trim="form.firstname"
                placeholder="Inserisci nome" />
              <div class="invalid-feedback">{{ errors.firstname }}</div>
            </div>

            <div class="form-group">
              <label for="cognome" class="control-label fw-semibold mt-3"
                >Cognome</label
              >
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.lastname }"
                name="cognome"
                id="cognome"
                v-model.trim="form.lastname"
                placeholder="Inserisci cognome" />
              <div class="invalid-feedback">{{ errors.lastname }}</div>
            </div>

            <div class="form-group">
              <label for="indirizzo" class="control-label fw-semibold mt-3"
                >Indirizzo</label
              >
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.address }"
                name="indirizzo"
                id="indirizzo"
                v-model.trim="form.address"
                placeholder="Inserisci indirizzo" />
              <div class="invalid-feedback">{{ errors.address }}</div>
            </div>

            <div class="form-group">
              <label for="telefono" class="control-label fw-semibold mt-3"
                >Telefono</label
              >
              <input
                type="phone"
                class="form-control"
                :class="{ 'is-invalid': errors.phone }"
                name="telefono"
                id="telefono"
                v-model.trim="form.phone"
                placeholder="Inserisci numero di telefono" />
              <div class="invalid-feedback">{{ errors.phone }}</div>
            </div>

            <div class="form-group">
              <label for="email" class="control-label fw-semibold mt-3"
                >Email</label
              >
              <input
                type="mail"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                name="email"
                id="email"
                v-model.trim="form.email"
                placeholder="Inserisci mail" />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>

            <div class="form-group">
              <label for="delivery_time" class="control-label fw-semibold mt-3"
                >Orario di consegna</label
              >
              <input
                type="time"
                class="form-control"
                :class="{ 'is-invalid': errors.delivery_time }"
                name="delivery_time"
                id="delivery_time"
                v-model.trim="form.delivery_time" />
              <div class="invalid-feedback">{{ errors.delivery_time }}</div>
            </div>

            <div class="form-group d-flex justify-content-between mt-2 px-3">
              <router-link
                :to="{ name: 'home' }"
                class="btn btn-sm bg-secondary fw-semibold text-white">
                Indietro
              </router-link>
              <button
                @click="goToPayments"
                type="button"
                class="btn btn-sm btn-secondary indietro fw-semibold text-white">
                Vai al pagamento
              </button>
            </div>
          </div>
          <div v-else class="card my-5">
            <div class="card-header bg-header">
              <h2 class="text-center text-white m-0">
                Inserisci i dati di pagamento
              </h2>
            </div>
            <Braintree
              @returnToForm="showPayment = false"
              @sendForm="sendForm"></Braintree>
          </div>
        </form>
      </div>
      <div class="col-lg-4 col-md-12 my-5 my-sm-5 my-lg-0">
        <div class="card shadow my-5">
          <div class="card-header bg-header">
            <h2 class="text-center text-white m-0">Riepilogo Ordine</h2>
          </div>
          <div class="card-body shadow">
            <div class="flow pb-0 p-3">
              <div>
                <div>
                  <div class="mb-3">
                    <div>
                      <div class="row g-0">
                        <div class="col-md-4">
                          <div>
                            <img class="card-img-top rounded shadow" />
                          </div>
                          <div>
                            <img
                              class="card-img-top rounded shadow"
                              src="https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
                              alt="" />
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-3">
                            <p class="fw-semibold"><span>ragu</span></p>
                            <p class="fw-semibold mb-0">
                              Prezzo: <span>5 &euro;</span><span> x 2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-4">
                        <div
                          class="d-flex justify-content-between align-items-center my-3">
                          <button
                            class="btn btn-sm indietro text-white fw-semibold">
                            <i class="fa-solid fa-minus"></i>
                          </button>
                          <span class="fw-semibold">2</span>
                          <button
                            class="btn btn-sm indietro text-white fw-semibold">
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div class="col-8">
                        <div
                          class="d-flex justify-content-end align-items-center my-3">
                          <button
                            class="btn btn-sm btn-danger text-white fw-semibold mx-2">
                            <i
                              class="fa-solid fa-trash-can"
                              title="Elimina"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr class="border border-secondary border-1 opacity-75" />
                  </div>
                </div>
              </div>
              <div>
                <div class="img-container">
                  <img
                    class="object-fit-contain empty-cart-img"
                    src=""
                    alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer backg-body">
            <p class="fw-semibold mb-0">
              Prezzo totale: <span>50 &euro;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flow {
  height: 50vh;
  overflow-y: auto;
}

.bg-header {
  background-color: #00cdbe;
}

.backg-body {
  background-color: rgba(209, 235, 153, 0.25);
}

.img-container {
  overflow: hidden;
}

.empty-cart-img {
  width: 100%;
  height: 350px;
  scale: 1.5;
}
</style>
