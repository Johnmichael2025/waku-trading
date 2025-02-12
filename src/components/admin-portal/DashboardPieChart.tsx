import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

type DashboardPieChartProps = {
  data: {
    id: number
    value: number
    label: string
    color: string
  }[]
  title: string
};
export default function DashboardPieChart({ data, title }: DashboardPieChartProps) {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 mb-10">{title}</span>
      <div className="w-[400px] h-[200px">
      <PieChart
        series={[
          {
            data: data,
          },
        ]}
        width={350}
        height={140}
      />
      </div>
     
    </div>
  );
}
