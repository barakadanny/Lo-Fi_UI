import React from "react";
import CardContainer from "../../shared/components/UIElements/CardContainer";
import CardInformation from "../../HOC/CardInformation";
import { getToolEquipmentAvailability } from "../../api/toolsAndEquipmentsAvailability";

const ToolsAndEquipmentsAvailability: React.FC = () => {
  return (
    <CardContainer className="col-span-1 lg:col-span-3">
      <CardInformation
        headers={{
          name: "Tools and Equipments Availability",
          icon: "",
        }}
        type="infoGraph"
        values={getToolEquipmentAvailability()}
      />
    </CardContainer>
  );
};

export default ToolsAndEquipmentsAvailability;
