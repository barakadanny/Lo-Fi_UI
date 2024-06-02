import React from "react";

interface StatusIndicatorProps {
  status: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const getColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "green";
      case "In Progress":
        return "blue";
      case "Not Started":
        return "red";
      case "Low":
        return "orange";
      case "None":
        return "red";
      default:
        return "gray";
    }
  };

  const color = getColor(status);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          position: "relative",
          width: "10px",
          height: "10px",
          marginRight: "8px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: color,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "white",
            position: "absolute",
            top: "-2px",
            left: "-2px",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `2px solid ${color}`,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        ></div>
      </div>
      {status}
    </div>
  );
};

export default StatusIndicator;
