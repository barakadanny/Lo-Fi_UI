import React from "react";
import Table from "../../shared/components/UIElements/Table";
import profile1 from "./../../assets/images/profile1.jpeg";
import profile2 from "./../../assets/images/profile2.jpeg";

interface RentalToolData {
  Tool: number;
  Name: string;
  Status: string;
  Duration: string;
  ProfileImage: string;
}

interface RentalToolsProps {
  headers: string[];
  data: RentalToolData[];
}

const dummy_data: RentalToolData[] = [
  {
    Tool: 6465,
    Name: "Tool One",
    Status: "available",
    Duration: "2h",
    ProfileImage: profile1,
  },
  {
    Tool: 6466,
    Name: "Tool Two",
    Status: "in use",
    Duration: "3h",
    ProfileImage: profile2,
  },
];

const rentalToolsHeaders: string[] = ["Tool", "Name", "Status", "Duration"]; // Add ProfileImage to headers

const RentalToolsComponent: React.FC<RentalToolsProps> = ({
  headers,
  data,
}) => {
  return <Table headers={headers} data={data} />;
};

export default function RentalTools() {
  return (
    <RentalToolsComponent
      headers={rentalToolsHeaders} // Pass updated headers
      data={dummy_data}
    />
  );
}
