import { RestockItemsData } from "../types/types";

const dummy_data: RestockItemsData[] = [
  {
    Tool: 6465,
    Equipment: "Tool One",
    Status: "Low",
  },
  {
    Tool: 6466,
    Equipment: "Tool Two",
    Status: "Medium",
  },
  {
    Tool: 6467,
    Equipment: "Tool Three",
    Status: "none",
  },
];

export const getItemsToRestock = () => dummy_data;
