<template>
  <div class="card__pay main__container">
    <div class="card__pay--content row no-gutters">
      <div class="c-6 row no-gutters card__pay--content-left">
        <div>
          <p class="card__pay--content-title">Thành tiền:</p>
          <p class="card__pay--content-money">{{ money }}đ</p>
        </div>
      </div>
      <div class="c-6 card__pay--content-right">
        <h3>Chọn phương thức thanh toán:</h3>
        <div class="card__pay--content-btn">
          <router-link
            :class="{ disabled: length === 0 }"
            class="link main__btn router-btn vnpay__btn"
            :to="{
              path: '/pay/vnpay',
              query: { money: money },
            }"
          >
            <img
              class="logo__main card__pay--img"
              src="../../../../assets//default/vnpay__logo.png"
              alt=""
            />
            Thanh toán qua VNPAY
          </router-link>
          <router-link
            class="link main__btn router-btn momo__btn"
            :class="{ disabled: length === 0 }"
            :to="{
              path: '/pay/momo',
              query: { money: money },
            }"
          >
            <img
              class="logo__main card__pay--img"
              src="../../../../assets//default/momo__logo.png"
              alt=""
            />Thanh toán qua MOMO
          </router-link>
          <router-link
            :class="{ disabled: length === 0 }"
            :to="{
              path: '/pay/default',
              query: { money: money },
            }"
            class="link main__btn router-btn pay__default"
          >
            <i class="fa-solid fa-hand-holding-dollar"></i>Thanh toán khi nhận
            hàng
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["money", "length"],
};
</script>
<style>
@import "./cartPay.css";
</style>
