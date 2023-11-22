<template>
  <div class="grid wide">
    <slide-top />
    <!-- <categories /> -->
    <keep-alive
      ><list :title="title" :bookData="bookData" :type="type"
    /></keep-alive>
  </div>
</template>
<script>
import axios from "axios";
import SlideTop from "../../components/slide/SlideTop.vue";
// import Categories from "../../components/categories/Categories.vue";
import List from "../../components/list/List.vue";

export default {
  data: () => {
    return {
      title: "Sách mới nhất",
      bookData: [],
      type: "homePage",
    };
  },

  components: {
    SlideTop,
    // Categories,
    List,
  },
  async created() {
    try {
      const res = await axios.get("/book");
      this.bookData = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
