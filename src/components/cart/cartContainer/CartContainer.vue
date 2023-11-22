<template>
  <div>
    <cart-content />
    <cart-pay :money="money" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartContent from "./cartContent/CartContent.vue";
import CartPay from "./cartPay/CartPay.vue";

export default {
  data() {
    return {
      money: 0,
      lengthSelected: 0,
    };
  },

  created() {
    this.cart.products.forEach((p) => {
      this.money = p.price * p.quantity;
    });
  },

  components: {
    CartContent,
    CartPay,
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>
<style></style>
