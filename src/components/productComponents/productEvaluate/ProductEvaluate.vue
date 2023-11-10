<template>
  <div class="product__evaluate main__container">
    <h2 class="main__title">Đánh giá sách</h2>
    <div class="row no-gutters product__evaluate--content">
      <div class="col c-6 product__evaluate--left">
        <div>
          <span class="product__evaluate--big product__evaluate--number"
            >0</span
          >
          <span class="product__evaluate--number">/5</span>
        </div>

        <div class="product__evaluate--star">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <span>(0 đánh giá)</span>
        </div>
      </div>
      <div class="col c-6 product__evaluate--right">
        <button class="main__btn" @click="modalDisplay">
          <i class="fa-solid fa-pen"></i>Viết đánh giá
        </button>
      </div>
    </div>

    <div class="customer__modal hidden" ref="modalHideBtn">
      <div class="customer__modal--title">Bạn có muốn thay đổi hồ sơ?</div>
      <div class="customer__modal--content">
        <button class="customer__modal--hide" @click="modalHide">Huỷ</button>
        <button class="customer__modal--agree">Thay đổi</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    modalDisplay(e) {
      e.preventDefault();
      this.$refs.modalHideBtn.classList.remove("hidden");
      this.$refs.modalHideBtn.classList.add("display__flex");
    },

    modalHide() {
      this.$refs.modalHideBtn.classList.remove("display__flex");
      this.$refs.modalHideBtn.classList.add("hidden");
    },
  },
};
</script>
<style>
@import "./productEvaluate.css";
</style>
