<template>
  <div class="customer__notification col c-9 main__container">
    <ul class="customer__notification--list" v-if="length !== 0">
      <li
        class="customer__notification--item"
        v-for="noti in notification.notify"
        :key="noti._id"
      >
        <router-link :to="noti.path" class="link">
          <p class="customer__notification--title">
            {{ noti.title }}
          </p>

          <p class="customer__notification--content">
            {{ noti.content }}
          </p>
        </router-link>
        <i class="fa-solid fa-trash" @click="modalDisplay(noti._id)"></i>
      </li>
      <hr />
    </ul>

    <div v-else class="main__title">Không có thông báo</div>

    <div class="customer__modal" :class="{ hidden: !modal }">
      <div class="customer__modal--title">
        Bạn chắc mình đã đọc thông báo quan trọng này
      </div>
      <div class="customer__modal--content">
        <button class="customer__modal--hide" @click="modal = false">
          Chưa
        </button>
        <button class="customer__modal--agree" @click="handleDelete">
          Xoá thông báo
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      notification: {},
      length: 0,
      modal: false,
      idDelete: "",
    };
  },

  async created() {
    try {
      const res = await axios.get(`/notification/${this.user._id}`);
      this.notification = res.data;
      this.length = this.notification.notify.length;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    modalDisplay(id) {
      this.modal = true;
      this.idDelete = id;
    },

    async handleDelete() {
      const res = await axios.delete(
        `/notification/delete/${this.notification._id}/${this.idDelete}`
      );
      alert(res.data);
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style>
@import "./customerContentNotification.css";
</style>
