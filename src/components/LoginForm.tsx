"use client";
import { login } from "@/actions/login";
import { LoginCredential } from "@/models/login-credential.model";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const [pending, setPending] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const onLogin = (form: FormData) => {
    const cred = { email: form.get("email"), password: form.get("password") } as LoginCredential;
    setLoginError("");
    setPending(true);
    login(cred).then((res) => {
      if (res?.ok) {
        router.push("/client-portal");
      } else {
        setLoginError(res?.error || "");
      }
      setPending(false);
    });
  };
  return (
    <form action={onLogin}>
      <div className="flex flex-col gap-10">
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
      </div>
      {loginError && (
        <p className="text-center text-red-600 mt-5">{loginError}</p>
      )}
      <div className="text-center mt-4">
        <button
          disabled={pending}
          type="submit"
          className="light-button-outline"
        >
          {pending ? "Loading..." : "LOGIN"}
        </button>
      </div>

      <div className="flex justify-between mt-6">
        <h4>
          Don&apos;t have an account? &nbsp;
          <Link href="/sign-up">Sign up</Link>
        </h4>
        <Link href="/forgot-password">Forgot password?</Link>
      </div>
    </form>
  );
}
