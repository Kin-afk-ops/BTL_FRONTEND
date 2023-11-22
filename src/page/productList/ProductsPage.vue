<template>
  <div class="grid wide">
    <!-- <Filter @change="handleChange" /> -->
    <router-view :title="title" :bookData="bookData" />
  </div>
</template>

<script>
// import Filter from "../../components/filter/Filter.vue";
import axios from "axios";
export default {
  name: "Products",
  data() {
    return {
      title: "Sách được tìm kiếm",
      bookFilter: [],
    };
  },

  async created() {
    try {
      const res = await axios.get("/book");
      this.bookFilter = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    // Filter,
  },

  methods: {
    change(bookCate) {
      this.bookData = bookCate;
      console.log(bookCate);
    },
  },
  computed: {
    bookData() {
      return this.bookFilter.filter((b) =>
        b.name.toLowerCase().includes(this.$route.params.search.toLowerCase())
      );
    },
  },
};
</script>
