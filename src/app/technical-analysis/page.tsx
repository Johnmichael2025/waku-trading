import Banner from "@/shared/Banner";
import React from "react";
import styles from "../../scss/technical-analysis.module.scss";
export default function page() {
  return (
    <>
      <Banner
        title="Technical analysis"
        description="Find the right points to enter and exit positions. Enlarge your portfolio with promising products that have high liquidity. We at Alfabourse will help you increase your capital."
        img="/economic-calendar-bg.jpg"
      />
      <section className={styles["widgets-container"]}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className={styles['trading-widget']}>
              <iframe
                height={450}
                src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22essentrafinance.com%2Ftechnical-analysis%22%7D"
                lang="en"
                className="w-full"
              ></iframe>
            </div>
            <div className={styles['trading-widget']}>
              <iframe
                height={450}
                src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3ATSLA%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22essentrafinance.com%2Ftechnical-analysis%22%7D"
                lang="en"
                className="w-full"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className={styles['trading-widget']}>
              <iframe
                height={450}
                src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3AAMZN%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22essentrafinance.com%2Ftechnical-analysis%22%7D"
                lang="en"
                className="w-full"
              ></iframe>
            </div>
            <div className={styles['trading-widget']}>
              <iframe
                height={450}
                src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3AMETA%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22essentrafinance.com%2Ftechnical-analysis%22%7D"
                lang="en"
                className="w-full"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className={styles['trading-widget']}>
              <iframe
                height={450}
                src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3AGOOGL%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22essentrafinance.com%2Ftechnical-analysis%22%7D"
                lang="en"
                className="w-full"
              ></iframe>
            </div>
            <div className={styles['trading-widget']}>
              <iframe
                height={450}
                src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3ANFLX%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22essentrafinance.com%2Ftechnical-analysis%22%7D"
                lang="en"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
