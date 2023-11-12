<template>
  <div class="cart__content main__container">
    <div class="cart__content--title main__title row no-gutters">
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <p class="c-5">Chọn tất cả sản phẩm</p>
      <p class="c-2 display__flex--center">Số lượng</p>
      <p class="c-2 display__flex--center">Thành tiền</p>
      <div
        class="cart__content--container-item-delete display__flex--center c-2"
      >
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
      </div>
    </div>
    <hr />

    <div class="cart__content--container">
      <ul class="cart__content--container-list">
        <li class="cart__content--container-item row no-gutters">
          <div
            class="cart__content--container-item-input display__flex--center c-1"
          >
            <input
              type="checkbox"
              @change="handleChangMoney($event)"
              value="1"
              v-model="selected"
            />
          </div>
          <img
            class="img__main c-1"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="cart__content--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022) 1
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="cart__content--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="cart__content--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
        <hr />

        <li class="cart__content--container-item row no-gutters">
          <div
            class="cart__content--container-item-input display__flex--center c-1"
          >
            <input
              type="checkbox"
              @change="handleChangMoney($event)"
              value="2"
              v-model="selected"
            />
          </div>
          <img
            class="img__main c-1"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="cart__content--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="cart__content--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="cart__content--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
        <hr />

        <li class="cart__content--container-item row no-gutters">
          <div
            class="cart__content--container-item-input display__flex--center c-1"
          >
            <input
              type="checkbox"
              @change="handleChangMoney($event)"
              value="3"
              v-model="selected"
            />
          </div>
          <img
            class="img__main c-1"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="cart__content--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="cart__content--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="cart__content--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
        <hr />

        <li class="cart__content--container-item row no-gutters">
          <div
            class="cart__content--container-item-input display__flex--center c-1"
          >
            <input
              type="checkbox"
              @change="handleChangMoney($event)"
              value="4"
              v-model="selected"
            />
          </div>
          <img
            class="img__main c-1"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="cart__content--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="cart__content--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="cart__content--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
        <hr />

        <li class="cart__content--container-item row no-gutters">
          <div
            class="cart__content--container-item-input display__flex--center c-1"
          >
            <input
              type="checkbox"
              @change="handleChangMoney($event)"
              value="5"
              v-model="selected"
            />
          </div>
          <img
            class="img__main c-1"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="cart__content--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="cart__content--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="cart__content--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
        <hr />

        <li class="cart__content--container-item row no-gutters">
          <div
            class="cart__content--container-item-input display__flex--center c-1"
          >
            <input
              type="checkbox"
              @change="handleChangMoney($event)"
              value="6"
              v-model="selected"
            />
          </div>
          <img
            class="img__main c-1"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="cart__content--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="cart__content--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="cart__content--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
        <hr />
      </ul>
    </div>
    <cart-delete :selected="selected" :modal="modal" @hidden="modal = false" />
  </div>
</template>
<script>
import CartDelete from "./CartDelete";

export default {
  data() {
    return {
      selectAll: false,
      selected: [],
      data: [1, 2, 3, 4, 5, 6],
      modal: false,
    };
  },

  components: {
    CartDelete,
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.data.forEach((d) => {
          this.selected.push(d);
        });
        this.$emit("change-money", this.selected);
      }
    },

    handleDelete() {
      if (this.selected.length !== 0) {
        this.modal = true;
      }
    },

    handleChangMoney(event) {
      if (event.target.checked) {
        this.$emit("change-money", this.selected);
      } else {
        this.$emit("change-money", this.selected);
      }
    },
  },
};
</script>
<style>
@import "./cartContent.css";
</style>
