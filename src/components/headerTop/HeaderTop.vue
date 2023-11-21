<template>
  <div class="header">
    <div class="header__content">
      <div class="header__left">
        <a href="/">
          <img
            src="../../assets/default/toi_doc_sach_logo.png"
            alt=""
            class="header__logo--img"
          />
        </a>
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
              <router-link class="link" to="/customer/notification">
                <span class="header__icon--notify-all"
                  >Xem tất cả</span
                ></router-link
              >
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

        <router-link to="/cart" class="link">
          <div class="header__icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <span> Giỏ hàng</span>
            <div class="header__icon--total header__icon--total-cart">3</div>
          </div>
        </router-link>

        <div class="header__icon">
          <i class="fa-solid fa-user"></i>
          <span>Tài khoản</span>

          <ul class="header__icon--user-list">
            <router-link to="/customer/info" class="link">
              <div class="header__icon--user-header" v-if="user">
                <img src="../../assets/default/default_avatar.png" alt="" />
                <div>
                  <p class="header__icon--user-name">{{ username }}</p>
                  <p class="header__icon--user-email">{{ email }}</p>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </router-link>
            <hr v-if="user" />
            <router-link to="/customer/order" class="link" v-if="user">
              <li class="header__icon--user-li">
                <i class="fa-solid fa-clipboard"></i>
                <span class="header__icon--user-li-title"
                  >Đơn hàng của tôi</span
                >
              </li>
            </router-link>
            <hr v-if="user" />

            <router-link to="/auth/login" class="link" v-if="!user">
              <li class="header__icon--user-li" @click="handleLogin">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                <span class="header__icon--user-li-title">Đăng nhập</span>
              </li>
            </router-link>
            <hr v-if="!user" />

            <li class="header__icon--user-li" v-if="user" @click="handleLogout">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span class="header__icon--user-li-title">Đăng xuất</span>
            </li>
            <hr v-if="user" />

            <router-link to="/auth/register" class="link" v-if="!user">
              <li class="header__icon--user-li">
                <i class="fa-regular fa-address-card"></i>
                <span class="header__icon--user-li-title">Đăng kí</span>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
    };
  },

  async created() {
    const res2 = await axios.get(`info/${this.user._id}`);
    res2.data.lastName === " " || res2.data.firstName === " "
      ? (this.username = "...")
      : (this.username = `${res2.data.lastName} ${res2.data.firstName}`);
    this.email = this.user.email;
  },

  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$store.dispatch("user", null);
      this.$router.push("/auth/login");
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style>
@import "./headerTop.css";
</style>
