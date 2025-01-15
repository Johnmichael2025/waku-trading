import Banner from "@/shared/Banner";
import Markets from "@/shared/Markets";
import React from "react";
import stocksImg from "../../../public/markets/what-are-stocks.png";
import howToTradeStocksImg from "../../../public/markets/how-to-trade-stocks.jpg";

const textImage = {
  title: "What are stocks?",
  paragraph: (
    <p>
      Stocks are not just securities, but a way to co-own a company. They open
      up opportunities for investors to receive a share of profits and influence
      important decisions. Shareholders can also expect to receive dividends, a
      share of profits that the company pays to its shareholders. At Essentra
      Finance, we offer a wide range of CFDs on stocks of the world’s leading
      companies.
    </p>
  ),
  img: stocksImg,
};
const howToStart = {
  title: "How to trade stocks?",
  paragraph: <Paragraphs />,
  img: howToTradeStocksImg,
};

function Paragraphs() {
  return (
    <>
      <p>
        Stock trading requires not only a quality broker, but also a strategy
        that suits your investment goals. Essentra Finance provides optimal
        trading conditions and helps you choose the right investment method.{" "}
      </p>
      <p>
        With us you can trade both rising and falling markets. By utilizing the
        financial instruments on our platform, you will be able to analyze the
        market and make predictions about the behavior of assets to open the
        most profitable positions.
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
        iframeWidget="https://www.tradingview-widget.com/embed-widget/stock-heatmap/?locale=en#%7B%22exchanges%22%3A%5B%5D%2C%22dataSource%22%3A%22SPX500%22%2C%22grouping%22%3A%22sector%22%2C%22blockSize%22%3A%22market_cap_basic%22%2C%22blockColor%22%3A%22change%22%2C%22symbolUrl%22%3A%22%22%2C%22colorTheme%22%3A%22dark%22%2C%22hasTopBar%22%3Afalse%2C%22isDataSetEnabled%22%3Afalse%2C%22isZoomEnabled%22%3Atrue%2C%22hasSymbolTooltip%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22utm_source%22%3A%22essentrafinance.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22stock-heatmap%22%7D"
      />
    </>
  );
}
