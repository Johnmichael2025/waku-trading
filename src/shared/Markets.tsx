import React, { ReactNode } from "react";
import styles from "../scss/markets.module.scss";
import Image, { StaticImageData } from "next/image";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import TradingAssets from "./TradingAssets";
library.add(faChevronCircleRight);

type ImgText = {
  title: string;
  paragraph: ReactNode;
  img: StaticImageData;
};
type MarketsProps = {
  howItWorks: ImgText;
  howToStart: ImgText;
  iframeWidget: string
};
export default function Markets({ howItWorks, howToStart, iframeWidget }: MarketsProps) {
  return (
    <>
      <section className={styles["image-text-section"]}>
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <Image
              src={howItWorks.img}
              width={525}
              height={320}
              alt={howItWorks.title}
            />
          </div>
          <div className="flex-1">
            <h1>{howItWorks.title}</h1>
            {howItWorks.paragraph}
          </div>
        </div>
      </section>
      <section className={styles["trading-widget"]}>
        <iframe
          height={600}
          src={iframeWidget}
          lang="en"
          className="w-full h-[600px]"
        ></iframe>
      </section>
      <section className={styles["image-text-section"]}>
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <h1>{howToStart.title}</h1>
            {howToStart.paragraph}
            <button>JOIN</button>
          </div>
          <div className="flex-1">
            <Image
              src={howToStart.img}
              width={525}
              height={320}
              alt={howToStart.title}
            />
          </div>
        </div>
      </section>
      <section className={styles["market-sections"]}>
        <TradingAssets />
      </section>
    </>
  );
}
