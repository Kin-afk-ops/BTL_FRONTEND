<template>
  <div class="categories main__container">
    <h2 class="category__title main__title">
      <img
        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu_red.svg"
        alt=""
      />
      Danh mục sách
    </h2>
    <hr />
    <ul>
      <li v-for="cate in cateInfo" :key="cate._id">
        <img class="categories__img" :src="cate.image.path" :alt="cate.path" />
        <router-link :to="'products/' + cate.path" class="link"
          ><p>{{ cate.name }}</p></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cateInfo: {},
    };
  },

  async created() {
    try {
      const res = await axios.get("/category");
      this.cateInfo = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style>
@import "./categories.css";
</style>
