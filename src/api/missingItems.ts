import { MissingItemsData } from "../types/types";
import profile1 from "./../assets/images/profile1.jpeg";
import profile2 from "./../assets/images/profile2.jpeg";

const dummy_data: MissingItemsData[] = [
  {
    Tool: 6465,
    Name: "Tool One",
    ProfileImage: profile1,
  },
  {
    Tool: 6466,
    Name: "Tool Two",
    ProfileImage: profile2,
  },
];

export const getMissingRentals = () => dummy_data;
