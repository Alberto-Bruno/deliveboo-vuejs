<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: { AppHeader, AppFooter, AppMain },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@import "./assets/styles/variables.scss";

body {
  background-color: $bg-primary;
}

.text-green {
  color: $primary-color;
}
</style>
