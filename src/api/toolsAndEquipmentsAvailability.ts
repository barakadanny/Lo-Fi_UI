import { ToolData } from "../types/types";

const toolsData: ToolData[] = [
  {
    icon: "🛠️",
    name: "Hammer",
    score: 50,
  },
  {
    icon: "🔧",
    name: "Wrench",
    score: 75,
  },
];

export const getToolEquipmentAvailability = () => toolsData;
