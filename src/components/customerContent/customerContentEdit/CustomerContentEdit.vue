<template>
  <div class="customer__edit col c-9 main__container">
    <form action="">
      <div>
        <label for="">Cật nhật ảnh đại diện</label>
        <input class="customer__edit--input" type="file" name="" id="" />
      </div>
      <div>
        <label for="">Họ</label>
        <input class="customer__edit--input" type="text" />
        <label for="">Tên</label>
        <input class="customer__edit--input" type="text" />
        <label for="">Số điện thoại</label>
        <input class="customer__edit--input" type="text" />
        <label for="">Giới tính</label>
        <div>
          <input type="radio" name="gender" value="Nam" />
          <label for="">Nam</label>
          <input type="radio" name="gender" value="Nữ" />
          <label for="">Nữ</label>
        </div>
        <label for="">Ngày sinh</label>
        <input class="customer__edit--input" type="date" />
        <label for="">Địa chỉ</label>
        <input class="customer__edit--input" type="text" />
      </div>
    </form>
  </div>
</template>
<style>
@import "./customerContentEdit.css";
</style>
