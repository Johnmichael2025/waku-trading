import { CLIENT_PORTAL_NAVIGATION } from '@/constants/client-portal-navigation.constant'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../scss/client-portal-sidebar.module.scss';

export default function ClientPortalNavigation() {
  return (
    <aside
      id="logo-sidebar"
      className={clsx("fixed top-0 left-0 z-40 w-[270px] h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0", styles.sidebar)}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {CLIENT_PORTAL_NAVIGATION.map((item) => (
            <li key={item.label}>
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
        </ul>
      </div>
    </aside>
  )
}
