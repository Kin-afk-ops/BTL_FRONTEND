<template>
  <div class="cart__content main__container">
    <div
      class="cart__content--title main__title row no-gutters"
      v-if="!payMode"
    >
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <p class="c-5">Chọn tất cả sản phẩm</p>
      <p class="c-2 display__flex--center">Số lượng</p>
      <p class="c-2 display__flex--center">Thành tiền</p>
      <div
        class="cart__content--container-item-delete display__flex--center c-2"
      >
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
      </div>
    </div>
    <hr />

    <div class="cart__content--container" v-if="length !== 0">
      <ul class="cart__content--container-list" v-if="products">
        <div v-for="product in products" :key="product._id">
          <cart-item :bookId="product.productId" :quantity="product.quantity" />
        </div>
      </ul>
    </div>
    <cart-delete :selected="selected" :modal="modal" @hidden="modal = false" />
  </div>
</template>
<script>
import axios from "axios";

import CartDelete from "./CartDelete";
import CartItem from "./CartItem";
import { mapGetters } from "vuex";

export default {
  props: ["payMode"],

  data() {
    return {
      selectAll: false,
      selected: [],
      data: [1, 2, 3, 4, 5, 6],
      modal: false,
      length: 0,
      cart: {},
      products: [],
      totalPrice: 0,
    };
  },

  components: {
    CartDelete,
    CartItem,
  },
  async created() {
    try {
      const res = await axios.get(`/cart/find/${this.user._id}`);
      this.cart = res.data;
      this.length = this.cart.products.length;
      this.products = this.cart.products;
      this.$store.dispatch("cart", this.cart);

      console.log(this.totalPrice);
      console.log(this.products);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.data.forEach((d) => {
          this.selected.push(d);
        });
        this.$emit("change-money", this.selected);
      }
    },

    handleDelete() {
      if (this.selected.length !== 0) {
        this.modal = true;
      }
    },

    changeMoney(selected) {
      this.$emit("chang-money", selected);
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style>
@import "./cartContent.css";
</style>
