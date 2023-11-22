<template>
  <div class="main__container cart__top">
    <h1 class="main__title cart__top--title">
      <i class="fa-solid fa-cart-shopping"></i>
      Giỏ hàng
      <p>({{ length }} sản phẩm)</p>
    </h1>
  </div>
</template>
<script>
export default {
  props: ["length"],
};
</script>
<style>
@import "./CartTop.css";
</style>
