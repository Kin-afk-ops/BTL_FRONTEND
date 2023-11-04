import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/home/HomePage";
import Products from "../page/products/ProductsPage";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
