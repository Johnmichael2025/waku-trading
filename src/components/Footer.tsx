"use client";
import React from "react";
import styles from "../scss/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/logo.webp";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SociaMediaFloatingIcons from "./SociaMediaFloatingIcons";

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <footer
        className={clsx(
          styles.footer,
          pathname?.includes("client-portal") ? "ml-[270px] mt-10" : ""
        )}
      >
        <Link href="/" rel="home">
          <Image width={100} height={50} src={logoImg} alt="Logo" />
        </Link>
        <br />
        <p>
          Please note that by using this site, you agree to the company&apos;s
          terms and conditions. We also ask you to carefully review the
          Alfabourse policies that govern our provision of services. Trading in
          the market can lead to significant losses, and you should be prepared
          for this. We do not operate in countries where there are corresponding
          restrictions, such as the USA, Afghanistan, and China.
        </p>
        <hr className="my-10" />
        <p>©copyright 2025 Alfabourse. All rights reserved.</p>
      </footer>
      {!pathname?.includes("client-portal") && <SociaMediaFloatingIcons />}
    </>
  );
}
