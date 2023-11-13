<template>
  <div class="categories main__container">
    <h2 class="category__title main__title">
      <img
        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu_red.svg"
        alt=""
      />
      Danh mục sản phẩm
    </h2>
    <hr />
    <ul>
      <li>
        <img
          class="categories__img"
          src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg"
          alt=""
        />
        <router-link to="products/phat-giao" class="link"
          ><p>Phật giáo</p></router-link
        >
      </li>
      <li>
        <img
          class="categories__img"
          src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Thao_t_ng.jpg"
          alt=""
        />
        <router-link class="link" to="/products/tam-ly-thao-tung">
          <p>
            Tâm lý <br />
            thao túng
          </p>
        </router-link>
      </li>

      <li>
        <img
          class="categories__img"
          src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/9786043654370.jpg"
          alt=""
        />
        <router-link to="/products/xu-huong-kinh-te" class="link">
          <p>
            Xu hướng <br />
            kinh tế
          </p>
        </router-link>
      </li>

      <li>
        <img
          class="categories__img"
          src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg"
          alt=""
        />
        <router-link to="/products/tieu-thuyet" class="link"
          ><p>Tiểu thuyết</p></router-link
        >
      </li>
      <li>
        <img
          class="categories__img"
          src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/tpkds1.jpg"
          alt=""
        />
        <router-link to="/products/van-hoc-kinh-dien" class="link">
          <p>
            Văn học <br />
            kinh điển
          </p>
        </router-link>
      </li>

      <li>
        <img
          class="categories__img"
          src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/thieunhis2.jpg"
          alt=""
        />
        <router-link to="/products/thieu-nhi" class="link"
          ><p>Thiếu nhi</p></router-link
        >
      </li>
    </ul>
  </div>
</template>
<style>
@import "./categories.css";
</style>
