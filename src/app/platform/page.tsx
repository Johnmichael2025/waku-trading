import Banner from "@/shared/Banner";
import Image from "next/image";
import React from "react";
import webTraderImg from "../../../public/platform/web-trader.png";
import styles from "../../scss/platform.module.scss";
import { BEST_TERMS } from "@/constants/best-terms.constant";
import clsx from "clsx";
import { PLATFORM_FAQS } from "@/constants/platform-faqs.constant";
import FaqItem from "@/shared/FaqItem";

export default function page() {
  return (
    <>
      <Banner
        title="Platform"
        description="Work on an advanced browser terminal that will help you stay connected to the market."
        img="/economic-calendar-bg.jpg"
      />
      <section className={styles["image-text-section"]}>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image
              src={webTraderImg}
              width={525}
              height={320}
              alt="Web trader"
            />
          </div>
          <div className="flex-1">
            <h1>Discover WebTrader</h1>
            <p>
              WebTrader is an innovative tool designed for traders of all
              levels. It has advanced features and access to global markets,
              allowing each user to maximize their potential.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row flex-wrap gap-5 p-5 md:p-10 items-center justify-center">
          {BEST_TERMS.map((term, i) => (
            <div
              className={clsx(styles["best-term"], styles[`term-${i + 1}`])}
              key={i}
            >
              <h2>{term.title}</h2>
              <p>{term.description}</p>
              <div className="flex justify-between mt-10">
                <Image
                  src={`/platform/${term.icon}`}
                  width={50}
                  height={50}
                  alt={term.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles["image-text-section"]}>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1>Experience trading on WebTrader</h1>
            <p>
              The intuitive and user-friendly interface makes the platform
              accessible to all. Navigation is optimized for quick access to all
              tools and functions, keeping the ease of use.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={webTraderImg}
              width={525}
              height={320}
              alt="Web trader"
            />
          </div>
        </div>
      </section>
      <section>
        <div className={styles["market-analysis"]}>
          <div className={styles["background-area"]}>
            <h1>Analyse assets</h1>
            <p>
              The platform provides a wide array of analytical tools, including
              price charts, technical indicators and news feeds, allowing
              traders to conduct fundamental and technical analysis of the
              markets.{" "}
            </p>
            <p className="mt-5">
              Here you will find numerous opportunities for diverse trading. The
              platform provides everything needed for effective operations from
              instant order execution to various risk management strategies.
            </p>
          </div>
          <div className={styles["trading-widget-wrapper"]}>
            <div>
              <iframe
                height={450}
                src="https://www.tradingview-widget.com/embed-widget/market-quotes/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A450%2C%22showSymbolLogo%22%3Atrue%2C%22symbolsGroups%22%3A%5B%7B%22name%22%3A%22FINANCE%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22NYSE%3AJPM%22%2C%22displayName%22%3A%22JPMorgan%20Chase%20%26%20Co.%22%7D%2C%7B%22name%22%3A%22NYSE%3AWFC%22%2C%22displayName%22%3A%22Wells%20Fargo%22%7D%2C%7B%22name%22%3A%22NYSE%3ABAC%22%2C%22displayName%22%3A%22Bank%20of%20America%20Corporation%22%7D%2C%7B%22name%22%3A%22NYSE%3AHSBC%22%2C%22displayName%22%3A%22HSBC%20Holdings%20PLC%22%7D%2C%7B%22name%22%3A%22NYSE%3AC%22%2C%22displayName%22%3A%22Citigroup%20Inc%22%7D%2C%7B%22name%22%3A%22NYSE%3AMA%22%2C%22displayName%22%3A%22Mastercard%20Incorporated%22%7D%5D%7D%2C%7B%22name%22%3A%22TECHNOLOGY%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22NASDAQ%3AAAPL%22%2C%22displayName%22%3A%22Apple%22%7D%2C%7B%22name%22%3A%22NASDAQ%3AGOOGL%22%2C%22displayName%22%3A%22Google%20Inc%20(%D0%93%D1%83%D0%B3%D0%BB)%22%7D%2C%7B%22name%22%3A%22NASDAQ%3AMSFT%22%2C%22displayName%22%3A%22Microsoft%20Corporation%20(%D0%9C%D0%B0%D0%B9%D0%BA%D1%80%D0%BE%D1%81%D0%BE%D1%84%D1%82)%22%7D%2C%7B%22name%22%3A%22NASDAQ%3AFB%22%2C%22displayName%22%3A%22Meta%20Platforms%20Inc%22%7D%2C%7B%22name%22%3A%22NYSE%3AORCL%22%2C%22displayName%22%3A%22Oracle%20Corporation%22%7D%2C%7B%22name%22%3A%22NASDAQ%3AINTC%22%2C%22displayName%22%3A%22Intel%20(%D0%98%D0%BD%D1%82%D0%B5%D0%BB)%22%7D%5D%7D%2C%7B%22name%22%3A%22SERVICE%20SECTOR%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22NASDAQ%3AAMZN%22%2C%22displayName%22%3A%22Amazon%20(%D0%90%D0%BC%D0%B0%D0%B7%D0%BE%D0%BD)%22%7D%2C%7B%22name%22%3A%22NYSE%3ABABA%22%2C%22displayName%22%3A%22Alibaba%20Group%20Holdings%20Ltd.%20(%D0%90%D0%BB%D0%B8%D0%B1%D0%B0%D0%B1%D0%B0)%22%7D%2C%7B%22name%22%3A%22NYSE%3AT%22%2C%22displayName%22%3A%22AT%26T%20Inc%22%7D%2C%7B%22name%22%3A%22NYSE%3AWMT%22%2C%22displayName%22%3A%22Walmart%20Inc.%22%7D%2C%7B%22name%22%3A%22NYSE%3AV%22%2C%22displayName%22%3A%22Visa%20Inc%20(%D0%92%D0%B8%D0%B7%D0%B0)%22%7D%5D%7D%5D%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-quotes%22%2C%22page-uri%22%3A%22essentrafinance.com%2Fplatform%22%7D"
                lang="en"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles['faq-wrapper']}>
          <h1>FAQ</h1>
          {PLATFORM_FAQS.map((faq, i) => (
            <FaqItem question={faq.q} answer={faq.a} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
