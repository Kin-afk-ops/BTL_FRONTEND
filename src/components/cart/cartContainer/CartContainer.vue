<template>
  <div>
    <cart-content @change-money="changeMoney" />
    <cart-pay :money="money" :length="lengthSelected" />
  </div>
</template>
<script>
import CartContent from "./cartContent/CartContent.vue";
import CartPay from "./cartPay/CartPay.vue";

export default {
  data() {
    return {
      money: 0,
      lengthSelected: 0,
    };
  },

  components: {
    CartContent,
    CartPay,
  },

  methods: {
    changeMoney(selected) {
      this.money = 0;
      this.lengthSelected = selected.length;
      let length = selected.length;
      while (length > 0) {
        this.money += 60000;
        length--;
      }
    },
  },
};
</script>
<style></style>
