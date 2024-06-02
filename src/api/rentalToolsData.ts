import { RentalToolData } from "../types/types";
import profile1 from "./../assets/images/profile1.jpeg";
import profile2 from "./../assets/images/profile2.jpeg";

const dummy_data: RentalToolData[] = [
  {
    Tool: 6465,
    Name: "Tool One",
    Status: "Componented",
    Duration: "15:00",
    ProfileImage: profile1,
  },
  {
    Tool: 6466,
    Name: "Tool Two",
    Status: "in Progress",
    Duration: "05:00",
    ProfileImage: profile2,
  },
  {
    Tool: 6467,
    Name: "Tool Three",
    Status: "Not Started",
    Duration: "00:00",
    ProfileImage: profile1,
  },
];

export const getCheckedOutRentals = () => dummy_data;
