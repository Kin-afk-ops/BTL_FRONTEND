<template>
  <header-top />
  <router-view />
  <footer-bottom />
</template>

<script>
import HeaderTop from "./components/headerTop/HeaderTop";
import FooterBottom from "./components/footerBottom/FooterBottom.vue";

export default {
  name: "App",
  components: {
    HeaderTop,
    FooterBottom,
  },
};
</script>

<style>
#app {
  background-color: #cccccc;
}
</style>
