"use client";
import clsx from "clsx";
import TradingViewWidget from "./../components/TradingViewWidget";
import styles from "./../scss/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BENEFITS } from "../constants/benefits.constant";
import Statistics from "../components/home/Statistics";
import Image from "next/image";
import qualityImg from "../../public/home/quality.png";
import safeTyImg from "../../public/home/shield.png";
import efficiencyImg from "../../public/home/efficiency.png";
import reliabilityImg from "../../public/home/quality-assurance.png";
import Testimonies from "../components/home/Testimonies";
import TradingAssets from "../shared/TradingAssets";
import Link from "next/link";

library.add(faCheck);
export default function Home() {
  return (
    <>
      <section>
        <div className={styles["home-banner"]}>
          <div className={styles["intro-texts"]}>
            <h4>Use our technology</h4>
            <h1>WE STRIVE FOR</h1>
            <h1>PRODUCTIVE</h1>
            <h1>INVESTMENT</h1>
            <Link href="/sign-up">
              <button className="light-button-outline">SIGN UP NOW</button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.professionalism}>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-1">
              <h3>PROFESSIONALISM</h3>
              <h1>We are confident in what we do and proud of the result</h1>
              <Link href="/sign-up">
                <button className="button-dark">LEARN MORE</button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                  <div className="flex-1">
                    <Image
                      width={50}
                      height={50}
                      alt="Quality"
                      src={qualityImg}
                    />
                    <h2>Quality</h2>
                    <p>We operate transparently without hidden provisions</p>
                  </div>
                  <div className="flex-1">
                    <Image
                      width={50}
                      height={50}
                      alt="Quality"
                      src={reliabilityImg}
                    />
                    <h2>Reliability</h2>
                    <p>Our company adheres to all standards</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <Image
                      width={50}
                      height={50}
                      alt="Quality"
                      src={efficiencyImg}
                    />
                    <h2>Efficiency</h2>
                    <p>
                      Our technologies work smoothly, without failures or
                      problems
                    </p>
                  </div>
                  <div className="flex-1">
                    <Image
                      width={50}
                      height={50}
                      alt="Quality"
                      src={safeTyImg}
                    />
                    <h2>Safety</h2>
                    <p>We use innovative protection methods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row">
          <div className={styles.platform}>
            <div>
              <h3>PLATFORM</h3>
              <h1>Invest in your</h1>
              <h1>free time</h1>
              <p>
                Customize the terminal and combine it with various strategies to
                achieve high results. Our platform works from any browser.
              </p>
              <Link href="/sign-up">
                <button className="light-button-outline">ACT NOW</button>
              </Link>
            </div>
          </div>
          <div className={clsx("flex-1 p-10", styles.options)}>
            <h3 className="text-white font-medium">OPTIONS</h3>
            <h1 className="mt-4">What you get with</h1>
            <h1>WebTrader</h1>
            <ul className={styles["icon-list-items"]}>
              <li className="icon-list-item">
                <FontAwesomeIcon icon="check" />
                <span className="icon-list-text">Built-in indicators: 27</span>
              </li>
              <li className="icon-list-item">
                <FontAwesomeIcon icon="check" />
                <span className="icon-list-text">Trading tools: 500</span>
              </li>
              <li className="icon-list-item">
                <FontAwesomeIcon icon="check" />
                <span className="icon-list-text">Timeframes: 9</span>
              </li>
              <li className="icon-list-item">
                <FontAwesomeIcon icon="check" />
                <span className="icon-list-text">
                  Transaction speed in seconds: 0.05
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <Statistics />
      </section>
      <section>
        <div className={clsx("p-10 mt-10", styles["benefits-section"])}>
          <div className={styles["benefits-intro"]}>
            <h3 className="mb-4">OUR BENEFITS</h3>
            <h1>Alphabourse provides numerous</h1>
            <h1>opportunities for smart trading</h1>
          </div>
          <div className={styles.benefits}>
            {BENEFITS.map((benefit, i) => (
              <div key={i} className={styles["box-item"]}>
                <div className="title-inner">
                  <h3 className="number">0{i + 1}.</h3>
                  <h2>{benefit.title}</h2>
                </div>
                <div className={styles.description}>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["trading-widget-wrapper"]}>
            <TradingViewWidget />
          </div>
        </div>
      </section>
      <section>
        <Testimonies />
      </section>
      <section className="my-10 px-10">
        <TradingAssets />
      </section>
      <section>
        <div className={styles["signup-wrapper"]}>
          <h4>SIGN UP</h4>
          <h1>
            We are waiting for you at Alphabourse. Trade with a qualified
            broker!
          </h1>
          <Link href="/sign-up">
            <button className="light-button-outline">OPEN AN ACCOUNT</button>
          </Link>
        </div>
      </section>
    </>
  );
}
