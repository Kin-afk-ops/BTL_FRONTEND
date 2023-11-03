<template>
  <div class="list main__container">
    <h2 class="list__title main__title">
      <i class="fa-solid fa-fire"></i>
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
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
      <div class="col l-2-4"><list-item /></div>
    </div>
  </div>
</template>

<style>
@import "./list.css";
</style>

<script>
import ListItem from "../listItem/ListItem.vue";

export default {
  props: ["title"],
  components: {
    ListItem,
  },
};
</script>
