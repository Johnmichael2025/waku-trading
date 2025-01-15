
import React from "react";
import styles from "../../scss/login.module.scss";
import LoginForm from "@/components/LoginForm";

export default function page() {
  return (
    <div className={styles["bg-wrapper"]}>
      <div className={styles["login-form"]}>
        <h1>Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
}
