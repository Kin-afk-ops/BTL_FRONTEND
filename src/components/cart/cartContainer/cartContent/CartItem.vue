<template>
  <li
    class="cart__content--container-item row no-gutters"
    v-if="bookData.price && bookData.image"
  >
    <div class="cart__content--container-item-input display__flex--center c-1">
      <input
        v-if="!payMode"
        type="checkbox"
        @change="handleChangMoney()"
        v-model="selected"
      />
    </div>
    <img class="img__main c-1" :src="bookData.image.path" alt="" />
    <div class="cart__content--container-item-info c-4">
      <p class="info__title">
        {{ bookData.name }}
      </p>
      <div class="info__money">
        <p class="info__money--all">{{ currentPrice }} đ</p>
        <p class="info__money--discount">{{ bookData.price }} đ</p>
      </div>
    </div>
    <div
      class="cart__content--container-item-quality display__flex--center c-2"
    >
      <div>{{ quantity }}</div>
    </div>

    <div class="cart__content--container-item-money display__flex--center c-2">
      {{ totalPrice }} đ
    </div>
  </li>
  <hr />
</template>
<script>
import axios from "axios";
export default {
  props: ["bookId", "quantity"],

  data() {
    return {
      bookData: {},
      selected: [],
    };
  },

  async created() {
    try {
      const res = await axios.get(`/book/find/${this.bookId}`);
      this.bookData = res.data;
      this.$emit("priceChang", this.currentPrice);
      console.log(this.bookData);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    handleChangMoney() {},
  },
  computed: {
    currentPrice() {
      return (
        this.bookData.price -
        (this.bookData.price * this.bookData.discount) / 100
      );
    },
    totalPrice() {
      return this.currentPrice * this.quantity;
    },
  },
};
</script>
<style>
@import "./cartContent.css";
</style>
