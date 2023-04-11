<script>
import axios from "axios";
const apiBase = "http://127.0.0.1:8000/api/restaurants";
const apiType = "http://127.0.0.1:8000/api/types";
export default {
    name: "AppFooter",
    data: () => ({
        restaurants: [],
        loader: false,
        types: [],
    }),

    methods: {
        getTypes() {
            axios.get(apiType)
                .then((res) => {
                    this.types = res.data.types;
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        getRestaurants() {
            axios
                .get(apiBase)
                .then((res) => {
                    this.restaurants = res.data.restaurants;
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
        this.getRestaurants();
        this.getTypes();
    },
};
</script>

<template>
    <footer class="footer-top">
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <h6 class="fw-bold">Servizio Clienti</h6>
                    <ul>
                        <a href="#">
                            <li>Domande frequenti</li>
                        </a>
                        <a href="#">
                            <li>Accedi</li>
                        </a>
                        <a href="#">
                            <li>Registrati</li>
                        </a>
                        <a href="#">
                            <li>Scarica l'app</li>
                        </a>
                    </ul>
                </div>
                <div class="col">
                    <h6 class="fw-bold">Cucine</h6>
                    <ul>
                        <a class="text-capitalize" v-for="t in types" :key="t.id" href="#">
                            <li>{{ t.name }}</li>
                        </a>
                    </ul>
                </div>
                <div class="col">
                    <h6 class="fw-bold">Ristoranti</h6>
                    <ul>
                        <a v-for="restaurant in restaurants" :key="restaurant.id" href="#">
                            <li>{{ restaurant.name }}</li>
                        </a>
                    </ul>
                </div>
                <div class="col">
                    <h6 class="fw-bold">Chi siamo</h6>
                    <ul>
                        <a href="#">
                            <li>Informazioni</li>
                        </a>
                        <a href="#">
                            <li>Lavora con noi</li>
                        </a>
                        <a href="#">
                            <li>Sostenibilità</li>
                        </a>
                        <a href="#">
                            <li>Informazioni legali</li>
                        </a>
                        <a href="#">
                            <li>Termini e condizioni</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <footer class="footer-bottom">
        <div class="container py-5 ">
            <div class="row">
                <div class="col-md-4">
                    <div class="logo ">
                        <figure class="m-0">
                            <img class="logo-boo"
                                src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Boolean/original.png?1623187562"
                                alt="">
                        </figure>
                    </div>
                    <div class="greetings ">
                        made with <i class="fa fa-heart"></i> by Group 7
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="follow-us">
                        <strong>Feedback</strong>
                        <p class="fs-6">Aiutaci a migliorare il nostro sito</p>
                        <a class="fs-6" href="#">Invia feedback</a>
                    </div>
                </div>
                <div class="col-md-4 icons">
                    <div class="follow-us ">
                        <strong>Seguici su:</strong>
                    </div>
                    <div class="social-media p-3">
                        <a href="#"><i class="fa-brands fa-facebook text-black me-2"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram text-black me-2"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter text-black me-2"></i></a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.footer-top {
    min-height: 150px;
    background-color: lightgray;
    font-size: 20px;
    color: black;

    .col {
        text-align: center;
        line-height: 2;

        ul {
            list-style: none;
            padding: 0;

            li {
                font-size: 15px;
            }
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

}

.footer-bottom {
    min-height: 150px;
    background-color: white;
    font-size: 20px;
    color: black;

    .col-md-4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icons {
        .social-media {
            font-size: 30px;
        }
    }

    .logo-boo {
        height: 50px;
    }
}
</style>
