<template>
  <div class="arrow__home" @click="handleBack">
    <i class="fa-solid fa-arrow-left-long"></i>
    <p>Quay lại</p>
  </div>
  <div class="main__container register__container">
    <h1 class="register__title main__title">Đăng ký</h1>
    <hr />

    <div class="register__content">
      <form class="register__form" @submit.prevent="handleSubmit">
        <label for="">Email</label>
        <input
          placeholder="Nhập Email"
          type="text"
          v-model="registerForm.email"
          :class="{ error__block: !isSubmit }"
          @focus="isSubmit = true"
        />
        <p class="error__message" v-if="!isSubmit">{{ emailMessage }}</p>

        <label for="">Mật khẩu</label>
        <div class="password__block" :class="{ error__block: !isSubmit }">
          <input
            placeholder="Nhập mật khẩu"
            :type="passwordType"
            v-model="registerForm.password"
            @focus="isSubmit = true"
          />
          <i @click="handleHiddenPassword" class="fa-solid fa-eye"></i>
        </div>
        <p class="error__message" v-if="!isSubmit">{{ passwordMessage }}</p>

        <label for="">Nhập lại mật khẩu</label>
        <div class="password__block" :class="{ error__block: !isSubmit }">
          <input
            placeholder="Nhập lại mật khẩu"
            :type="confirmPasswordType"
            v-model="confirmPassword"
            @focus="isSubmit = true"
          />
          <i @click="handleHiddenConfirmPassword" class="fa-solid fa-eye"></i>
        </div>
        <p class="error__message" v-if="!isSubmit">
          {{ confirmPasswordMessage }}
        </p>

        <button class="main__btn register__btn--main">Đăng ký</button>
        <router-link to="/auth/login" class="link">
          <button class="main__btn register__btn--extra">
            Đăng nhập
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
  name: "register",

  data() {
    return {
      registerForm: {
        email: "",
        password: "",
      },
      userInfoForm: {
        userId: "",
        lastName: " ",
        firstName: " ",
        phone: " ",
        sex: " ",
        birthday: " ",
        address: " ",
      },

      confirmPassword: "",
      confirmPasswordType: "password",
      passwordType: "password",
      passwordHidden: true,
      confirmPasswordHidden: true,
      emailMessage: "",
      passwordMessage: "",
      confirmPasswordMessage: "",
      isSubmit: true,
    };
  },
  methods: {
    async handleSubmit() {
      if (empty(this.registerForm.email)) {
        this.emailMessage = "Email không được để trống";
        this.isSubmit = false;
      } else {
        if (!validateEmail(this.registerForm.email)) {
          this.emailMessage = "Email không hợp lệ";
          this.isSubmit = false;
        }
      }

      if (empty(this.registerForm.password)) {
        this.passwordMessage = "Password được để trống";
        this.confirmPasswordMessage = "Password không được để trống";

        this.isSubmit = false;
      }

      if (this.registerForm.password !== this.confirmPassword) {
        this.passwordMessage = "Password không trùng khớp";
        this.confirmPasswordMessage = "Password không trùng khớp";
        this.isSubmit = false;
      }

      if (this.isSubmit) {
        try {
          const res = await axios.post("/auth/register", this.registerForm);
          this.userInfoForm.userId = res.data._id;
          await axios.post("/info", this.userInfoForm);
          await axios.post(`/notification/${res.data._id}`);

          alert("Đăng kí thành công! Hãy đăng nhập ngay");
          this.$router.push("/auth/login");
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

    handleHiddenConfirmPassword() {
      this.confirmPasswordHidden = !this.confirmPasswordHidden;
      if (this.confirmPasswordHidden === false) {
        this.confirmPasswordType = "text";
      } else {
        this.confirmPasswordType = "password";
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
