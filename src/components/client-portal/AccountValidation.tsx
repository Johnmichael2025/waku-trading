import React from "react";
import styles from "../../scss/client-portal-profile.module.scss";
import { Input } from "@heroui/react";

export default function AccountValidation() {
  return (
    <div className={styles["account-validation-wrapper"]}>
      <h3>Account Verification</h3>
      <p>Please provide us with the requested documents.</p>
      <p>
        To full verify your account and activate it, you will be required to
        provide us with colored photos/scans of the following documents, making
        sure that each document is completely and clearly visible, including its
        edges. Black and White copies and/or copies in which the documents edges
        are not visible WILL NOT be accepted.
      </p>
      <p>
        Please be aware that KYC documents are collected from the owner of the
        trading account - the depositor, therefore all documents shall match the
        details of the owner of the bank account or credit card from which the
        deposits are done.
      </p>
      <br />
      <h3>1. Proof of Identity</h3>
      <p>
        Please upload a colored copy of any of the following document clearly
        showing the four corners, ID number and full name. In addition, it must
        show a valid date of expiration.
      </p>
      <ul>
        <li>Passport</li>
        <li>National ID</li>
      </ul>
      <h3>2. Proof of Residency</h3>
      <p>
        An official document dated within the last 3 months, issued in your
        name, showing your full address, with the logo of the issuer. As a Proof
        of Residency, you can upload:
      </p>
      <ul>
        <li>
          Utility bills (Electricity bills, water supply bills, landline phone
          bills, or gas bills, mobile and internet bills)
        </li>
        <li>Residence certificate issued by a governmental authority</li>
        <li>
          Bank statements (statement about issuing a new CC or opening a new
          bank account or any other action performed with customer&apos;s
          account given that this document is not older that 3 months)
        </li>
        <li>Tax certificate</li>
      </ul>
      <h3>3. Proof of Payment</h3>
      <p>Copy of the Payment Card used for depositing:</p>
      <h4>Front:</h4>
      <ul>
        <li>Showing your full name</li>
        <li>With a valid expiration date</li>
        <li>
          Showing the first 6 digits and last 4 digits of the card (hide the
          other digits)
        </li>
      </ul>
      <h4>Back:</h4>
      <ul>
        <li>The signature of the stripe</li>
        <li>Hiding the cvv code</li>
        <li>
          Hide all digits of the payment card except the first 6 digits and last
          4 digits
        </li>
      </ul>
      <h3>4. Declaration of the deposit (DOD)</h3>
      <p>Confirmation of your online transaction</p>
      <div className="mt-5">
        <Input
          description="Supported formats are .pdf .jpeg .jpg .png .doc .docx .odt."
          required
          name="current-password"
          type="file"
        />
      </div>
    </div>
  );
}
