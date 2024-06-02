import { ToolData } from "../types/types";

const toolsData: ToolData[] = [
  {
    icon: "🛠️",
    name: "Rental Items",
    score: 50,
  },
  {
    icon: "🔧",
    name: "Spare Parts",
    score: 75,
  },
];

export const getToolEquipmentAvailability = () => toolsData;
