import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import styles from "./statistics.module.scss";
import { CircularProgressbarStyles } from "react-circular-progressbar/dist/types";
import Image from "next/image";
import ProjectImg from "../../../public/home/project.jpg";
import Link from "next/link";

const pieStyles: CircularProgressbarStyles = {
  path: {
    // Path color
    stroke: `#334155`,
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",
    // Customize transition animation
    transition: "stroke-dashoffset 0.5s ease 0s",
    // Rotate the path
    transform: "rotate(0.25turn)",
    transformOrigin: "center center",
  },
  // Customize the circle behind the path, i.e. the "total progress"
  trail: {
    // Trail color
    stroke: "#EBEBEB",
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",
    // Rotate the trail
    transform: "rotate(0.25turn)",
    transformOrigin: "center center",
  },
  // Customize the text
  text: {
    // Text color
    fill: "#334155",
    // Text size
    fontSize: "16px",
    marginRight: "30px",
  },
  // Customize background - only used when the `background` prop is true
  background: {
    fill: "#3e98c7",
  },
};
export default function Statistics() {
  return (
    <div className={styles["bg-left"]}>
      <div className={styles["main-row"]}>
        <div>
          <h3 className="mb-5">WE ARE IN FIGURE</h3>
          <h1>Our team knows</h1>
          <h1>what traders need</h1>
        </div>
        <div className={styles["pie-container"]}>
          <CircularProgressbar value={60} text={`${60}%`} styles={pieStyles} />
          <p>Negative balance protection</p>
        </div>
        <div className={styles["pie-container"]}>
          <CircularProgressbar value={87} text={`${87}%`} styles={pieStyles} />
          <p>Successful trading operations</p>
        </div>
        <div className={styles["pie-container"]}>
          <CircularProgressbar value={0} text={`${0}%`} styles={pieStyles} />
          <p>Deposits are free of charge</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-20 gap-10">
        <div className="flex-1">
          <Image
            className="w-full"
            width={580}
            height={385}
            alt="Tariff Plans"
            src={ProjectImg}
          />
        </div>
        <div className={styles["tariff-plans"]}>
          <h4>TARIFF PLANS</h4>
          <h1>Open your suitable account</h1>
          <p>
            Our accounts are the key to convenience and individuality in the
            world of financial transactions. We provide different options, each
            tailored to your needs and trading strategy. Choose your leverage
            level, customize conditions and tools to suit your goals.
          </p>
          <Link href="/accounts">
            <button>Compare Accounts</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
