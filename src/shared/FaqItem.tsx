"use client";
import React, { useState } from "react";
import styles from "../scss/faq.module.scss";

type FaqItemProps = {
  question: string;
  answer: string;
};
export default function FaqItem({ question, answer }: FaqItemProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`${styles.item} ${expanded ? styles.active : ''}`}>
      <div onClick={() => setExpanded(!expanded)} className={styles.question}>
        <div className="how">{question}</div>
      </div>
      {expanded && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}
