<template>
  <div class="product grid wide">
    <router-view
      name="product-to-buy"
      :bookData="bookData"
      :bookInfoProp="bookInfoProp"
    />
    <router-view name="product-info" :bookInfoData="bookInfoData" />
    <router-view name="product-desc" :desc="desc" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Product",
  data() {
    return {
      bookData: {},
      bookInfoData: {},
      bookInfoProp: {
        auth: "",
        form: "",
        publisher: "",
        supplier: "",
      },
      desc: "",
    };
  },

  async created() {
    try {
      const res1 = await axios.get(`/book/find/${this.$route.params.bookId}`);
      const res2 = await axios.get(`/infoBook/${this.$route.params.bookId}`);
      this.bookData = res1.data;
      this.bookInfoData = res2.data;
      this.bookInfoProp.auth = res2.data.auth;
      this.bookInfoProp.form = res2.data.form;
      this.bookInfoProp.publisher = res2.data.infoBook.publisher;
      this.bookInfoProp.supplier = res2.data.infoBook.supplier;
      this.desc = res2.data.infoBook.desc;
      console.log(this.bookData);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style></style>
