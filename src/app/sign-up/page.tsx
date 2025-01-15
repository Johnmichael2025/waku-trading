"use client";
import React from "react";
import styles from "../../scss/sign-up.module.scss";
import SignupForm from "@/components/SignupForm";

export default function page() {
  return (
    <div className={styles["bg-wrapper"]}>
      <div className={styles["signup-form"]}>
        <h1>Sign up</h1>
        <SignupForm />
      </div>
    </div>
  );
}
