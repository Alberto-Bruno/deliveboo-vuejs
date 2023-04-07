<script>

</script>

<template>
    <footer>
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <h6 class="fw-bold">Servizio Clienti</h6>
                    <ul>
                        <li>Domande frequenti</li>
                        <li>Accedi</li>
                        <li>Registrati</li>
                        <li>Scarica l'app</li>
                    </ul>
                </div>
                <div class="col">
                    <h6 class="fw-bold">Cuicine</h6>
                    <ul>
                        <li>Pizza</li>
                        <li>Sushi</li>
                        <li>Kebab</li>
                        <li>Panini</li>
                        <li>Hamburger</li>
                    </ul>
                </div>
                <div class="col">
                    <h6 class="fw-bold">Ristoranti</h6>
                    <ul>
                        <li>La Pergola</li>
                        <li>Trattoria da Mario</li>
                        <li>Osteria del Vecchio Borgo</li>
                        <li>Angelo e diavolo</li>
                        <li>Lo spuntino</li>
                    </ul>
                </div>
                <div class="col">
                    <h6 class="fw-bold">Chi siamo</h6>
                    <ul>
                        <li>Informazioni</li>
                        <li>Lavora con noi</li>
                        <li>Sostenibilità</li>
                        <li>Informazioni legali</li>
                        <li>Termini e condizioni</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="greetings ">
                        made with <i class="fa fa-heart"></i> by Group 7
                    </div>
                    <div class="logo ">
                        <figure>
                            <img class="logo-boo"
                                src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Boolean/original.png?1623187562"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="follow-us ">
                        <strong>Feedback</strong>
                        <p class="fs-6">Aiutaci a migliorare il nostro sito</p>
                        <a class="fs-6" href="#">Invia feedback</a>
                    </div>
                </div>
                <div class="col-md-4 icons">
                    <div class="follow-us ">
                        <strong>Seguici su:</strong>
                    </div>
                    <div class="social-media">
                        <a href="#"><i class="fa-brands fa-facebook text-green me-2"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram text-green me-2"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter text-green me-2"></i></a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

footer {
    min-height: 150px;
    background-color: lightgray;
    font-size: 20px;
    color: black;

    .col {
        line-height: 2;

        ul {
            list-style: none;
            padding: 0;

            li {
                font-size: 15px;
            }
        }
    }

    .icons {
        .social-media {
            font-size: 40px;
        }
    }

    .logo-boo {
        height: 50px;
    }
}
</style>
