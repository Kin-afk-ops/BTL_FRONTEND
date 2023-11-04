<template>
  <div class="grid wide">
    <Filter />
    <list :title="title" />
  </div>
</template>

<script>
import List from "../../components/list/List.vue";
import Filter from "../../components/filter/Filter.vue";
export default {
  data: () => {
    return {
      title: "Phật giáo",
    };
  },
  components: {
    List,
    Filter,
  },
};
</script>
