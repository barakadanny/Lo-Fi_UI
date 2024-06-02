import React from "react";
import Profile from "./../UIElements/Profile";
import StatusIndicator from "./StatusIndicator";
import { RentalToolData, TableProps } from "../../../types/types";

const Table: React.FC<TableProps> = ({ headers, data }) => (
  <table className="w-full text-sm text-left">
    <thead className="text-base text-gray-700 border-b">
      <tr>
        {headers.map((header) => (
          <th className="px-1 py-3 text-gray-500 font-normal" key={header}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row: RentalToolData, rowIndex: number) => (
        <tr className="[&:not(:last-child)]:border-b" key={rowIndex}>
          {headers.map((header: string, index: number) => (
            <td
              className="px-1 py-2 font-medium text-gray-500 whitespace-nowrap"
              key={index}
            >
              {header === "Team Member" ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {row["ProfileImage"] && (
                    <Profile
                      imageUrl={row["ProfileImage"]}
                      alt="Profile"
                      size="30px"
                      className="hidden md:block"
                    />
                  )}
                  <span
                    style={{ marginLeft: row["ProfileImage"] ? "10px" : 0 }}
                  >
                    {row["Name"]}
                  </span>
                </div>
              ) : header === "Status" ? (
                <StatusIndicator status={row[header]} />
              ) : (
                row[header]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
