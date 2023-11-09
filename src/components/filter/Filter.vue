<template>
  <div class="filer main__container">
    <div class="filer__list">
      <router-link
        to="/products/tat-ca"
        class="link"
        active-class="filter__active"
      >
        <div class="filer__list--item">
          <p>Tất cả</p>
        </div>
      </router-link>
      <router-link
        to="/products/phat-giao"
        class="link"
        active-class="filter__active"
      >
        <div class="filer__list--item">
          <p>Phật giáo</p>
        </div>
      </router-link>

      <router-link
        to="/products/tam-ly-thao-tung"
        class="link"
        active-class="filter__active"
      >
        <div class="filer__list--item">
          <p>
            Tâm lý <br />
            thao túng
          </p>
        </div>
      </router-link>

      <router-link
        to="/products/xu-huong-kinh-te"
        class="link"
        active-class="filter__active"
      >
        <div class="filer__list--item">
          <p>
            Xu hướng <br />
            kinh tế
          </p>
        </div>
      </router-link>

      <router-link
        to="/products/tieu-thuyet"
        class="link"
        active-class="filter__active"
      >
        <div class="filer__list--item">
          <p>tiểu thuyết</p>
        </div>
      </router-link>
      <router-link
        to="/products/van-hoc-kinh-dien"
        class="link"
        active-class="filter__active"
      >
        <div class="filer__list--item">
          <p>
            Văn học <br />
            kinh điển
          </p>
        </div>
      </router-link>

      <router-link
        to="/products/thieu-nhi"
        class="link"
        active-class="filter__active"
      >
        <div class="filer__list--item">
          <p>Thiếu nhi</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style>
@import "./filter.css";
</style>
