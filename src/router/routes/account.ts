import { RouteRecordRaw } from "vue-router";
import { Paths } from "@/configs";

const AccountRoutes: RouteRecordRaw[] = [
  {
    path: Paths.Login,
    name: "Login",
    component: () => import("@/views/account/index.vue"),
    meta: { frame: false },
  },
  {
    path: Paths.Register,
    name: "Register",
    component: () => import("@/views/account/Login.vue"),
  },
  {
    path: Paths.ResetPassword,
    name: "ResetPassword",
    component: () => import("@/views/account/Login.vue"),
  },
  {
    path: Paths.ForgotPassword,
    name: "ForgotPassword",
    component: () => import("@/views/account/Login.vue"),
  },
  {
    path: Paths.VerifyEmail,
    name: "VerifyEmail",
    component: () => import("@/views/account/Login.vue"),
  },
];

export default AccountRoutes;
