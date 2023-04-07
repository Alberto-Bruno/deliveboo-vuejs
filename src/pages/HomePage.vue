<script>
import axios from 'axios';
const apiBase = 'http://127.0.0.1:8000/api/types';
export default {
    name: 'HomePage',
    data: () => ({
        types: [],
    }),
    methods: {
        getType() {
            const endpoint = apiBase;
            axios.get(endpoint).then(res => {
                this.types = res.data.types;
            }).catch(err => {
                console.log(err)
            })
        },
    },
    created() {
        this.getType();
    }
};
</script>

<template>
    <section>
        <div class="jumbo"></div>
        <div class="row">
            <div class="col" v-for="t in types">
                <input type="checkbox">
                <label for=""></label>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.jumbo {
    width: 100%;
    height: 350px;
    background-image: url('	https://d2egcvq7li5bpq.cloudfront.net/a/hw/img/decoration/bg_hero-wide.jpg');
    background-size: cover;
}
</style>