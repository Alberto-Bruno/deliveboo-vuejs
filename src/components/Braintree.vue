<script>
export default {
    name: 'Braintree',
    mounted() {
        const button = document.getElementById('submit-button');

        // Braintree function
        braintree.dropin.create({
            // Insert your tokenization key here
            authorization: 'sandbox_cscchrw5_543rbwhrbh3s9sk5',
            container: '#dropin-container'
        }, function (createErr, instance) {
            button.addEventListener('click', function () {
                instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                    // When the user clicks on the 'Submit payment' button this code will send the
                    // encrypted payment information in a variable called a payment method nonce
                    if (payload) {
                        let data = (JSON.parse(localStorage.getItem(PAID)));
                    }
                });
            });
        });
    }
};
</script>

<template>
    <div class="col-12">
        <div id="dropin-container"></div>
        <div class="d-flex justify-content-end">
            <button type="submit" id="submit-button" class="btn btn-primary p-3 mb-3">
                <span class="ps-3">Paga</span>
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.btn.btn-primary {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%);
    border: none;
    transition: 0.5s;
    background-size: 200% auto;

}

.btn.btn.btn-primary:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
}



.btn.btn-primary:hover .icon {
    transform: scale(1.5);
    transition: transform 0.2s ease-in;
}
</style>