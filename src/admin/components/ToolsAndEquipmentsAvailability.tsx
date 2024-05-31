import React from "react";
import ProgressBar from "../../shared/components/UIElements/ProgressBar";

interface ToolData {
  icon: React.ReactNode;
  name: string;
  score: number;
}

const toolsData: ToolData[] = [
  {
    icon: <span>🛠️</span>,
    name: "Hammer",
    score: 50,
  },
  {
    icon: <span>🔧</span>,
    name: "Wrench",
    score: 75,
  },
];

const ToolsAndEquipmentsAvailability: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Tools and Equipments Availability
      </h1>
      <ul>
        {toolsData.map((tool, index) => (
          <li key={index} className="flex w-[15rem] text-center m-4">
            <div className="text-4xl mb-2">{tool.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <ProgressBar score={tool.score} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsAndEquipmentsAvailability;
