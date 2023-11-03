<template>
  <header-top />
  <home-page />
  <footer-bottom />
</template>

<script>
import HeaderTop from "./components/headerTop/HeaderTop";
import HomePage from "./page/home/HomePage.vue";
import FooterBottom from "./components/footerBottom/FooterBottom.vue";

export default {
  name: "App",
  components: {
    HeaderTop,
    HomePage,
    FooterBottom,
  },
};
</script>

<style>
#app {
  background-color: #cccccc;
}
</style>
