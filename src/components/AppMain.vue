<script>
import HomePage from '../pages/HomePage.vue';
export default {
    name: 'AppMain',
    components: { HomePage },
}
</script>

<template>
    <main>
        <div>
            <HomePage></HomePage>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

main {
    min-height: 500px;
}
</style>
