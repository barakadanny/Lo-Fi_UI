import { ReceptionSummaryData } from "../types/types";

const receptionSummaryData: ReceptionSummaryData[] = [
  {
    icon: "🛠️",
    name: "Package Received",
    count: 10,
  },
  {
    icon: "📦",
    name: "Processed Packages",
    count: 5,
  },
];

export const getReception = () => receptionSummaryData;
