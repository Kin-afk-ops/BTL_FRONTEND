<template>
  <header-top v-if="!visitorMode" />
  <router-view />
  <footer-bottom v-if="!visitorMode" />
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

  computed: {
    visitorMode() {
      let visitor = false;
      const path = window.location.pathname.split("/")[2];
      if (path === "register" || path === "login") {
        visitor = true;
      }

      return visitor;
    },
  },
};
</script>

<style>
#app {
  background-color: #cccccc;
}
</style>
