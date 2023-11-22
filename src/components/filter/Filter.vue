<template>
  <div class="filer main__container">
    <div class="filer__list">
      <div @click="handleChange('tat-ca')">
        <div class="filer__list--item">
          <p>Tất cả</p>
        </div>
      </div>

      <div
        @click="handleChange(cate.path)"
        v-for="cate in categories"
        :key="cate._id"
      >
        <div class="filer__list--item">
          <p>{{ cate.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      bookCate: [],
    };
  },

  async created() {
    try {
      const res = await axios.get("/category");
      this.categories = res.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async handleChange(path) {
      if (path === "tat-ca") {
        const res2 = await axios.get("/book");
        this.bookCate = res2.data;
      } else {
        const res2 = await axios.get(`/book?qCategory=${path}`);
        this.bookCate = res2.data;
      }

      this.$emit("change", this.bookCate);
      // window.location.replace(`/productList/${path}`);
    },
  },
};
</script>
<style>
@import "./filter.css";
</style>
