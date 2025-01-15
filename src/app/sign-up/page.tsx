import React from "react";
import styles from "../../scss/sign-up.module.scss";
import { COUNTRIES } from "@/constants/countries.constant";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles["bg-wrapper"]}>
      <div className={styles["login-form"]}>
        <h1>Sign up</h1>
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  required
                  type="text"
                  placeholder="Your first name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  required
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  required
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  required
                  type="password"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="email">Country</label>
                <select>
                  {COUNTRIES.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  required
                  type="text"
                  placeholder="Your phone"
                />
              </div>
            </div>
          </div>
          <div className={styles.terms}>
            <input required name="terms" type="checkbox" />
            <label htmlFor="terms">
              I have read and accepted the Terms and Conditions of the Client
              Agreement, Company Policies, Privacy Policy, Terms and Conditions,
              and Disclaimer. I also acknowledge and consent to the processing
              of my personal data in accordance with the Waku Trading.
            </label>
          </div>
          <div className="text-center">
            <button type="submit" className="light-button-outline">
              Sign Up
            </button>
          </div>
          <h4 className="text-center mt-6">Already registered? 
            &nbsp;<Link href="/login">Log in</Link>
          </h4>
        </form>
      </div>
    </div>
  );
}
