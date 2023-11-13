<template>
  <router-link to="/" class="link">
    <div class="arrow__home">
      <i class="fa-solid fa-arrow-left-long"></i>
      <p>Về trang chủ</p>
    </div>
  </router-link>
  <div class="main__container register__container">
    <h1 class="register__title main__title">Đăng nhập</h1>
    <hr />

    <div class="register__content">
      <form class="register__form">
        <label for="">Email</label>
        <input placeholder="Nhập Email" type="text" />

        <label for="">Mật khẩu</label>
        <input placeholder="Nhập mật khẩu" type="password" />

        <router-link to="/auth/forget-password" class="link forget__password">
          Quên mật khẩu
        </router-link>

        <button class="main__btn register__btn--main">Đăng nhập</button>
        <router-link to="/auth/login" class="link">
          <button class="main__btn register__btn--extra">
            Đăng ký
          </button></router-link
        >
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
