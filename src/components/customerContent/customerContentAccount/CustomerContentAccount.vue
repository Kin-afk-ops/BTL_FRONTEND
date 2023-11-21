<template>
  <div class="customer__account col c-9 main__container">
    <form>
      <label for="">Email</label>
      <input
        class="customer__account--input"
        type="text"
        v-model="putForm.email"
        :class="{ error__block: !isSubmit }"
        @focus="isSubmit = true"
      />
      <p class="error__message" v-if="!isSubmit">{{ emailMessage }}</p>

      <label for="">Mật khẩu</label>
      <div class="password__block" :class="{ error__block: !isSubmit }">
        <input
          :type="passwordType"
          v-model="putForm.password"
          @focus="isSubmit = true"
        />
        <i @click="handleHiddenPassword" class="fa-solid fa-eye"></i>
      </div>
      <p class="error__message" v-if="!isSubmit">{{ passwordMessage }}</p>

      <label for="">Nhập lại mật khẩu</label>
      <div class="password__block" :class="{ error__block: !isSubmit }">
        <input
          :type="confirmPasswordType"
          v-model="confirmPassword"
          @focus="isSubmit = true"
        />
        <i @click="handleHiddenConfirmPassword" class="fa-solid fa-eye"></i>
      </div>
      <p class="error__message" v-if="!isSubmit">
        {{ confirmPasswordMessage }}
      </p>

      <button
        type="submit"
        class="customer__account--btn"
        @click="handleSubmit"
      >
        Lưu thay đổi
      </button>
    </form>

    <div class="customer__modal" :class="{ hidden: !modal }">
      <div class="customer__modal--title">Bạn có muốn thay đổi tài khoản?</div>
      <div class="customer__modal--content">
        <button class="customer__modal--hide" @click="modal = false">
          Huỷ
        </button>
        <button class="customer__modal--agree" @click="handelChange">
          Thay đổi
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import validateEmail from "../../../validate/validateEmail";
import empty from "../../../validate/empty";

export default {
  data() {
    return {
      putForm: {
        email: "",
        password: "",
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
      modal: false,
    };
  },

  created() {
    this.putForm.email = this.user.email;
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (empty(this.putForm.email)) {
        this.emailMessage = "Email không được để trống";
        this.isSubmit = false;
      } else {
        if (!validateEmail(this.putForm.email)) {
          this.emailMessage = "Email không hợp lệ";
          this.isSubmit = false;
        }
      }

      if (empty(this.putForm.password)) {
        this.passwordMessage = "Password được để trống";
        this.confirmPasswordMessage = "Password không được để trống";

        this.isSubmit = false;
      }

      if (this.putForm.password !== this.confirmPassword) {
        this.passwordMessage = "Password không trùng khớp";
        this.confirmPasswordMessage = "Password không trùng khớp";
        this.isSubmit = false;
      }

      if (this.isSubmit) {
        this.modal = true;
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

    async handelChange() {
      try {
        await axios.put(`/user/${this.user._id}`, this.putForm);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        this.$store.dispatch("user", null);
        alert("Bạn vừa thay đổi hãy đăng nhập lại");
        this.$router.push("/auth/login");
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style>
@import "./customerContentAccount.css";
</style>
