"use client";
import React, { useActionState, useEffect } from "react";
import styles from "../scss/contact-form.module.scss";
import { contact } from "@/actions/contact";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@heroui/react";

const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function ContactForm() {
  const [state, formAction, pending] = useActionState(contact, initialState);
  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <form action={formAction} className={styles.form}>
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
        <div className="mt-4">
          <Button
            isLoading={pending}
            type="submit"
            className="light-button-outline"
          >
            Contact Us
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
