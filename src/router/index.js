import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/home/HomePage";
import Products from "../page/products/ProductsPage";
import Customer from "../page/customer/CustomerPage";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },

  {
    path: "/customer/:item",
    component: Customer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
