<template>
  <div class="arrow__home" @click="handleBack">
    <i class="fa-solid fa-arrow-left-long"></i>
    <p>Quay lại</p>
  </div>
  <div class="main__container register__container">
    <h1 class="register__title main__title">Đăng nhập</h1>
    <hr />

    <div class="register__content">
      <form class="register__form" @submit.prevent="handleSubmit">
        <label for="">Email</label>
        <input
          placeholder="Nhập Email"
          type="text"
          v-model="loginForm.email"
          :class="{ error__block: !isSubmit }"
          @focus="isSubmit = true"
        />
        <p class="error__message" v-if="!isSubmit">{{ emailMessage }}</p>

        <label for="">Mật khẩu</label>
        <div class="password__block" :class="{ error__block: !isSubmit }">
          <input
            placeholder="Nhập mật khẩu"
            :type="passwordType"
            v-model="loginForm.password"
          />
          <i @click="handleHiddenPassword" class="fa-solid fa-eye"></i>
        </div>
        <p class="error__message" v-if="!isSubmit">{{ passwordMessage }}</p>

        <router-link to="/auth/forget-password" class="link forget__password">
          Quên mật khẩu
        </router-link>

        <button class="main__btn register__btn--main">Đăng nhập</button>
        <router-link to="/auth/register" class="link">
          <button class="main__btn register__btn--extra">
            Đăng ký
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import validateEmail from "../../../validate/validateEmail";
import empty from "../../../validate/empty";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      emailMessage: "",
      passwordMessage: "",

      isSubmit: true,

      passwordType: "password",
      passwordHidden: true,
    };
  },

  methods: {
    async handleSubmit() {
      if (empty(this.loginForm.email)) {
        this.emailMessage = "Email không được để trống";
        this.isSubmit = false;
      } else {
        if (!validateEmail(this.loginForm.email)) {
          this.emailMessage = "Email không hợp lệ";
          this.isSubmit = false;
        }
      }

      if (empty(this.loginForm.password)) {
        this.passwordMessage = "Password không được để trống";
        this.isSubmit = false;
      }

      if (this.isSubmit) {
        try {
          const res = await axios.post("/auth/login", this.loginForm);
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("userId", res.data._id);
          this.$store.dispatch("user", res.data);

          this.$router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    },

    handleHiddenPassword() {
      this.passwordHidden = !this.passwordHidden;
      if (this.passwordHidden === false) {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    handleBack() {
      this.$router.back();
    },
  },
};
</script>

<style>
@import "../auth.css";
</style>
