<template>
  <div class="grid wide">
    <cart-top />
    <cart-container />
  </div>
</template>
<script>
import CartTop from "../../components/cart/cartTop/CartTop.vue";
import CartContainer from "../../components/cart/cartContainer/CartContainer.vue";
export default {
  components: {
    CartTop,
    CartContainer,
  },
};
</script>
<style></style>
