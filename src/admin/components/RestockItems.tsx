import React from "react";
import Table from "../../shared/components/UIElements/Table";

interface RestockItemsData {
  Tool: number;
  Equipment: string;
  Status: string;
}

interface RestockItemsProps {
  headers: string[];
  data: RestockItemsData[];
}

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

const restockItemsHeaders: string[] = ["Tool", "Equipment", "Status"];

const RestockItemsComponent: React.FC<RestockItemsProps> = ({
  headers,
  data,
}) => {
  return <Table headers={headers} data={data} />;
};

export default function RestockItems() {
  return (
    <RestockItemsComponent
      headers={restockItemsHeaders} // Pass updated headers
      data={dummy_data}
    />
  );
}
