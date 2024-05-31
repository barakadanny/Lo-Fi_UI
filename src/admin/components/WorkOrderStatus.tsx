import React from "react";
import ChartComponent from "../../shared/components/UIElements/ChartComponent";

interface WorkOrderData {
  completed: number;
  inProgress: number;
  due: number;
}

const WorkOrderStatus: React.FC = () => {
  const data: WorkOrderData = {
    completed: 12,
    inProgress: 19,
    due: 3,
  };

  const chartData = {
    labels: ["Completed", "In Progress", "Due"],
    datasets: [
      {
        label: "# of Votes",
        data: [data.completed, data.inProgress, data.due],
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

  const centerText = `Completed ${data.completed}`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">WorkOrderStatus</h1>
      <div className="relative w-72 h-64 ">
        <ChartComponent data={chartData} centerText={centerText} />
      </div>
    </div>
  );
};

export default WorkOrderStatus;
