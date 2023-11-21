<template>
  <router-link to="/auth/login" class="link">
    <div class="arrow__home">
      <i class="fa-solid fa-arrow-left-long"></i>
      <p>Về trang Đăng nhập</p>
    </div>
  </router-link>
  <div class="main__container register__container">
    <h1 class="register__title main__title">Quên mật khẩu</h1>
    <hr />

    <div class="register__content">
      <form class="register__form">
        <label for="">Email</label>
        <input placeholder="Nhập Email" type="text" />

        <label for="">Số điện thoại</label>
        <input placeholder="Nhập số điện thoại" type="text" />

        <button class="main__btn register__btn--main">
          Xin cấp lại mật khẩu mới
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>
<style>
@import "../auth.css";
</style>
