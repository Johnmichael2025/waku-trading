import { FAQS } from "@/constants/faqs.constant";
import Banner from "@/shared/Banner";
import FaqItem from "@/shared/FaqItem";
import React from "react";

export default function page() {
  return (
    <>
      <Banner
        title="FAQs"
        description="We have some answers to your questions."
        img="/faq-bg.jpg"
      />
      <section>
        <div className="p-[80px]">
          {FAQS.map((faq, i) => (
            <FaqItem question={faq.q} answer={faq.a} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
