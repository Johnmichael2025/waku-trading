import Banner from "@/shared/Banner";
import React from "react";
import styles from "../../scss/economic-calendar.module.scss";

export default function page() {
  return (
    <>
      <Banner
        title="Economic calendar"
        description="We want you to fully enjoy trading, using all opportunities to increase successful operations. For this purpose, Alphabourse provides numerous tools, including the ‘Economic Calendar’."
        img="/economic-calendar-bg.jpg"
      />
      <section className={styles["trading-widget-section"]}>
        <div>
          <iframe
            height={600}
            src="https://www.tradingview-widget.com/embed-widget/events/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22countryFilter%22%3A%22us%2Ceu%2Cit%2Cnz%2Cch%2Cau%2Cfr%2Cjp%2Cza%2Ctr%2Cca%2Cde%2Cmx%2Ces%2Cgb%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22events%22%2C%22page-uri%22%3A%22essentrafinance.com%2Feconomic-calendar%22%7D"
            lang="en"
            className="w-full h-[600px]"
          ></iframe>
        </div>
      </section>
    </>
  );
}
