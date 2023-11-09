<template>
  <div class="customer__edit col c-9 main__container">
    <form action="">
      <div class="customer__edit--left">
        <label for="customer__edit--input">Cật nhật ảnh đại diện</label>
        <input
          class="customer__edit--input hidden"
          type="file"
          name=""
          id="customer__edit--input"
        />
        <img src="../../../assets/default/default_avatar.png" alt="" />
      </div>
      <div class="customer__edit--right">
        <label for="">Họ</label>
        <input class="customer__edit--input" type="text" />
        <label for="">Tên</label>
        <input class="customer__edit--input" type="text" />
        <label for="">Số điện thoại</label>
        <input class="customer__edit--input" type="text" />
        <label for="">Giới tính</label>
        <div class="customer__edit--right-gender">
          <input type="radio" name="gender" value="Nam" />
          <label for="">Nam</label>
          <input type="radio" name="gender" value="Nữ" />
          <label for="">Nữ</label>
        </div>
        <label for="">Ngày sinh</label>
        <input class="customer__edit--input" type="date" />
        <label for="">Địa chỉ</label>
        <input class="customer__edit--input" type="text" />
        <button
          class="customer__edit--button"
          type="submit"
          @click="modalDisplay"
        >
          Lưu thay đổi
        </button>
      </div>
    </form>

    <div class="customer__modal hidden" ref="modalHideBtn">
      <div class="customer__modal--title">Bạn có muốn thay đổi hồ sơ?</div>
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
@import "./customerContentEdit.css";
@import "../customerContent.css";
</style>
