<template>
  <router-view name="header-top" :notification="notification" />
  <router-view />
  <router-view name="footer-bottom" />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background-color: #cccccc;
}
</style>
