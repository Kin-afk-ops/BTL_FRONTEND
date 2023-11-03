<template>
  <div class="slide row">
    <div class="col c-8 slide__left">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :navigation="true"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
      >
        <swiper-slide>
          <img
            class="slide__img"
            src="https://cdn0.fahasa.com/media/magentothem/banner7/20_11_mainbanner_Slide_840x320.jpg"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slide__img"
            src="https://cdn0.fahasa.com/media/magentothem/banner7/NCCMcBooksT1123_BannerSlide_840x320.jpg"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slide__img"
            src="https://cdn0.fahasa.com/media/magentothem/banner7/NCCMcBooksT1123_BannerSlide_840x320.jpg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="slide__img"
            src="https://cdn0.fahasa.com/media/magentothem/banner7/FahasaSaleThu3T1123_W1_Banner_840x320.jpg"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="col c-4 slide__right"></div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style>
@import "./Slide.css";
</style>
