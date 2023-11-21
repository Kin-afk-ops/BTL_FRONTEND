import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/home/HomePage";
import Products from "../page/products/ProductsPage";
import Customer from "../page/customer/CustomerPage";
import Product from "../page/product/ProductPage";
import Cart from "../page/cart/CartPage";
import Pay from "../page/pay/PayPage";
import Auth from "../page/auth/AuthPage";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      "header-top": () => import("../components/headerTop/HeaderTop"),
      "footer-bottom": () => import("../components/footerBottom/FooterBottom"),
    },
  },
  {
    path: "/products",
    components: {
      default: Products,
      "header-top": () => import("../components/headerTop/HeaderTop"),
      "footer-bottom": () => import("../components/footerBottom/FooterBottom"),
    },
    children: [
      {
        path: ":item",
        component: () => import("../components/list/List"),
      },
    ],
  },

  {
    path: "/customer",
    components: {
      default: Customer,
      "header-top": () => import("../components/headerTop/HeaderTop"),
      "footer-bottom": () => import("../components/footerBottom/FooterBottom"),
    },
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
    components: {
      default: Product,
      "header-top": () => import("../components/headerTop/HeaderTop"),
      "footer-bottom": () => import("../components/footerBottom/FooterBottom"),
    },
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
    path: "/cart/:id",
    components: {
      default: Cart,
      "header-top": () => import("../components/headerTop/HeaderTop"),
      "footer-bottom": () => import("../components/footerBottom/FooterBottom"),
    },
  },
  {
    path: "/pay/:method",
    components: {
      default: Pay,
      "header-top": () => import("../components/headerTop/HeaderTop"),
      "footer-bottom": () => import("../components/footerBottom/FooterBottom"),
    },
    name: "payMethod",
  },

  {
    path: "/auth",
    component: Auth,
    children: [
      {
        name: "register",
        path: "register",
        component: () => import("../components/auth/register/Register"),
      },

      {
        name: "login",
        path: "login",
        component: () => import("../components/auth/login/Login"),
      },

      {
        name: "forgetPassword",
        path: "forget-password",
        component: () =>
          import("../components/auth/forgetPassword/ForgetPassword"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
export default router;
