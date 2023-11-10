<template>
  <div class="list__slide main__container">
    <h2 class="main__title">{{ title }}</h2>
    <hr />

    <swiper
      class="list__slide--container"
      :modules="modules"
      :slides-per-view="5"
      :space-between="50"
      :navigation="true"
    >
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
      <swiper-slide><list-item /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

import ListItem from "../listItem/ListItem";
export default {
  props: {
    title: String,
  },

  components: {
    Swiper,
    SwiperSlide,
    ListItem,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style>
@import "./listSlide.css";
</style>
