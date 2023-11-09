<template>
  <div class="customer__account col c-9 main__container">
    <form action="">
      <label for="">Email</label>
      <input type="text" />
      <label for="">Mật khẩu</label>
      <input type="password" />
      <label for="">Nhập lại mật khẩu</label>
      <input type="password" />
      <button
        type="submit"
        class="customer__account--btn"
        @click="modalDisplay"
      >
        Lưu thay đổi
      </button>
    </form>

    <div class="customer__modal hidden" ref="modalHideBtn">
      <div class="customer__modal--title">Bạn có muốn thay đổi tài khoản?</div>
      <div class="customer__modal--content">
        <button class="customer__modal--hide" @click="modalHide">Huỷ</button>
        <button class="customer__modal--agree">Thay đổi</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    modalDisplay(e) {
      e.preventDefault();
      this.$refs.modalHideBtn.classList.remove("hidden");
      this.$refs.modalHideBtn.classList.add("display__flex");
    },

    modalHide() {
      this.$refs.modalHideBtn.classList.remove("display__flex");
      this.$refs.modalHideBtn.classList.add("hidden");
    },
  },
};
</script>
<style>
@import "./customerContentAccount.css";
@import "../customerContent.css";
</style>
