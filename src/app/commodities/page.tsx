import Banner from "@/shared/Banner";
import Markets from "@/shared/Markets";
import React from "react";
import commoditiesImg from "../../../public/markets/what-are-commodities.png";
import profitableCommodityTradingImg from "../../../public/markets/profitable-commodity-trading.jpg";

const textImage = {
  title: "What are commodities?",
  paragraph: (
    <p>
      Commodities are a broad category of products that includes non-ferrous and
      precious metals, energy resources, and agricultural products. Each of
      these types has its own specifics and unique characteristics, which are
      important when investing. For example, gold is often viewed as an
      investment to protect against financial fluctuations.
    </p>
  ),
  img: commoditiesImg,
};
const howToStart = {
  title: "Profitable commodity trading",
  paragraph: <Paragraphs />,
  img: profitableCommodityTradingImg,
};

function Paragraphs() {
  return (
    <>
      <p>
        We understand that creating a successful investment portfolio is a
        complex process that requires careful asset selection. Therefore, we
        provide reliable tools and high-quality assets to assist you on this
        journey. Our goal is to make your experience in commodity trading
        convenient, effective, and successful.
      </p>
      <p>
        Do you want to try your hand at the commodity market, but feel like you
        need help? On the Alphabourse platform, we provide support for
        beginners. We understand that in this world, without the right support
        and direction, a start may seem difficult. Our professionals are ready
        to guide you through this process.
      </p>
    </>
  );
}
export default function page() {
  return (
    <>
      <Banner
        title="Commodities"
        description="Diversify your investments and buy products with growth prospects."
        img="/markets/trading-banner.jpg"
      />
      <Markets
        howItWorks={textImage}
        howToStart={howToStart}
        iframeWidget="https://www.tradingview-widget.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22%20GOLD%22%2C%22COMEX%3AGC1!%7C1M%22%5D%2C%5B%22%20CRUDE%20OIL%22%2C%22NYMEX%3ACL1!%7C1M%22%5D%2C%5B%22%20SILVER%22%2C%22COMEX%3ASI1!%7C1M%22%5D%5D%2C%22chartOnly%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22colorTheme%22%3A%22dark%22%2C%22showVolume%22%3Afalse%2C%22showMA%22%3Afalse%2C%22hideDateRanges%22%3Afalse%2C%22hideMarketStatus%22%3Afalse%2C%22hideSymbolLogo%22%3Afalse%2C%22scalePosition%22%3A%22right%22%2C%22scaleMode%22%3A%22Normal%22%2C%22fontFamily%22%3A%22-apple-system%2C%20BlinkMacSystemFont%2C%20Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22fontSize%22%3A%2210%22%2C%22noTimeScale%22%3Afalse%2C%22valuesTracking%22%3A%221%22%2C%22changeMode%22%3A%22price-and-percent%22%2C%22chartType%22%3A%22area%22%2C%22maLineColor%22%3A%22%232962FF%22%2C%22maLineWidth%22%3A1%2C%22maLength%22%3A9%2C%22backgroundColor%22%3A%22rgba(19%2C%2023%2C%2034%2C%200)%22%2C%22lineWidth%22%3A2%2C%22lineType%22%3A0%2C%22dateRanges%22%3A%5B%221d%7C1%22%2C%221m%7C30%22%2C%223m%7C60%22%2C%2212m%7C1D%22%2C%2260m%7C1W%22%2C%22all%7C1M%22%5D%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%2C%22page-uri%22%3A%22essentrafinance.com%2Fcommodities%22%7D"
      />
    </>
  );
}
