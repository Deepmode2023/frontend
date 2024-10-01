import { lazy } from "react";
import AuthLayout from "./ui/auth-layout";
export { AuthNavbar } from "./ui/auth-navbar";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const SignInForm = lazy(async () => {
  return delay(1000).then(() => import("./ui/form/signin"));
});

const RegistrationForm = lazy(async () => {
  return delay(1000).then(() => import("./ui/form/registration"));
});

export { AuthLayout, SignInForm, RegistrationForm };
