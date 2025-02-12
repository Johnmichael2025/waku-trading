import Image from "next/image";
import Link from "next/link";
import React from "react";

type DashboardCartItemProps = {
  title: string;
  count: number;
  image: string;
  link: string;
};
export default function DashboardCardItem({
  title,
  count,
  image,
  link,
}: DashboardCartItemProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-center">
          <Image
            src={`/client-portal/${image}`}
            width={45}
            height={45}
            alt=""
          />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {title}
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {count}
            </h4>
          </div>
          <Link href={link}>
            <span className="inline-flex items-center min-w-[120px] py-2 justify-center rounded-full font-medium text-sm bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
              View
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
