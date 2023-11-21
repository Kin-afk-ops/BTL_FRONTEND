import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/main.css";
import "./css/grid.css";
import "./css/customSwiper.css";
import "../src/assets/icon/fontawesome/css/all.min.css";

import axios from "axios";
import store from "./store";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common["token"] =
  "Linh " + localStorage.getItem("token");

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
