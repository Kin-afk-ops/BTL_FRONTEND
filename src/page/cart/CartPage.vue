<template>
  <div class="grid wide">
    <cart-top :length="length" />
    <cart-container v-if="products" :products="products" />
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import CartTop from "../../components/cart/cartTop/CartTop.vue";
import CartContainer from "../../components/cart/cartContainer/CartContainer.vue";
export default {
  components: {
    CartTop,
    CartContainer,
  },

  data() {
    return {
      products: [],
      length: 0,
    };
  },

  async created() {
    try {
      const res = await axios.get(`/cart/find/${this.user._id}`);
      this.products = res.data.products;
      this.length = res.data.products.length;
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style></style>
