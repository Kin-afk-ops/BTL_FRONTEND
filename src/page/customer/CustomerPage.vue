<template>
  <div class="grid wide">
    <div class="row">
      <customer-nav />
      <router-view />
    </div>
  </div>
</template>
<script>
import CustomerNav from "../../components/customerNav/CustomerNav.vue";

export default {
  name: "Customer",
  components: {
    CustomerNav,
  },
};
</script>
