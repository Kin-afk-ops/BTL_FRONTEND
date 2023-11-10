<template>
  <div class="product__buy main__container row">
    <div class="col c-5 product__buy--left">
      <div class="product__buy--img">
        <img
          src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg"
          alt=""
        />
      </div>

      <div class="product__buy--btn">
        <button class="product__buy--btn-add">
          <i class="fa-solid fa-cart-plus"></i>Thêm vào giỏ hàng
        </button>
        <button class="product__buy--btn-buy">Mua ngay</button>
      </div>
    </div>
    <div class="col c-7 product__buy--right">
      <h1 class="product__buy--title">
        Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
      </h1>
      <div class="row no-gutters product__buy--content">
        <div class="col c-6 product__buy--content-left">
          <p>Nhà cung cấp: <b>Saigon Book</b></p>
          <p>Nhà xuất bản: <b>Thế giới</b></p>

          <div class="product__buy--start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(0 đánh giá)</span>
          </div>

          <div class="product__buy--price">
            <span class="product__buy--price-buy">66.000 đ</span>
            <span class="product__buy--price-cost">110.000đ </span>
            <span class="product__buy--price-percent">-40%</span>
          </div>

          <div class="product__buy--policy row no-gutters">
            <div class="col c-6">
              <p>Thời gian giao hàng:</p>
              <p>Chính sách đổi trả:</p>
            </div>
            <div class="col c-6 product__buy--policy-left">
              <p>Xem chính sách vận chuyển</p>
              <p>Xem chính sách đổi - trả - hoàn tiền</p>
            </div>
          </div>

          <div class="product__buy--quality row">
            <span class="col c-6">Số lượng:</span>
            <div class="product__buy--quality-block col c-6">
              <div class="product__buy--quality-reduce" @click="qualityReduce">
                -
              </div>
              <div class="product__buy--quality-value">{{ count }}</div>
              <div
                class="product__buy--quality-increase"
                @click="qualityIncrease"
              >
                +
              </div>
            </div>
          </div>
        </div>

        <div class="col c-6 product__buy--content-right">
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
@import "./productToBuy.css";
</style>
