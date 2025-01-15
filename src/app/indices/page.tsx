import Banner from "@/shared/Banner";
import Markets from "@/shared/Markets";
import React from "react";
import indicesImg from "../../../public/markets/minimize-risks.png";
import howToStartTradingIndicesImg from "../../../public/markets/how-to-start-trading-indices.jpg";

const textImage = {
  title: "Minimize risks",
  paragraph: (
    <p>
      Indices are instruments composed of stocks of companies grouped according
      to various criteria. They reflect the overall development of the
      securities&apos; value in a particular group of companies, allowing
      traders to assess the state and trends of certain market sectors. Essentra
      Finance offers a wide selection of indices from various countries and
      market segments. These instruments can be useful both for market analysis
      and forecasting price changes, as well as for CFD trading.
    </p>
  ),
  img: indicesImg,
};
const howToStart = {
  title: "How to start trading indices?",
  paragraph: <Paragraphs />,
  img: howToStartTradingIndicesImg,
};

function Paragraphs() {
  return (
    <>
      <p>
        Open a trading account with Alphabourse to gain access to global
        indices. Our platform offers a wide range of indices from various
        economies, allowing you to select and analyze assets at your discretion.
        Our team of experts is ready to provide assistance and guidance,
        guaranteeing support regardless of your level of experience.
      </p>
      <p>
        Do not limit your investments - open CFD trades on indices of the
        world’s largest giants. This is an excellent way to diversify the
        portfolio and make it more resilient to market fluctuations. Trust
        Alphabourse for a variety of features and a quality approach to
        index trading.
      </p>
    </>
  );
}
export default function page() {
  return (
    <>
      <Banner
        title="Indices"
        description="Diversify your investments with reliable assets."
        img="/markets/trading-banner.jpg"
      />
      <Markets
        howItWorks={textImage}
        howToStart={howToStart}
        iframeWidget="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A660%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(106%2C%20109%2C%20120%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22US%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU40%22%2C%22d%22%3A%22DAX%20Index%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3AUKXGBP%22%2C%22d%22%3A%22UK%20100%22%7D%5D%2C%22originalTitle%22%3A%22Indices%22%7D%5D%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22essentrafinance.com%2Findices%22%7D"
      />
    </>
  );
}
