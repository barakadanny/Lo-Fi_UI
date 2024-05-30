import React from "react";

interface TableRow {
  [key: string]: string | number | JSX.Element; // Update TableRow interface to allow JSX.Element for images
}

interface TableProps {
  headers: string[];
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => (
  <table>
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {headers.map((header, index) => (
            <td key={index}>
              {header === "Name" ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {row["ProfileImage"] && (
                    <img
                      src={row["ProfileImage"]}
                      alt="Profile"
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                  <span
                    style={{ marginLeft: row["ProfileImage"] ? "10px" : 0 }}
                  >
                    {row["Name"]}
                  </span>
                </div>
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
