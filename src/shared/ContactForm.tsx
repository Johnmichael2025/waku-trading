"use client";
import React, { useState } from "react";
import styles from "../scss/contact-form.module.scss";
import { contact } from "@/actions/contact";

export default function ContactForm() {
  const [contactError, setContactError] = useState("");
  const onSendEmail = (form: FormData) => {
    console.log(form, "form");
    setContactError("");
    contact(form).then((res) => {
      console.log(res, "res");
      if (res.success) {
      } else {
        setContactError(res.message);
      }
    });
  };

  return (
    <form action={onSendEmail} className={styles.form}>
      <div className="flex flex-col gap-10">
        <div>
          <input name="name" required type="text" placeholder="Name" />
        </div>
        <div>
          <input name="email" required type="text" placeholder="Email" />
        </div>
        <div>
          <textarea name="message" required placeholder="Message" />
        </div>
      </div>
      {contactError && (
        <p className="text-center text-red-600 my-5">{contactError}</p>
      )}
      <div className="mt-4">
        <button type="submit" className="light-button-outline">
          Contact Us
        </button>
      </div>
    </form>
  );
}
