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
    Status: "None",
  },
  {
    Tool: 6467,
    Equipment: "Tool Three",
    Status: "None",
  },
];

export const getItemsToRestock = () => dummy_data;
