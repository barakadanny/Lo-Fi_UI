import React from "react";
import { NameType, WorkOrderData } from "../types/types";
import ChartComponent from "../shared/components/UIElements/ChartComponent";

interface IndicatorWidgetProps {
  headers: NameType;
  type: string;
  values: WorkOrderData;
}

const IndicatorWidget: React.FC<IndicatorWidgetProps> = ({
  headers,
  type,
  values,
}) => {
  const chartData = {
    labels: ["Completed", "In Progress", "Due"],
    datasets: [
      {
        label: "# of Votes",
        data: [values.completed, values.inProgress, values.due],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>
        {headers.icon && (
          <img
            src={headers.icon}
            className="block w-8 h-8"
            alt={headers.name}
          />
        )}
        <h3 className="text-2xl font-bold mb-4 text-gray-700">
          {headers.name}
        </h3>
      </div>
      {type === "piechart" && (
        <div className="relative w-full h-40 ">
          <ChartComponent
            data={chartData}
            centerText={`Completed ${values.completed}`}
          />
        </div>
      )}
    </div>
  );
};

export default IndicatorWidget;
