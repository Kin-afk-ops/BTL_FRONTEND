import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/main.css";
import "./css/grid.css";
import "./css/customSwiper.css";
import "../src/assets/icon/fontawesome/css/all.min.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
