<template>
  <div class="grid wide">
    <slide-top />
    <categories />
    <list :title="title[0]" :icon="icon[0]" />
    <list :title="title[1]" :icon="icon[1]" />
  </div>
</template>
<script>
import SlideTop from "../../components/slide/SlideTop.vue";
import Categories from "../../components/categories/Categories.vue";
import List from "../../components/list/List.vue";
export default {
  data: () => {
    return {
      title: ["Sản phẩm mới nhất", "Phật giáo"],
      icon: ["fa-solid fa-dharmachakra", "fa-solid fa-fire"],
    };
  },

  components: {
    SlideTop,
    Categories,
    List,
  },
};
</script>
