import React from "react";
import styles from "../scss/banner.module.scss";

type BannerProps = {
  title: string;
  description: string;
  img: string
};
export default function Banner({ title, description, img }: BannerProps) {
  return (
    <div style={{backgroundImage: `url(${img})`}} className={styles["banner-bg"]}>
      <h1>{title}</h1>
      <p className="mt-8">
        {description}
      </p>
    </div>
  );
}
