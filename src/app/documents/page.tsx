import { DOCUMENTS } from "@/constants/documents.constant";
import Banner from "@/shared/Banner";
import React from "react";
import styles from "../../scss/documents.module.scss";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons/faChevronCircleRight";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faChevronCircleRight);

export default function page() {
  return (
    <>
      <Banner
        title="Legal documents"
        description="Alphabourse provides detailed information about its terms and conditions. Before cooperating with us, we recommend that you examine this documentation to understand our policies."
        img="/documents/legal-documents.jpg"
      />
      <div className="flex flex-col md:flex-row flex-wrap gap-5 p-5 md:p-10 items-center justify-center">
        {DOCUMENTS.map((document) => (
          <div className={styles["document-item"]} key={document.label}>
            <h2>{document.label}</h2>
            <div className="flex justify-between mt-10">
              <Image
                src={`/documents/${document.icon}`}
                width={55}
                height={56}
                alt={document.label}
              />
              <Link target="_blank" href={`/pdf/${document.link}`}>
                <FontAwesomeIcon icon="chevron-circle-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
