<template>
  <div class="customer__info col c-9 main__container">
    <img
      src="../../../assets/default/default_avatar.png"
      alt=""
      class="customer__info--avatar"
    />

    <div class="customer__info--info">
      <p>
        <i class="fa-solid fa-circle-info"></i>
        {{ userName }}
      </p>
      <p>
        <i class="fa-solid fa-envelope"></i>
        {{ user.email }}
      </p>
      <p>
        <i class="fa-solid fa-phone"></i>
        {{ userInfo.phone }}
      </p>
      <p>
        <i class="fa-solid fa-person"></i>
        {{ userInfo.sex }}
      </p>
      <p>
        <i class="fa-solid fa-cake-candles"></i>
        {{ birthday }}
      </p>
      <p>
        <i class="fa-solid fa-location-dot"></i>
        {{ userInfo.address }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "CustomerContentInfo",

  data() {
    return {
      userInfo: {},
      userName: "",
      birthday: "",
    };
  },

  async created() {
    try {
      const res = await axios.get(`info/${this.user._id}`);
      this.userInfo = res.data;
      this.userName = `${this.userInfo.lastName} ${this.userInfo.firstName}`;
      this.birthday = this.userInfo.birthday.split("-").reverse().join("-");
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
@import "./customerContentInfo.css";
</style>
