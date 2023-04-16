<script>
export default {
    name: 'CartPage',
};
</script>

<template lang="">
    <div class="container" >
        <div class="row" >
            <div class="card mb-5 mt-sm-5 mt-lg-0 shadow px-0" >
                <div class="card-header bg-header" >
                    <h2 class="text-center text-white mb-0">Carrello</h2>
                </div>
                <div class="card-body shadow" >
                    <div class="col-12">
                        <div class="card  p-3 flow border-0 mt-3" >
                            <div>
                                <div class=" mb-3">
                                    <div>
                                        <div class="row g-0">
                                            <div class="col-md-8">
                                                <div class="card-body p-3 ">
                                                    <p class="fw-semibold "><span>Ragù</span></p>
                                                    <p class="fw-semibold mb-0">Prezzo: <span>€ 10,00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4" >
                                            <div class="d-flex justify-content-between align-items-center my-3" >
                                                <button class="btn btn-sm indietro text-white fw-semibold"><i class="fa-solid fa-minus"></i></button>
                                                <span class="fw-semibold">5</span>
                                                <button class="btn btn-sm indietro text-white fw-semibold"><i class="fa-solid fa-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-8" >
                                            <div class="d-flex justify-content-end align-items-center my-3">
                                                <button class="btn btn-sm btn-danger  text-white fw-semibold mx-2"><i class="fa-solid fa-trash-can" title="Elimina"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="border border-secondary border-1 opacity-75">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3 class="text-center mt-5">Vuoi creare un nuovo carrello?</h3>
                                    <p class="p-2 text-center">Puoi scegliere se cancellare l'ordine precedente oppure procedere col pagamento</p>
                                    <div class="d-flex justify-content-around">
                                        <button class="btn btn-sm bg-secondary text-white fw-semibold me-2">Nuovo carrello</button>
                                        <router-link :to="{ name: 'payment'}">
                                            <button class="btn btn-sm indietro text-white fw-semibold">Vai al pagamento</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="card-footer backg-body">
                    <div class="d-flex justify-content-between align-items-center" >
                        <div>
                            <router-link :to="{ name: 'payment'}"  class="btn btn-sm indietro text-white fw-semibold me-2" title="Paga">Paga</router-link>
                            <button type="submit" class="btn btn-sm btn-danger fw-semibold" title="Svuota Carrello">Svuota</button>
                        </div>
                        <div>
                            <p class="fw-semibold mb-0">Prezzo totale: <span>50</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flow {
    height: 400px;
    overflow-y: auto;
}

.img-container {
    overflow: hidden;
}

.empty-cart-img {
    width: 100%;
    height: 350px;
    scale: 1.5;
}

.bg-header {
    background-color: #00CDBE;
}

.backg-body {
    background-color: rgba(209, 235, 153, 0.25);
}
</style>