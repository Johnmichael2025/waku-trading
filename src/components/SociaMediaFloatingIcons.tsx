"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../scss/social-media-floating-icons.module.scss";
import Image from "next/image";
import clsx from "clsx";

export default function SociaMediaFloatingIcons() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={styles["social-media-floating-icons"]}>
      <ul>
        <li className={styles["btn-email"]}>
          <Link
            target="_blank"
            href="mailto:admin@alfabourse.com"
            rel="nofollow"
            title="Write to Alfabourse"
          >
            <div className={styles.icon}></div>
          </Link>
        </li>
        <li className={styles["btn-facebook"]}>
          <Link
            href="#"
            target="_blank"
            title="Follow Alfabourse Facebook"
          >
            <div className={styles.icon}></div>
          </Link>
        </li>
        <li className={styles["btn-whatsapp"]}>
          <div className={styles.icon}>
            <div className={styles["btn-whatsapp-code"]}>
              <Image
                style={{ width: "100%", height: "auto" }}
                src="/floating-whats-app-icon.png"
                width={100}
                height={100}
                className="max-w-full"
                alt="What's app QR code"
              />
            </div>
          </div>
        </li>
        <li className={styles["btn-wechat"]}>
          <div className={styles.icon}></div>
          <div className={styles["btn-wechat-code"]}>
            <Image
              style={{ width: "100%", height: "auto" }}
              src="/floating-we-chat-icon.png"
              width={100}
              height={100}
              className="max-w-full"
              alt="WeChat QR code"
            />
          </div>
        </li>
        <li
          onClick={scrollToTop}
          className={clsx(
            styles["back-top"],
            scrollPosition > 0 ? styles["fade-in"] : styles["fade-out"]
          )}
        >
          <span></span>
        </li>
      </ul>
    </div>
  );
}
