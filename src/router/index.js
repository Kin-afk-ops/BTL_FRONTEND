import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/home/HomePage";
import Products from "../page/products/ProductsPage";
import Customer from "../page/customer/CustomerPage";
import Product from "../page/product/ProductPage";
import Cart from "../page/cart/CartPage";

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

      {
        name: "CustomerContentNotification",
        path: "notification",
        component: () =>
          import(
            "../components/customerContent/customerContentNotification/CustomerContentNotification"
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
        components: {
          "product-to-buy": () =>
            import("../components/productComponents/productToBuy/ProductToBuy"),

          "product-list-auth": () =>
            import("../components//listSlide/ListSlide"),

          "product-list-categories": () =>
            import("../components/listSlide/ListSlide"),

          "product-info": () =>
            import("../components/productComponents/productInfo/ProductInfo"),
          "product-desc": () =>
            import("../components/productComponents/productDesc/ProductDesc"),

          "product-evaluate": () =>
            import(
              "../components/productComponents/productEvaluate/ProductEvaluate"
            ),

          "product-comment": () =>
            import(
              "../components/productComponents/productComment/ProductComment"
            ),
        },
      },
    ],
  },
  {
    path: "/cart",
    children: [
      {
        path: "",
        component: Cart,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
