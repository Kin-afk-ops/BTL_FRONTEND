<template>
  <div class="grid wide">
    <div class="pay main__container">
      <h1 class="main__title pay__title">ĐỊA CHỈ GIAO HÀNG</h1>
      <hr />

      <form action="" class="pay__form" @submit.prevent="handleSubmit">
        <div class="pay__form--wrap c-6">
          <label class="pay__form--label" for="">Họ và tên người nhận</label>
          <input
            v-model="clientInfo.clientName"
            class="pay__input"
            type="text"
          />
          <label class="pay__form--label" for="">Số điện thoại</label>
          <input v-model="clientInfo.phone" class="pay__input" type="text" />

          <label class="pay__form--label" for="">Địa chỉ giao hàng</label>
          <input v-model="clientInfo.address" class="pay__input" type="text" />

          <label class="pay__form--label" for="">Ghi chú</label>
          <input v-model="clientInfo.note" class="pay__input" type="text" />
        </div>

        <h3 class="main__title">Xem lại giỏ hàng</h3>
        <cart-content :payMode="payMode" />

        <div class="pay__total--money">
          Tổng giá tiền:
          <span>{{ makeMoney }} đ</span>
        </div>

        <div class="pay__method">
          <button class="main__btn pay__btn pay__default" type="submit">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            Mua hàng
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import CartContent from "../../components/cart/cartContainer/cartContent/CartContent";

export default {
  data() {
    return {
      typePay: window.location.pathname.split("/")[2],
      payMode: true,
      modal: false,
      clientInfo: {
        userId: "",
        clientName: "",
        products: [],
        phone: "",
        totalPrice: 0,
        address: "",
        note: "",
      },
    };
  },

  components: {
    CartContent,
  },

  async created() {
    try {
      const res = await axios.get(`/info/${this.user._id}`);

      this.clientInfo.userId = this.user._id;
      this.clientInfo.products = this.cart.products;

      this.cart.products.forEach((p) => {
        this.totalPrice = p.price * p.quantity;
      });
      this.clientInfo.clientName = `${res.data.lastName} ${res.data.firstName}`;
      this.clientInfo.phone = res.data.phone;
      this.clientInfo.address = res.data.address;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async handleSubmit() {
      this.totalPrice = this.makeMoney;
      try {
        const res = await axios.post(`/order`, this.clientInfo);
        console.log(res);
        alert("Đặt hàng thành công");
        this.$router.push("/customer/order");
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    ...mapGetters(["user", "cart"]),
  },
};
</script>
<style>
@import "./payPage.css";
</style>
