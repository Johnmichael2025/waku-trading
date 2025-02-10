import Banner from "@/shared/Banner";
import React from "react";
import styles from "../../scss/accounts.module.scss";
import { PREMIUM_ACCOUNTS } from "@/constants/premium-accounts.constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
library.add(faCheck);

export default function page() {
  return (
    <>
      <Banner
        title="Accounts"
        description="Immerse yourself in exploring global markets and trade freely, adding profitable stocks and other assets to your portfolio."
        img="/economic-calendar-bg.jpg"
      />
      <section className={styles["accounts-wrapper"]}>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center">
          {PREMIUM_ACCOUNTS.map((account, i) => (
            <div className={styles.premium} key={i}>
              <h3>{account.premium}</h3>
              <h1>${account.price}</h1>
              <ul>
                <li>
                  <span>
                    <FontAwesomeIcon icon="check" />
                  </span>
                  <span>Maximum number of trades: {account.maximumTrades}</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon="check" />
                  </span>
                  <span>Minimum order: {account.minimumOrder}</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon="check" />
                  </span>
                  <span>Leverage up to {account.leverageUpTo}</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon="check" />
                  </span>
                  <span>{account.spreads}</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon="check" />
                  </span>
                  <span>{account.role}</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon="check" />
                  </span>
                  <span>{account.protection}</span>
                </li>
              </ul>
              <br />
              <Link href="/sign-up">
                <button className="light-button-outline">
                  Open an account
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className={styles["consult-us"]}>
          <h4>Need help to decide?</h4>
          <h1>
            Our managers will help you choose a strategy and consult you on all
            issues.
          </h1>
          <button className="light-button-outline">OPEN AN ACCOUNT</button>
        </div>
      </section>
    </>
  );
}
