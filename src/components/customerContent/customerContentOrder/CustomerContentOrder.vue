<template>
  <div class="content__order col c-9 main__container">
    <p class="content__order--empty" v-if="emptyOrder">Không có đơn hàng!</p>

    <div v-else>
      <!-- <ul class="content__order--list">
        <li class="content__order--list-item row">
          <img
            class="img__main"
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
      </ul> -->
      <h2>
        Xin lỗi! Chúng tôi chưa phát triển tính năng xem thông tin đơn hàng
        <br />Tính năng sẽ có trong phiên bản kế tiếp
      </h2>

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
        <button class="customer__modal--agree" @click="handleDelete">
          Huỷ đơn hàng
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "CustomerContentOrder",
  data() {
    return {
      emptyOrder: false,
    };
  },

  async created() {
    const res = await axios.get(`/order/find/${this.user._id}`);

    console.log(res);
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

    handleDelete() {
      alert("Đã gửi yêu cầu xoá đơn hàng");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style>
@import "./customerContentOrder.css";
</style>
