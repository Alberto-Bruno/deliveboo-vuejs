<script>
import axios from "axios";

export default {
  name: "form-payments",
  data: () => ({
    form: {
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      email: "",
      delivery_time: "",
    },
  }),
  method: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template lang="">
  <div class="container">
    <div class="row d-flex justify-content-between my-5">
      <div class="col-lg-8 col-md-12">
        <form @submit.prevent="sendForm">
          <div class="form-group">
            <label for="nome" class="control-label fw-semibold mt-3"
              >Nome</label
            >
            <input
              type="text"
              class="form-control"
              name="nome"
              id="nome"
              v-model="form.firstname"
              placeholder="Inserisci nome"
            />
          </div>

          <div class="form-group">
            <label for="cognome" class="control-label fw-semibold mt-3"
              >Cognome</label
            >
            <input
              type="text"
              class="form-control"
              name="cognome"
              id="cognome"
              v-model="form.lastname"
              placeholder="Inserisci cognome"
            />
          </div>

          <div class="form-group">
            <label for="indirizzo" class="control-label fw-semibold mt-3"
              >Indirizzo</label
            >
            <input
              type="text"
              class="form-control"
              name="indirizzo"
              id="indirizzo"
              v-model="form.address"
              placeholder="Inserisci indirizzo"
            />
          </div>

          <div class="form-group">
            <label for="telefono" class="control-label fw-semibold mt-3"
              >Telefono</label
            >
            <input
              type="phone"
              class="form-control"
              name="telefono"
              id="telefono"
              v-model="form.phone"
              placeholder="Inserisci numero di telefono"
            />
          </div>

          <div class="form-group">
            <label for="email" class="control-label fw-semibold mt-3"
              >Email</label
            >
            <input
              type="mail"
              class="form-control"
              name="email"
              id="email"
              v-model="form.email"
              placeholder="Inserisci mail"
            />
          </div>

          <div class="form-group">
            <label for="delivery_time" class="control-label fw-semibold mt-3"
              >Orario di consegna</label
            >
            <input
              type="time"
              class="form-control"
              name="delivery_time"
              id="delivery_time"
              v-model="form.delivery_time"
            />
          </div>

          <div class="form-group mt-2">
            <button
              type="submit"
              class="btn btn-sm btn-secondary indietro fw-semibold text-white me-2"
            >
              Continua
            </button>
            <router-link :to="{ name: 'home' }">
              <button
                type="submit"
                class="btn btn-sm bg-secondary fw-semibold text-white"
              >
                Indietro
              </button>
            </router-link>
          </div>
        </form>
        <div class="card">
          <div class="card-header bg-header">
            <h2 class="text-center text-white m-0">
              Inserisci i dati di pagamento
            </h2>
          </div>
          <div class="card-body">
            <div id="dropin-container"></div>
            <div class="d-flex">
              <button
                type="submit"
                id="submit-button"
                class="btn btn-sm btn-secondary indietro fw-semibold text-white me-2"
              >
                Paga
              </button>
              <button
                id="submit-button"
                class="btn btn-sm btn-secondary fw-semibold text-white"
              >
                Indietro
              </button>
            </div>
          </div>
        </div>
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
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-3">
                            <p class="fw-semibold"><span>ragu</span></p>
                            <p class="fw-semibold mb-0">
                              Prezzo: <span>5 &euro;</span
                              ><span v-if="this.payment"> x 2</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-4">
                        <div
                          class="d-flex justify-content-between align-items-center my-3"
                        >
                          <button
                            class="btn btn-sm indietro text-white fw-semibold"
                          >
                            <i class="fa-solid fa-minus"></i>
                          </button>
                          <span class="fw-semibold">2</span>
                          <button
                            class="btn btn-sm indietro text-white fw-semibold"
                          >
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div class="col-8">
                        <div
                          class="d-flex justify-content-end align-items-center my-3"
                        >
                          <button
                            class="btn btn-sm btn-danger text-white fw-semibold mx-2"
                          >
                            <i
                              class="fa-solid fa-trash-can"
                              title="Elimina"
                            ></i>
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
                    src="../../public/empty-cart.png"
                    alt=""
                  />
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
