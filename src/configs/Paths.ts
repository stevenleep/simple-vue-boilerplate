export const Paths = {
  Root: "/",

  Home: "/home",
  About: "/about",
  Contact: "/contact",
  NotFound: "/404",
  Dashboard: "/dashboard",

  Login: "/login",
  Register: "/register",
  ResetPassword: "/reset-password",
  ForgotPassword: "/forgot-password",
  VerifyEmail: "/verify-email",
} as const;

export type OptionalPaths = keyof typeof Paths;
export type PathsValues = (typeof Paths)[OptionalPaths];
