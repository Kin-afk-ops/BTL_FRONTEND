<template>
  <div class="grid wide">
    <div class="row">
      <customer-nav />
      <customer-content />
    </div>
  </div>
</template>
<script>
import CustomerNav from "../../components/customerNav/CustomerNav.vue";
import CustomerContent from "../../components/customerContent/CustomerContent.vue";

export default {
  components: {
    CustomerNav,
    CustomerContent,
  },
};
</script>
