import React from "react";
import Button from "../UIElements/Button";
import Table from "../UIElements/Table";
import formatIndexWithZero from "../../utils/formatIndexWithZero";
import { RentalToolData } from "../../../types/types";

interface RentalToolsProps {
  headers: any;
  data: RentalToolData[];
}

export const CommonTable: React.FC<RentalToolsProps> = ({ headers, data }) => {
  return (
    <Table
      headers={headers}
      data={data.map((item, index) => ({
        "Work Order": formatIndexWithZero(index),
        ...item,
        "": (
          <Button
            onClick={() => console.log(`Button clicked for ${item.Name}`)}
          >
            Details
          </Button>
        ),
      }))}
    />
  );
};
