<template>
  <div v-if="book">
    <router-link :to="'/product/' + book._id" class="link">
      <div class="list__item">
        <img :src="book.image.path" alt="" />

        <div class="list__item--text">
          <p class="list__item--title">
            {{ book.name }}
          </p>

          <p class="list__item--price">{{ currentPrice }} đ</p>
          <p class="list__item--discount">{{ book.price }}</p>
        </div>

        <div class="list__item--percent">{{ book.discount }}%</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["book"],
  data() {
    return {};
  },

  computed: {
    currentPrice() {
      return this.book.price - (this.book.price * this.book.discount) / 100;
    },
  },
};
</script>

<style>
@import "./listItem.css";
</style>
