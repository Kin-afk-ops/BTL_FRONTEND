<template>
  <div class="grid wide">
    <Filter />
    <router-view :title="title" />
  </div>
</template>

<script>
import Filter from "../../components/filter/Filter.vue";
export default {
  data: () => {
    return {
      title: "Tất cả sách",
    };
  },
  components: {
    Filter,
  },
};
</script>
