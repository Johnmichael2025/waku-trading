import React from "react";
import styles from "../../scss/login.module.scss";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles["bg-wrapper"]}>
      <div className={styles["login-form"]}>
        <h1>Sign in</h1>
        <form>
          <div className="flex flex-col gap-10">
            <div>
              <label htmlFor="email">Email Address</label>
              <input required type="email" placeholder="Your email address" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input required type="password" placeholder="Your Password" />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="light-button-outline">
              LOGIN
            </button>
          </div>

          <div className="flex justify-between mt-6">
            <h4>
              Don&apos;t have an account? &nbsp;<Link href="/sign-up">Sign up</Link>
            </h4>
            <Link href="/forgot-password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
