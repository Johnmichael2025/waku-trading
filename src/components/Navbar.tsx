"use client";
import Image from "next/image";
import React from "react";
import styles from "./../scss/Navbar.module.scss";
import logoImg from "../../public/logo.webp";
import { NAV_ITEMS } from "../constants/nav-items.constant";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  const status = session?.status;
  console.log(session, "session");

  const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut({callbackUrl: '/login'});
  } 

  return (
    <div className={styles["sticky-wrapper"]}>
      <div className={styles["menu-sticky"]}>
        <div className={styles["row-table"]}>
          <div className="col-cell header-logo">
            <div className="logo-area sticky-logo">
              <Link href="/" rel="home">
                <Image width={100} height={50} src={logoImg} alt="Logo" />
              </Link>
            </div>
          </div>

          <div className={styles.navbar}>
            <ul className={styles["parent-list"]}>
              {NAV_ITEMS.map((item) => (
                <li
                  className={item.children ? styles["parent-item"] : ""}
                  key={item.label}
                >
                  <Link href={item.link}>{item.label}</Link>
                  {item.children && (
                    <ul className={styles["sub-menu"]}>
                      {item.children.map((subMenu) => (
                        <li key={subMenu.label}>
                          <Link href={subMenu.link}>{subMenu.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              {status !== "authenticated" ? (
                <>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/sign-up">Sign up</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link onClick={onLogout} href="#">Logout</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
