"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../scss/client-portal-sidebar.module.scss";
import { usePathname } from "next/navigation";
import { ADMINS } from "@/constants/admins.constant";
import { signOut, useSession } from "next-auth/react";

type NavLink = {
  label: string;
  link: string;
  icon: string;
};

type SidebarNavigationProps = {
  navLinks: NavLink[];
};
export default function SidebarNavigation({
  navLinks,
}: SidebarNavigationProps) {
  const pathname = usePathname();
  const session = useSession();

  const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <aside
        id="logo-sidebar"
        className={clsx(
          "fixed top-0 left-0 z-40 w-[270px] h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 hidden md:block",
          styles.sidebar
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navLinks.map((item) => (
              <li
                className={item.link === pathname ? styles.active : ""}
                key={item.label}
              >
                <Link
                  href={item.link}
                  className="flex items-center p-2 gap-2 text-white rounded-lg dark:text-white group"
                >
                  <Image
                    src={`/client-portal/${item.icon}`}
                    width={30}
                    height={30}
                    alt={item.label}
                  />
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            ))}
            {ADMINS.includes(session?.data?.user?.email || "") && (
              <li>
                <Link
                  onClick={onLogout}
                  href="#"
                  className="flex items-center p-2 gap-2 text-white rounded-lg dark:text-white group"
                >
                  <Image
                    src="/client-portal/logout.png"
                    width={30}
                    height={30}
                    alt="Logout"
                  />
                  <span className="ms-3">Logout</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </aside>
      <div
        style={{
          boxShadow:
            "0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px  rgba(0, 0, 0, 0.17),  0px -3px 5px rgba(0, 0, 0, 0.09)",
        }}
        className="flex md:hidden flex-wrap fixed bottom-0 left-0 right-0 bg-dark z-50 py-4 gap-4 items-center justify-center"
      >
        {navLinks.map((item) => (
          <Link href={item.link} key={item.label}>
            <div className="text-white flex flex-col justify-center items-center gap-2">
              <Image
                src={`/client-portal/${item.icon}`}
                width={25}
                height={25}
                alt={item.label}
              />
              <span className="text-sm">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
