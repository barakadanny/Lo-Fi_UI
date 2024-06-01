import React from "react";
import {
  missingItemsHeaders,
  rentalToolsHeaders,
  restockItemsHeaders,
} from "../types/types";
import { CommonTable } from "../shared/components/common-table/CommonTable";
import { NameType } from "../types/types";

interface CardTableProps {
  headers: NameType;
  type: string;
  values: any;
}

const CardTable: React.FC<CardTableProps> = ({ headers, type, values }) => {
  return (
    <div>
      <div className="mb-4 flex gap-2 items-center">
        {headers.icon.length !== 0 && (
          <img src={headers.icon} className="block size-8" />
        )}
        <h3 className="text-2xl font-bold text-gray-700">{headers.name}</h3>
      </div>
      {type === "table" && (
        <CommonTable
          headers={
            headers.name === "Rental Tools"
              ? rentalToolsHeaders
              : headers.name === "Missing Items"
              ? missingItemsHeaders
              : restockItemsHeaders
          }
          data={values}
        />
      )}
    </div>
  );
};

export default CardTable;
