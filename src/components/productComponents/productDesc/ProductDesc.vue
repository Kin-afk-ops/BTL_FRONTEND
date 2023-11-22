<template>
  <div class="product__desc main__container">
    <div
      class="product__desc--content"
      ref="productDescContent"
      v-html="desc"
    ></div>

    <div class="product__desc--btn">
      <button class="main__btn" ref="productDescBtn" @click="handleDesc">
        Xem thêm
      </button>
    </div>
  </div>
</template>
<script>
let longText = false;
export default {
  props: ["desc"],

  methods: {
    handleDesc() {
      longText = !longText;
      if (longText) {
        this.$refs.productDescBtn.innerText = "Thu gọn";
        this.$refs.productDescBtn.classList.add("product__desc--btn-active");
        this.$refs.productDescContent.style.maxHeight = "initial";
      } else {
        this.$refs.productDescBtn.innerText = "Xem thêm";
        this.$refs.productDescBtn.classList.remove("product__desc--btn-active");
        this.$refs.productDescContent.style.maxHeight = "150px";
      }
    },
  },
};
</script>
<style>
@import "./productDesc.css";
</style>
