import React from "react";
import styles from "../scss/contact-form.module.scss";

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <div className="flex flex-col gap-10">
        <div>
          <input required type="text" placeholder="Name" />
        </div>
        <div>
          <input required type="text" placeholder="Email" />
        </div>
        <div>
          <textarea required placeholder="Message" />
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="light-button-outline">Contact Us</button>
      </div>
    </form>
  );
}
