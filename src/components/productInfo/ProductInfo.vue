<template>
  <div class="product__info main__container row">
    <div class="col c-5 product__info--left">
      <div class="product__info--img">
        <img
          src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg"
          alt=""
        />
      </div>

      <div class="product__info--btn">
        <button class="product__info--btn-add">
          <i class="fa-solid fa-cart-plus"></i>Thêm vào giỏ hàng
        </button>
        <button class="product__info--btn-buy">Mua ngay</button>
      </div>
    </div>
    <div class="col c-7 product__info--right">
      <h1 class="product__info--title">
        Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
      </h1>
      <div class="row no-gutters product__info--content">
        <div class="col c-6 product__info--content-left">
          <p>Nhà cung cấp: <b>Saigon Book</b></p>
          <p>Nhà xuất bản: <b>Thế giới</b></p>

          <div class="product__info--start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(0 đánh giá)</span>
          </div>

          <div class="product__info--price">
            <span class="product__info--price-buy">66.000 đ</span>
            <span class="product__info--price-cost">110.000đ </span>
            <span class="product__info--price-percent">-40%</span>
          </div>

          <div class="product__info--policy row no-gutters">
            <div class="col c-6">
              <p>Thời gian giao hàng:</p>
              <p>Chính sách đổi trả:</p>
            </div>
            <div class="col c-6 product__info--policy-left">
              <p>Xem chính sách vận chuyển</p>
              <p>Xem chính sách đổi - trả - hoàn tiền</p>
            </div>
          </div>

          <div class="product__info--quality row">
            <span class="col c-6">Số lượng:</span>
            <div class="product__info--quality-block col c-6">
              <div class="product__info--quality-reduce" @click="qualityReduce">
                -
              </div>
              <div class="product__info--quality-value">{{ count }}</div>
              <div
                class="product__info--quality-increase"
                @click="qualityIncrease"
              >
                +
              </div>
            </div>
          </div>
        </div>

        <div class="col c-6 product__info--content-right">
          <p>Tác giả: <b>Thích Nhất Hành</b></p>
          <p>Hình thức bìa: <b>Bìa mềm</b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { count: 1 };
  },

  methods: {
    qualityIncrease() {
      this.count++;
    },
    qualityReduce() {
      this.count > 1 && this.count--;
    },
  },
};
</script>
<style>
@import "./productInfo.css";
</style>
