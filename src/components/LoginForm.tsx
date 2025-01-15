"use client";
import { login } from "@/actions/login";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginForm() {
  const [loginError, setLoginError] = useState("");
  const onLogin = (form: FormData) => {
    setLoginError('');
    login(form).then((res) => {
      console.log(res, "res");
      if (res.success) {
        // showToast("Write a Review", res.message, "success");
        // onSubmitSuccess();
      } else {
        setLoginError(res.message);
      }
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
      {loginError && <p className="text-center text-red-600 mt-5">{loginError}</p>}
      <div className="text-center mt-4">
        <button type="submit" className="light-button-outline">
          LOGIN
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
