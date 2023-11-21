<template>
  <div class="customer__edit col c-9 main__container">
    <form>
      <div class="customer__edit--left">
        <img src="../../../assets/default/default_avatar.png" alt="" />
      </div>
      <div class="customer__edit--right">
        <label for="">Họ</label>
        <input
          class="customer__edit--input"
          type="text"
          v-model="this.userInfoForm.lastName"
          :class="{ error__block: !isSubmit }"
          @focus="isSubmit = true"
        />
        <p class="error__message" v-if="!isSubmit">
          {{ errorMessage.lastName }}
        </p>
        <label for="">Tên</label>
        <input
          class="customer__edit--input"
          type="text"
          v-model="this.userInfoForm.firstName"
          :class="{ error__block: !isSubmit }"
          @focus="isSubmit = true"
        />
        <p class="error__message" v-if="!isSubmit">
          {{ errorMessage.firstName }}
        </p>

        <label for="">Số điện thoại</label>
        <input
          class="customer__edit--input"
          type="text"
          v-model="this.userInfoForm.phone"
          :class="{ error__block: !isSubmit }"
          @focus="isSubmit = true"
        />
        <p class="error__message" v-if="!isSubmit">{{ errorMessage.phone }}</p>

        <label for="">Giới tính</label>
        <div class="customer__edit--right-gender">
          <input
            type="radio"
            name="gender"
            value="Nam"
            v-model="this.userInfoForm.sex"
            @focus="isSubmit = true"
          />

          <label for="">Nam</label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            v-model="this.userInfoForm.sex"
            @focus="isSubmit = true"
          />
          <label for="">Nữ</label>
        </div>
        <p class="error__message" v-if="!isSubmit">{{ errorMessage.sex }}</p>

        <label for="">Ngày sinh</label>
        <input
          class="customer__edit--input"
          type="date"
          v-model="this.userInfoForm.birthday"
          :class="{ error__block: !isSubmit }"
          @focus="isSubmit = true"
        />
        <p class="error__message" v-if="!isSubmit">
          {{ errorMessage.birthday }}
        </p>

        <label for="">Địa chỉ</label>
        <input
          class="customer__edit--input"
          type="text"
          v-model="this.userInfoForm.address"
          :class="{ error__block: !isSubmit }"
          @focus="isSubmit = true"
        />
        <p class="error__message" v-if="!isSubmit">
          {{ errorMessage.address }}
        </p>

        <button
          class="customer__edit--button"
          type="submit"
          @click="handleSubmit"
        >
          Lưu thay đổi
        </button>
      </div>
    </form>

    <div class="customer__modal" :class="{ hidden: !modal }">
      <div class="customer__modal--title">Bạn có muốn thay đổi hồ sơ?</div>
      <div class="customer__modal--content">
        <button class="customer__modal--hide" @click="modal = false">
          Huỷ
        </button>
        <button class="customer__modal--agree" @click="handlePut">
          Thay đổi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import empty from "../../../validate/empty";
export default {
  data() {
    return {
      modal: false,
      userInfoId: "",

      userInfoForm: {
        userId: "",
        lastName: "",
        firstName: "",
        phone: "",
        sex: "",
        birthday: "",
        address: "",
      },
      isSubmit: true,
      errorMessage: {
        lastName: "",
        firstName: "",
        phone: "",
        sex: "",
        birthday: "",
        address: "",
      },
    };
  },

  async created() {
    const res = await axios.get(`/info/${this.user._id}`);
    this.userInfoId = res.data._id;
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      for (let key in this.userInfoForm) {
        if (empty(this.userInfoForm[key])) {
          this.errorMessage[key] = "Mục này không được rỗng";
          this.isSubmit = false;
        } else {
          this.errorMessage[key] = "";
          this.isSubmit = true;
        }
      }

      if (this.isSubmit === true) {
        this.modal = true;
      }
    },

    async handlePut() {
      this.userInfoForm.userId = this.user._id;

      const res = await axios.put(
        `/info/${this.userInfoId}`,
        this.userInfoForm
      );
      console.log(res);
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style>
@import "./customerContentEdit.css";
</style>
