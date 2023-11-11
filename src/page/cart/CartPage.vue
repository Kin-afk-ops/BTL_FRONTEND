<template>
  <div class="grid wide">
    <cart-top />
    <cart-content />
  </div>
</template>
<script>
import CartTop from "../../components/cart/cartTop/CartTop.vue";
import CartContent from "../../components/cart/cartContent/CartContent.vue";
export default {
  components: {
    CartTop,
    CartContent,
  },
};
</script>
<style></style>
