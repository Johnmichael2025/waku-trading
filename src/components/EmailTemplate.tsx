import React from "react";

type EmailTemplateProps = {
  message: string;
  name: string;
};
export default function EmailTemplate({ message, name }: EmailTemplateProps) {
  return (
    <>
      <p>
        <span>
          <strong>Sender Name: </strong>
        </span>
        <span>{name}</span>
      </p>
      <p className="mt-4">
        <strong>Message Body: </strong>
      </p>
      <p className="mt-2">
        {message}
      </p>
    </>
  );
}
