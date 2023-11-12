<template>
  <div class="grid wide">
    <div class="pay main__container">
      <h1 class="main__title pay__title">ĐỊA CHỈ GIAO HÀNG</h1>
      <hr />

      <div class="row no-gutters">
        <form action="" class="pay__form c-6">
          <label class="pay__form--label" for="">Họ và tên người nhận</label>
          <input class="pay__input" type="text" />
          <label class="pay__form--label" for="">Số điện thoại</label>
          <input class="pay__input" type="text" />

          <label class="pay__form--label" for="">Địa chỉ giao hàng</label>
          <input class="pay__input" type="text" />
          <label class="pay__form--label" for="">Địa chỉ</label>
          <input class="pay__input" type="text" />

          <label class="pay__form--label" for="">Ghi chú</label>
          <input class="pay__input" type="text" />

          <div class="pay__total--money">
            Tổng giá tiền:
            <span>{{ makeMoney }} đ</span>
          </div>
          <router-link
            to="/haha"
            class="main__btn link"
            v-if="typePay === 'vnpay'"
            ><div class="main__btn pay__btn pay__vnpay">
              <img
                class="logo__main card__pay--img"
                src="../../assets/default/vnpay__logo.png"
                alt=""
              />
              Thanh toán bằng ví VNPAY
            </div></router-link
          >

          <router-link to="/haha" class="link" v-else-if="typePay === 'momo'"
            ><div class="main__btn pay__btn pay__momo">
              <img
                class="logo__main card__pay--img"
                src="../../assets/default/momo__logo.png"
                alt=""
              />
              Thanh toán bằng ví MOMO
            </div></router-link
          >
          <div v-else>
            <button class="main__btn pay__btn pay__default">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              Thanh toán băng tiền mặt
            </button>
          </div>
        </form>
      </div>
      <div class="customer__modal hidden" ref="modalHideBtn">
        <div class="customer__modal--title">Bạn có muốn thay đổi hồ sơ?</div>
        <div class="customer__modal--content">
          <button class="customer__modal--hide">Huỷ</button>
          <button class="customer__modal--agree">Thay đổi</button>
        </div>
      </div>

      <cart-content />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import CartContent from "../../components/cart/cartContainer/cartContent/CartContent";

export default {
  data() {
    return {
      typePay: window.location.pathname.split("/")[2],
    };
  },

  components: {
    CartContent,
  },
  computed: {
    makeMoney() {
      const route = useRoute();
      return route.query.money;
    },
  },
};
</script>
<style>
@import "./payPage.css";
</style>
