import React from "react";
import { getWorkOrderStatus } from "../../api/workOrderStatus";
import IndicatorWidget from "../../HOC/IndicatorWidget";
import CardContainer from "../../shared/components/UIElements/CardContainer";

const WorkOrderStatus: React.FC = () => {
  return (
    <CardContainer className="col-span-1 lg:col-span-2">
      <IndicatorWidget
        headers={{
          name: "Work Order Status",
          icon: "",
        }}
        type="piechart"
        values={getWorkOrderStatus()}
      />
    </CardContainer>
  );
};

export default WorkOrderStatus;
