import React from "react";

type EmailTemplateProps = {
  message: string;
  name: string;
  email: string;
};
export default function EmailTemplate({
  message,
  name,
  email,
}: EmailTemplateProps) {
  return (
    <>
      <p>
        <span>
          <strong>Sender Name: </strong>
        </span>
        <span>{name}</span>
      </p>
      <p>
        <span>
          <strong>Sender Email: </strong>
        </span>
        <span>{email}</span>
      </p>
      <p className="mt-4">
        <strong>Message Body: </strong>
      </p>
      <p className="mt-2">{message}</p>
    </>
  );
}
