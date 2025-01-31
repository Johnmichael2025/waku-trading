import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum";
import clsx from "clsx";
import React from "react";

type LabelStatusProps = {
  status: TRANSACTION_STATUS;
};

const getBGClass = (status: TRANSACTION_STATUS) => {
  switch (status) {
    case TRANSACTION_STATUS.PENDING:
      return "bg-blue-600";
    case TRANSACTION_STATUS.COMPLETED:
      return "bg-teal-500";
    case TRANSACTION_STATUS.REJECTED:
      return "bg-red-500";
  }
};
export default function LabelStatus({ status }: LabelStatusProps) {
  console.log(status, 'status');
  return (
    <span
      className={clsx("inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium text-white", getBGClass(status))}
    >
      {status}
    </span>
  );
}
