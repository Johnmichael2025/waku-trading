import Banner from "@/shared/Banner";
import Markets from "@/shared/Markets";
import React from "react";
import forexImg from "../../../public/markets/how-forex-works.png";
import howToStartForexImg from "../../../public/markets/how-to-start-forex.jpg";

const textImage = {
  title: "How does Forex work?",
  paragraph: (
    <p>
      Forex is a global currency exchange market where trades are held around
      the clock. It is based on buying and selling currency pairs, including
      popular pairs EUR/USD, USD/JPY and others. This market is characterized by
      high liquidity and the possibility of making a return on both an increase
      and a decrease in the value of the currency. The platform offers a
      multitude of currency pairs, providing options for every trader to choose
      from.
    </p>
  ),
  img: forexImg,
};
const howToStart = {
  title: "How to start trading on Forex?",
  paragraph: <Paragraphs />,
  img: howToStartForexImg,
};

function Paragraphs() {
  return (
    <>
      <p>
        One of the ways for private traders to get started in the currency
        market is to collaborate with a reliable broker, such as Essentra
        Finance. Our company provides users with the tools and resources
        necessary for confident and effective work in the financial markets.
      </p>
      <p>
        By joining us, you gain access to a multitude of technologies that
        enable successful trading in the currency market, generating income from
        operations with currency pairs and other assets. Our tools will help you
        execute trades with comfort and confidence, and experienced specialists
        will support you at every stage.
      </p>
    </>
  );
}
export default function page() {
  return (
    <>
      <Banner
        title="Forex"
        description="Analyze markets and react to events in a timely manner, making profitable transactions."
        img="/markets/trading-banner.jpg"
      />
      <Markets
        howItWorks={textImage}
        howToStart={howToStart}
        iframeWidget="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%5D%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22essentrafinance.com%2Fforex%22%7D"
      />
    </>
  );
}
