<template>
  <div class="grid wide">
    <div class="pay main__container">
      <h1 class="main__title pay__title">ĐỊA CHỈ GIAO HÀNG</h1>
      <hr />

      <form action="" class="pay__form">
        <div class="pay__form--wrap c-6">
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
        </div>

        <h3 class="main__title">Xem lại giỏ hàng</h3>
        <cart-content :payMode="payMode" />

        <div class="pay__total--money">
          Tổng giá tiền:
          <span>{{ makeMoney }} đ</span>
        </div>

        <div class="pay__method">
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
            <button
              class="main__btn pay__btn pay__default"
              @click="handlePostOrder($event)"
              type="submit"
            >
              <i class="fa-solid fa-hand-holding-dollar"></i>
              Mua hàng
            </button>
          </div>
        </div>
      </form>
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
      payMode: true,
      modal: false,
    };
  },

  components: {
    CartContent,
  },

  methods: {
    handlePostOrder(e) {
      e.preventDefault();
      console.log("post");
    },
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
