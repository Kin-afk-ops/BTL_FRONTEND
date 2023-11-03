<template>
  <div class="grid wide">
    <slide-top />
    <categories />
    <list :title="title" />
  </div>
</template>
<script>
import SlideTop from "../../components/slide/SlideTop.vue";
import Categories from "../../components/categories/Categories.vue";
import List from "../../components/list/List.vue";
export default {
  data: () => {
    return {
      title: "Sản phẩm mới nhất",
    };
  },

  components: {
    SlideTop,
    Categories,
    List,
  },
};
</script>
