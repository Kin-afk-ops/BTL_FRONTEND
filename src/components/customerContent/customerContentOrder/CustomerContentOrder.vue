<template>
  <div class="content__order col c-9 main__container">
    <p class="content__order--empty" v-if="emptyOrder">Không có đơn hàng!</p>

    <div v-else>
      <ul class="content__order--list">
        <li class="content__order--list-item row">
          <img
            class="content__order--img"
            src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg"
            alt=""
          />
          <div class="content__order--desc c-8">
            <p class="content__order--title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
            </p>

            <p class="content__order--quality">Số lượng: 1</p>
          </div>

          <div class="content__order--price c-2">66.000đ</div>
        </li>
        <hr />
      </ul>

      <div class="content__order--btn">
        <button class="content__order--btn-delete" @click="modalDisplay">
          Huỷ đơn hàng
        </button>
      </div>
    </div>
    <div class="customer__modal hidden" ref="modalHideBtn">
      <div class="customer__modal--title">Bạn muốn huỷ đơn hàng này?</div>
      <div class="customer__modal--content">
        <button class="customer__modal--hide" @click="modalHide">Đóng</button>
        <button class="customer__modal--agree">Huỷ đơn hàng</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomerContentOrder",
  data() {
    return {
      emptyOrder: false,
    };
  },
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
@import "./customerContentOrder.css";
@import "../customerContent.css";
</style>
