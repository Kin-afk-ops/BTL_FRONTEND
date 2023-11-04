<template>
  <div class="list main__container">
    <h2 class="list__title main__title">
      <i class="{{ icon }}"></i>
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

    <div class="list__btn">
      <button>Xem thêm</button>
    </div>
  </div>
</template>

<style>
@import "./list.css";
</style>

<script>
import ListItem from "../listItem/ListItem.vue";

export default {
  props: {
    title: String,
    icon: String,
  },
  setup(props) {
    console.log(props.icon);
  },

  components: {
    ListItem,
  },
};
</script>
