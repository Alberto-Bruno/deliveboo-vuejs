<script>
import axios from 'axios'

export default {
    name: 'form-payments',
    data: () => ({
        form: {
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            email: '',
            delivery_time: ''
        },
        cartDishes: [],
    }),
    methods: {
        addQuantity(dish) {
            dish.quantity++;
            const cartDishes = JSON.parse(localStorage.getItem('cartDishes'));
            const updatedCartDishes = cartDishes.map(cartDish => {
                if (cartDish.id === dish.id) {
                    return dish;
                }
                return cartDish;
            });
            localStorage.setItem('cartDishes', JSON.stringify(updatedCartDishes));
        },
        deleteQuantity(dish) {
            dish.quantity--;
            const cartDishes = JSON.parse(localStorage.getItem('cartDishes'));
            const updatedCartDishes = cartDishes.map(cartDish => {
                if (cartDish.id === dish.id) {
                    return dish;
                }
                return cartDish;
            });
            localStorage.setItem('cartDishes', JSON.stringify(updatedCartDishes));
        },

        ClearDish(dish) {
            dish.quantity = 0;
            for (let i = 0; i < this.cartDishes.length; i++) {
                if (this.cartDishes[i].id === dish.id) {
                    this.cartDishes.splice(i, 1);
                    i--;
                }
            }
            localStorage.setItem('cartDishes', JSON.stringify(this.cartDishes));
        },

        totalPrice() {
            let total_price = 0;
            let all_dishes = this.cartDishes;
            for (let dish in all_dishes) {
                total_price += all_dishes[dish].price * all_dishes[dish].quantity;
            }
            return total_price.toFixed(2);
        },
    },

    mounted() {

        let storage = (JSON.parse(localStorage.getItem('cartDishes')));
        this.cartDishes = storage;

    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row d-flex justify-content-between my-5">
            <div class="col-lg-8 col-md-12">
                <form @submit.prevent="sendForm">

                    <div class="form-group">
                        <label for="nome" class="control-label fw-semibold mt-3">Nome</label>
                        <input type="text" class="form-control" name="nome" id="nome" v-model="form.firstname" placeholder="Inserisci nome">
                    </div>
                  
                    <div class="form-group">
                        <label for="cognome" class="control-label fw-semibold mt-3 ">Cognome</label>
                        <input type="text" class="form-control" name="cognome" id="cognome" v-model="form.lastname" placeholder="Inserisci cognome">
                    </div>

                    <div class="form-group">
                        <label for="indirizzo" class="control-label fw-semibold mt-3">Indirizzo</label>
                        <input type="text" class="form-control" name="indirizzo" id="indirizzo" v-model="form.address" placeholder="Inserisci indirizzo">
                    </div>

                    <div class="form-group">
                        <label for="telefono" class="control-label fw-semibold mt-3">Telefono</label>
                        <input type="phone" class="form-control" name="telefono" id="telefono" v-model="form.phone" placeholder="Inserisci numero di telefono">
                    </div>

                    <div class="form-group">
                        <label for="email" class="control-label fw-semibold mt-3">Email</label>
                        <input type="mail" class="form-control" name="email" id="email" v-model="form.email" placeholder="Inserisci mail">
                    </div>

                    <div class="form-group">
                        <label for="delivery_time" class="control-label fw-semibold mt-3">Orario di consegna</label>
                        <input type="time" class="form-control" name="delivery_time" id="delivery_time" v-model="form.delivery_time">
                    </div>

                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-sm btn-secondary indietro fw-semibold text-white me-2">Continua</button>
                        <router-link :to="{ name: 'home' }">
                            <button type="submit" class="btn btn-sm bg-secondary fw-semibold text-white">Indietro</button>
                        </router-link>
                    </div>
                </form>
                <div class="card">
                    <div class="card-header bg-header">
                        <h2 class="text-center text-white m-0">Inserisci i dati di pagamento</h2>
                    </div>
                    <div class="card-body">
                        <div id="dropin-container" ></div>   
                        <div class="d-flex">
                            <button type="submit" id="submit-button" class="btn btn-sm btn-secondary indietro fw-semibold text-white me-2">
                                Paga
                            </button>
                            <button id="submit-button" class="btn btn-sm btn-secondary fw-semibold text-white">
                                Indietro
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="col-lg-4 col-md-12 my-5 my-sm-5 my-lg-0">
                <div class="card shadow my-5">
                    <div class="card-header bg-header" >
                        <h2 class=" text-center text-white m-0">Riepilogo Ordine</h2>
                    </div>
                    <div class="card-body shadow" >
                        <div class="flow pb-0 p-3" >
                            <div>
                                <div class="dish" v-for="(dish, i) in cartDishes" :key="dish.i">                                  
                                    <div class="mb-3">
                                        <div>
                                            <div class="row d-flex align-items-center g-0">
                                                <div class="col-md-4">
                                                    <div v-if="dish.image">
                                                            <img class="card-img-top rounded shadow" :src="dish.image">
                                                    </div>
                                                    <div v-else>
                                                        <img class="card-img-top rounded shadow" src="https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png" alt="">
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body p-3">
                                                        <p class="fw-semibold "><span>{{dish.name}}</span></p>
                                                        <p class="fw-semibold mb-0">Prezzo: <span>{{dish.price}} &euro;</span><span>x {{dish.quantity}}</span></p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row d-flex justify-content-between">
                                            <div class="col-auto" >
                                                <div class="d-flex justify-content-between align-items-center my-3" >
                                                    <button class="btn btn-sm indietro fw-semibold text-primary" :disabled="dish.quantity == 0" @click="deleteQuantity(dish)"><font-awesome-icon icon="fa-solid fa-minus"></font-awesome-icon></button>
                                                    <span class="fw-semibold">Quantità:  <span class="fs-5">{{dish.quantity}}</span></span>
                                                    <button class="btn btn-sm indietro fw-semibold text-danger" @click="addQuantity(dish)"><font-awesome-icon icon="fa-solid fa-plus"></font-awesome-icon></button>
                                                </div>
                                            </div>
                                            <div class="col-auto" >
                                                <div class="d-flex justify-content-end align-items-center my-3">
                                                    <button class="btn btn-sm btn-danger  text-white fw-semibold mx-2"  @click="ClearDish(dish)"><i class="fa-solid fa-trash-can" title="Elimina"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="border border-secondary border-1 opacity-75">
                                    </div>
                                </div>
                               
                            </div>
                            <div>
                                <div class="img-container">
                                    <img class="object-fit-contain empty-cart-img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer backg-body" >
                            <p class="fw-semibold mb-0">Prezzo totale: <span>{{totalPrice()}} &euro;</span></p>
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
    background-color: #00CDBE;
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