import Container from "../../shared/components/UIElements/Container";
// import GridLayout from "../../shared/components/UIElements/GridLayout";

import RentalTools from "../components/RentalTools";
import MissingItems from "../components/MissingItems";
import RestockItems from "../components/RestockItems";
import WorkOrderStatus from "../components/WorkOrderStatus";
import ToolsAndEquipmentsAvailability from "../components/ToolsAndEquipmentsAvailability";
import ReceptionSummary from "../components/ReceptionSummary";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-4">
        <RentalTools />
        <WorkOrderStatus />
        <MissingItems />
        <ToolsAndEquipmentsAvailability />
        <RestockItems />
        <ReceptionSummary />
      </div>
    </Container>
  );
}
