import React from "react";
import Table from "../../shared/components/UIElements/Table";
import profile1 from "./../../assets/images/profile1.jpeg";
import profile2 from "./../../assets/images/profile2.jpeg";

interface MissingItemsData {
  Tool: number;
  Name: string;
  ProfileImage: string;
}

interface MissingItemsProps {
  headers: string[];
  data: MissingItemsData[];
}

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

const missingItemsHeaders: string[] = ["Tool", "Name"];

const MissingItemsComponent: React.FC<MissingItemsProps> = ({
  headers,
  data,
}) => {
  return <Table headers={headers} data={data} />;
};

export default function MissingItems() {
  return (
    <MissingItemsComponent
      headers={missingItemsHeaders} // Pass updated headers
      data={dummy_data}
    />
  );
}
