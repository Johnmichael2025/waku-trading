import Banner from "@/shared/Banner";
import Image from "next/image";
import React from "react";
import styles from "../../scss/contact-us.module.scss";
import clsx from "clsx";
import ContactForm from "@/shared/ContactForm";

export default function page() {
  return (
    <>
      <Banner
        title="Support"
        description="Our specialists work 24/5 to ensure that every trader can receive a timely answer to their question. Contact us, and we will write to you promptly"
        img="/contact-us/support-bg.jpg"
      />
      <section>
        <div className="flex flex-wrap gap-5 p-20 items-center justify-center">
          <div
            className={clsx(styles["contact-item"], styles["opening-hours"])}
          >
            <Image
              src="/contact-us/opening-hours-icon.png"
              width={80}
              height={80}
              alt="Opening hours"
            />
            <h2>Opening hours</h2>
            <h4>Mon - Fri: 10:00 - 19:00</h4>
          </div>
          <div className={clsx(styles["contact-item"], styles["email"])}>
            <Image
              src="/contact-us/email-icon.png"
              width={80}
              height={80}
              alt="Contact email"
            />
            <h2>Email</h2>
            <h4>admin@alfabourse.com</h4>
          </div>
          <div className={clsx(styles["contact-item"], styles["telephone"])}>
            <Image
              src="/contact-us/telephone-icon.png"
              width={80}
              height={80}
              alt="Contact telephone"
            />
            <h2>Telephone</h2>
            <h4>+441217900683</h4>
            <h4>+41779063821</h4>
          </div>
        </div>
      </section>
      <section className={styles['contact-form-section']}>
        <h1>Contact Us</h1>
        <ContactForm />
      </section>
    </>
  );
}
