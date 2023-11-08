<template>
  <div class="col c-3 main__container">
    <h1 class="customer__title">Tài khoản</h1>
    <hr />
    <div class="customer__nav--content">
      <ul>
        <li>
          <router-link
            to="/customer/info"
            class="customer__nav--router"
            active-class="active"
            @click="changNav()"
          >
            Thông tin của bạn
          </router-link>
        </li>

        <hr />

        <li>
          <router-link
            to="/customer/edit"
            class="customer__nav--router"
            active-class="active"
            @click="changNav()"
          >
            Chỉnh sửa hồ sơ
          </router-link>
        </li>
        <hr />

        <li>
          <router-link
            to="/customer/account"
            class="customer__nav--router"
            active-class="active"
            @click="changNav()"
          >
            Chỉnh sửa tài khoản
          </router-link>
        </li>
        <hr />

        <li>
          <router-link
            to="/customer/order"
            class="customer__nav--router"
            active-class="active"
            @click="changNav()"
          >
            Đơn hàng của tôi
          </router-link>
        </li>
        <hr />

        <li>
          <router-link
            to="/customer/voucher"
            class="customer__nav--router"
            active-class="active"
            @click="changNav()"
          >
            Ví Voucher
          </router-link>
        </li>
        <hr />

        <li>
          <router-link
            to="/customer/notification"
            class="customer__nav--router"
            active-class="active"
            @click="changNav()"
          >
            Thông báo
          </router-link>
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: {
        info: false,
        edit: false,
        account: false,
        order: false,
        voucher: false,
        notify: false,
      },
    };
  },

  methods: {
    changNav() {
      this.isActive.info = !this.isActive.info;
      if (this.isActive.info) {
        console.log(this);
      }
    },
  },
};
</script>

<style>
@import "./customerNav.css";
</style>
