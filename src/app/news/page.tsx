import Banner from '@/shared/Banner'
import React from 'react'
import styles from "../../scss/news.module.scss";

export default function page() {
  return (
    <>
      <Banner
        title="News"
        description="We have the latest news to keep you informed about all the recent events in the financial markets. Monitor your assets and make informed decisions promptly to invest profitably."
        img="/news-bg.jpg"
      />
      <section className={styles["trading-widget"]}>
        <iframe
          height={600}
          src="https://www.tradingview-widget.com/embed-widget/timeline/#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A830%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22timeline%22%2C%22page-uri%22%3A%22essentrafinance.com%2Fnews%22%7D"
          lang="en"
          className="w-full h-[600px]"
        ></iframe>
      </section>
    </>
  )
}
