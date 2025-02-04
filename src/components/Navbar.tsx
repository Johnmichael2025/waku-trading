"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./../scss/Navbar.module.scss";
import logoImg from "../../public/logo.webp";
import { NAV_ITEMS } from "../constants/nav-items.constant";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { isAdminPortal, isClientPortal } from "@/utils/is-portal";
import { ADMINS } from "@/constants/admins.constant";
export default function Navbar() {
  const pathname = usePathname();
  const session = useSession();
  const status = session?.status;
  const [stickyNav, setStickyNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyNav(window.pageYOffset > 105 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div
      style={{ left: isClientPortal(pathname) ? "270px" : 0 }}
      className={clsx(
        styles["sticky-wrapper"],
        stickyNav && !isClientPortal(pathname) ? styles.sticky : "",
        isAdminPortal(pathname) ? "hidden" : ""
      )}
    >
      <div
        style={{
          boxShadow: isClientPortal(pathname)
            ? "0px 0px 5px 2px rgba(0, 0, 0, 0.3)"
            : "",
        }}
        className={styles["menu-sticky"]}
      >
        <div className={styles["row-table"]}>
          <div className="col-cell header-logo">
            <div className="logo-area sticky-logo">
              <Link href="/" rel="home">
                <Image width={100} height={50} src={logoImg} alt="Logo" />
              </Link>
            </div>
          </div>

          <div
            className={clsx(
              styles.navbar,
              isClientPortal(pathname) ? styles["client-portal"] : ""
            )}
          >
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
                <>
                  {!isClientPortal(pathname) && (
                    <li>
                      {ADMINS.includes(session.data.user?.email || "") ? (
                        <Link href="/admin-portal">Admin Portal</Link>
                      ) : (
                        <Link href="/client-portal">Client Portal</Link>
                      )}
                    </li>
                  )}

                  <li>
                    <Link onClick={onLogout} href="#">
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
