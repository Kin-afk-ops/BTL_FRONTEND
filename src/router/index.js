import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/home/HomePage";
import Products from "../page/products/ProductsPage";
import Customer from "../page/customer/CustomerPage";
import Product from "../page/product/ProductPage";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
    children: [
      {
        path: ":item",
        component: () => import("../components/list/List"),
      },
    ],
  },

  {
    path: "/customer",
    component: Customer,
    children: [
      {
        name: "CustomerContentInfo",
        path: "info",
        component: () =>
          import(
            "../components/customerContent/customerContentInfo/CustomerContentInfo"
          ),
      },

      {
        name: "CustomerContentEdit",
        path: "edit",
        component: () =>
          import(
            "../components/customerContent/customerContentEdit/CustomerContentEdit"
          ),
      },

      {
        name: "CustomerContentAccount",
        path: "account",
        component: () =>
          import(
            "../components/customerContent/customerContentAccount/CustomerContentAccount"
          ),
      },

      {
        name: "CustomerContentOrder",
        path: "order",
        component: () =>
          import(
            "../components/customerContent/customerContentOrder/CustomerContentOrder"
          ),
      },
    ],
  },
  {
    path: "/product",
    component: Product,
    children: [
      {
        path: ":path",
        component: () => import("../components/productInfo/ProductInfo"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
