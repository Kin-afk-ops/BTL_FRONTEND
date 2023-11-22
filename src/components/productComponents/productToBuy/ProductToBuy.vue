<template>
  <div
    class="product__buy main__container row"
    v-if="bookData && bookData.image"
  >
    <div class="col c-5 product__buy--left">
      <div class="product__buy--img">
        <img :src="bookData.image.path" alt="" />
      </div>

      <div class="product__buy--btn">
        <button class="product__buy--btn-add" @click="handleCart">
          <i class="fa-solid fa-cart-plus"></i>Thêm vào giỏ hàng
        </button>
      </div>
    </div>
    <div class="col c-7 product__buy--right">
      <h1 class="product__buy--title">
        {{ bookData.name }}
      </h1>
      <div class="row no-gutters product__buy--content">
        <div class="col c-6 product__buy--content-left">
          <p>
            Nhà cung cấp: <b>{{ bookInfoProp.supplier }}</b>
          </p>
          <p>
            Nhà xuất bản: <b>{{ bookInfoProp.publisher }}</b>
          </p>

          <div class="product__buy--price">
            <span class="product__buy--price-buy">{{ currentPrice }} đ</span>
            <span class="product__buy--price-cost">{{ bookData.price }} </span>
            <span class="product__buy--price-percent"
              >-{{ bookData.discount }}</span
            >
          </div>

          <div class="product__buy--quality row">
            <span class="col c-6">Số lượng: </span>
            <div class="product__buy--quality-block col c-6">
              <div class="product__buy--quality-reduce" @click="qualityReduce">
                -
              </div>
              <input
                class="product__buy--quality-value"
                v-model="count"
                type="text"
              />
              <div
                class="product__buy--quality-increase"
                @click="qualityIncrease"
              >
                +
              </div>
            </div>
          </div>

          <div class="col c-6 product__buy--content-right">
            <p>
              Tác giả: <b>{{ bookInfoProp.auth }}</b>
            </p>
            <p>
              Hình thức bìa: <b>{{ bookInfoProp.form }}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: ["bookData", "bookInfoProp"],

  data() {
    return {
      cartId: "",
      count: 1,
      product: {
        bookId: "",
        quantity: 1,
        price: 0,
      },
    };
  },

  methods: {
    qualityIncrease() {
      this.count++;
      console.log(this.count);
    },
    qualityReduce() {
      this.count > 1 && this.count--;
    },

    async handleCart() {
      try {
        const resBook = await axios.get(
          `/book/find/${this.$route.params.bookId}`
        );
        this.product.productId = this.$route.params.bookId;
        this.product.quantity = this.count;
        this.product.price =
          resBook.data.price -
          (resBook.data.price * resBook.data.discount) / 100;

        const res = await axios.get(`/cart/find/${this.user._id}`);
        this.cartId = res.data._id;
        const res1 = await axios.put(`/cart/${this.cartId}`, this.product);
        console.log(res1);
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    ...mapGetters(["user"]),

    currentPrice() {
      return (
        this.bookData.price -
        (this.bookData.price * this.bookData.discount) / 100
      );
    },
  },
};
</script>
<style>
@import "./productToBuy.css";
</style>
