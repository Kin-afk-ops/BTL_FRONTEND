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
          v-model="search"
        />
        <div class="header__center--icon" @click="handleSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div class="header__right">
        <div class="header__icon">
          <i class="fa-solid fa-bell"></i>
          <span>Thông báo</span>
          <div class="header__icon--total" v-if="length !== 0">
            {{ length }}
          </div>

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
            <li
              class="header__icon--notify-li"
              v-for="noti in notification.notify"
              :key="noti._id"
            >
              <router-link :to="noti.path" class="link display__flex--center">
                <i
                  class="header__icon--notify-li-icon fa-solid fa-triangle-exclamation"
                ></i>
                <div class="header__icon--notify-li-wrap">
                  <span class="header__icon--notify-li-title">{{
                    noti.title
                  }}</span>
                  <span class="header__icon--notify-li-content">
                    {{ noti.content }}
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>

        <router-link :to="'/cart/' + user._id" class="link">
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
      notification: {},
      length: 0,
      search: "",
    };
  },

  async created() {
    try {
      const res2 = await axios.get(`info/${this.user._id}`);
      res2.data.lastName === " " || res2.data.firstName === " "
        ? (this.username = "...")
        : (this.username = `${res2.data.lastName} ${res2.data.firstName}`);
      this.email = this.user.email;
      const res1 = await axios.get(`/notification/${this.user._id}`);
      this.notification = res1.data;
      this.length = res1.data.notify.length;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$store.dispatch("user", null);
      this.$router.push("/auth/login");
    },

    handleSearch() {
      this.$router.push(`productList/${this.search}`);
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
