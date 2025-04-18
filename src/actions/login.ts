

import { LoginCredential } from "@/models/login-credential.model";
import { signIn } from "next-auth/react";

export async function login(cred: LoginCredential) {
  const { email, password } = cred;

  return await signIn("credentials", {
    email,
    password, 
    redirect: false,
  });
}