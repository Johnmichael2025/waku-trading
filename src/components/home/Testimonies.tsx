"use client";
import React from "react";
import styles from "./testimonies.module.scss";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TESTIMONIES } from "@/constants/testimonies.constant";
import Image from "next/image";

export default function Testimonies() {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className={styles["testimonial-bg"]}></div>
      <div className={styles["testimonies-wrapper"]}>
        <h3>Reviews</h3>
        <h2>What clients think about Alfabourse</h2>
        <div className={styles["swiper-wrapper"]}>
          <Swiper
            navigation
            pagination={{
              type: "bullets",
              clickable: true,
              renderBullet: () => {
                return `<span class="swiper-pagination-bullet"></span>`;
              },
            }}
            speed={1000}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {TESTIMONIES.map((testimony) => (
              <SwiperSlide
                className={styles["slide-item"]}
                key={testimony.name}
              >
                <div className="w-full">
                  <p>{testimony.description}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      width={80}
                      height={80}
                      alt={testimony.name}
                      src={testimony.avatar}
                      className="rounded-full"
                    />
                    <span>{testimony.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
