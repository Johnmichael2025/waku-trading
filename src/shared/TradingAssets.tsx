import { MARKETS } from "@/constants/markets.constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "../scss/trading-assets.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons/faChevronCircleRight";
library.add(faChevronCircleRight);

export default function TradingAssets() {
  return (
    <div className={styles['wrapper']}>
      <h1>You can trade the following assets</h1>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {MARKETS.map((market) => (
          <div
            style={{ backgroundImage: `url(/markets/${market.imgUrl})` }}
            className={styles.market}
            key={market.label}
          >
            <h1>{market.label}</h1>
            <Link href={market.link}>
              <FontAwesomeIcon icon="chevron-circle-right" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
