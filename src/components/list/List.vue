<template>
  <div class="list main__container">
    <h2 class="list__title main__title">
      {{ title }}
    </h2>
    <hr />

    <div class="row list__container">
      <div v-for="book in bookData" :key="book._id" class="col l-2-4">
        <keep-alive><list-item :book="book" /></keep-alive>
      </div>
    </div>

    <!-- <div class="list__btn" v-if="type === 'homePage'">
      <router-link to="/productList/tat-ca" class="link"
        ><button>Xem thêm</button></router-link
      >
    </div> -->
  </div>
</template>

<style>
@import "./list.css";
</style>

<script>
import ListItem from "../listItem/ListItem.vue";

export default {
  props: ["title", "bookData", "type"],
  setup(props) {
    console.log(props.bookData);
  },
  data() {
    return {
      bookList: [],
    };
  },

  components: {
    ListItem,
  },
};
</script>
