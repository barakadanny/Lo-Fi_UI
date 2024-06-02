import React from "react";
import CardContainer from "../../shared/components/UIElements/CardContainer";
import CardInformation from "../../HOC/CardInformation";
import { getReception } from "../../api/receptionSummary";

const ReceptionSummary: React.FC = () => {
  return (
    <CardContainer className="col-span-2 border-white">
      <CardInformation
        headers={{
          name: "Reception Summary",
          icon: "",
        }}
        type="container"
        values={getReception()}
      />
    </CardContainer>
  );
};

export default ReceptionSummary;
