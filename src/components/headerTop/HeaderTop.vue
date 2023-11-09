<template>
  <div class="header">
    <div class="header__content">
      <div class="header__left">
        <a href="/">
          <img
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
            alt=""
            class="header__logo--img"
          />
        </a>
        <div class="header__categories">
          <img
            src="https://www.fahasa.com//skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"
            alt=""
            class="header__categories--img"
          />
          <div class="header__categories--icon-down">
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>

      <div class="header__center">
        <input
          type="text"
          class="header__center--input"
          placeholder="Tìm kiếm sản phẩm mong muốn..."
        />
        <div class="header__center--icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div class="header__right">
        <div class="header__icon">
          <i class="fa-solid fa-bell"></i>
          <span>Thông báo</span>
          <div class="header__icon--total">2</div>

          <ul class="header__icon--notify-list">
            <div class="header__icon--notify-header">
              <span class="header__icon--notify-title"> Thông báo </span>
              <span class="header__icon--notify-all">Xem tất cả</span>
            </div>
            <hr />
            <li class="header__icon--notify-li">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <div>
                <span class="header__icon--notify-li-title"
                  >Cập nhật Email ngay để nhận quà từ toidocsach.com</span
                >
                <span class="header__icon--notify-li-content"
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime doloribus reiciendis adipisci nemo, velit facere
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div class="header__icon">
          <i class="fa-solid fa-cart-shopping"></i>
          <span> Giỏ hàng</span>
          <div class="header__icon--total header__icon--total-cart">3</div>
        </div>

        <div class="header__icon">
          <i class="fa-solid fa-user"></i>
          <span>Tài khoản</span>

          <ul class="header__icon--user-list">
            <router-link to="/customer/info" class="link">
              <div class="header__icon--user-header">
                <img src="../../assets/default/default_avatar.png" alt="" />
                <div>
                  <p class="header__icon--user-name">...</p>
                  <p class="header__icon--user-email">linh@gmail.com</p>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </router-link>
            <hr />
            <router-link to="/customer/order" class="link">
              <li class="header__icon--user-li">
                <i class="fa-solid fa-clipboard"></i>
                <span class="header__icon--user-li-title"
                  >Đơn hàng của tôi</span
                >
              </li>
            </router-link>
            <hr />

            <li class="header__icon--user-li">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span class="header__icon--user-li-title">Đăng xuất</span>
            </li>
            <hr />
            <li class="header__icon--user-li">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              <span class="header__icon--user-li-title">Đăng nhập</span>
            </li>
            <hr />

            <li class="header__icon--user-li">
              <i class="fa-regular fa-address-card"></i>
              <span class="header__icon--user-li-title">Đăng kí</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
@import "./headerTop.css";
</style>
