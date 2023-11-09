<template>
  <div class="list main__container">
    <h2 class="list__title main__title">
      {{ title }}
    </h2>
    <hr />

    <div class="row list__container">
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
    </div>

    <div class="list__btn" v-if="homeList">
      <router-link to="/products/tat-ca" class="link"
        ><button>Xem thêm</button></router-link
      >
    </div>
  </div>
</template>

<style>
@import "./list.css";
</style>

<script>
import ListItem from "../listItem/ListItem.vue";

export default {
  data() {
    return {
      homeList: true,
    };
  },

  props: {
    title: String,
  },

  components: {
    ListItem,
  },
};
</script>
