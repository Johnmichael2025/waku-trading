import { NavItem } from "@/models/nav-item.model";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type NavItemMobileProps = {
  item: NavItem;
  onClose: () => void
};
export default function NavItemMobile({ item, onClose }: NavItemMobileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li
      className="py-2"
      style={{ borderBottom: "1px solid rgba(0, 0, 0, .06)" }}
    >
      <div className="flex justify-between">
        <Link href={item.link}>{item.label}</Link>
        {item.children && (
          <>
            {!isExpanded ? (
              <Image
                onClick={() => setIsExpanded(!isExpanded)}
                key={item.label}
                className="cursor-pointer"
                width={25}
                height={25}
                src="/plus.png"
                alt="Plus"
              />
            ) : (
              <Image
                onClick={() => setIsExpanded(!isExpanded)}
                key={item.label}
                className="cursor-pointer"
                width={25}
                height={25}
                src="/minus.png"
                alt="Minus"
              />
            )}
          </>
        )}
      </div>
      <ul
        className={`sub-menu ${(isExpanded && item.children) ? "expanded" : ""}`}
      >
        {item?.children?.map((subMenu) => (
          <li onClick={() => onClose()} key={subMenu.label}>
            <Link href={subMenu.link}>{subMenu.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
