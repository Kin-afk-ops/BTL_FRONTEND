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

    <div ref="productModal" class="product__modal hidden main__container">
      <h5 class="product__modal--title main__title">Viết đánh giá sách</h5>
      <div class="product__modal--container">
        <div class="rating">
          <input class="rating__input" type="radio" name="rate" id="rate-5" />
          <label for="rate-5"> </label>
          <input class="rating__input" type="radio" name="rate" id="rate-4" />
          <label for="rate-4"> </label>
          <input class="rating__input" type="radio" name="rate" id="rate-3" />
          <label for="rate-3"> </label>
          <input class="rating__input" type="radio" name="rate" id="rate-2" />
          <label for="rate-2"> </label>
          <input class="rating__input" type="radio" name="rate" id="rate-1" />
          <label for="rate-1"> </label>
        </div>
        <form action="#" class="product__modal--form">
          <div class="product__modal--name">
            <div class="product__modal--name-wrap">
              <input
                ref="productModalNameInput"
                type="text"
                placeholder="Nhập tên sẽ hiển thị khi đánh giá"
              />
            </div>

            <div class="product__modal--no-name">
              Đánh giá ẩn danh
              <div @click="handleNoName" class="product__modal--no-name-btn">
                <div ref="noNameButton"></div>
              </div>
            </div>
          </div>

          <div class="product__modal--comment">
            <textarea
              placeholder="Nhập nhận xét của bạn về sản phẩm"
              name=""
              id=""
              cols="70"
              rows="10"
            ></textarea>
          </div>

          <div class="product__modal--btn">
            <button class="product__modal--cancel main__btn" @click="modalHide">
              Huỷ
            </button>
            <button class="product__modal--send main__btn">Gửi nhận xét</button>
          </div>
        </form>
      </div>

      <div class="product__modal--cancel-top">
        <i class="fa-regular fa-rectangle-xmark" @click="modalHide"></i>
      </div>
    </div>
  </div>
</template>
<script>
let noNameActive = true;
export default {
  methods: {
    modalDisplay(e) {
      e.preventDefault();
      this.$refs.productModal.classList.add("display__flex");
    },

    modalHide(e) {
      e.preventDefault();
      this.$refs.productModal.classList.remove("display__flex");
    },

    handleNoName() {
      noNameActive = !noNameActive;
      if (noNameActive) {
        this.$refs.productModalNameInput.classList.remove("hidden");
        this.$refs.noNameButton.classList.remove("no__name--active");
      } else {
        this.$refs.noNameButton.classList.add("no__name--active");
        this.$refs.productModalNameInput.classList.add("hidden");
      }
    },
  },
};
</script>
<style>
@import "./productEvaluate.css";
</style>
