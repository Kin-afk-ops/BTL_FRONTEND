<template>
  <div class="product__info main__container" v-if="bookInfoData.supplier">
    <h2 class="main__title">Thông tin sản phẩm</h2>

    <div class="product__info--content row no-gutters">
      <div class="col c-6 row no-gutters product__info--top">
        <div class="col c-6 product__info--top-left">
          <p>Mã hàng</p>
          <p>Tên nhà cung cấp</p>
          <p>Tác giả</p>
          <p>Nhà xuất bản</p>
          <p>Năm xuất bản</p>
          <p>Trọng lượng</p>
          <p>Kích thước bao bì</p>
          <p>Số trang</p>
          <p>Hình thức</p>
        </div>
        <div class="col c-6">
          <p>{{ bookInfoData.bookId }}</p>
          <p>{{ bookInfoData.infoBook.supplier }}</p>
          <p>{{ bookInfoData.infoBook.auth }}</p>
          <p>{{ bookInfoData.infoBook.publisher }}</p>
          <p>{{ bookInfoData.infoBook.publishingYear }}</p>
          <p>{{ bookInfoData.infoBook.weight }}</p>
          <p>{{ bookInfoData.infoBook.size }}</p>
          <p>{{ bookInfoData.infoBook.numberPage }}</p>
          <p>{{ bookInfoData.infoBook.form }}</p>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
export default {
  props: ["bookInfoData"],

  created() {
    console.log(this.bookInfoData);
  },
};
</script>
<style>
@import "./productInfo.css";
</style>
