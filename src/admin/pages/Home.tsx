import RentalTools from "../components/RentalTools";
import MissingItems from "../components/MissingItems";
import RestockItems from "../components/RestockItems";
import WorkOrderStatus from "../components/WorkOrderStatus";
import ToolsAndEquipmentsAvailability from "../components/ToolsAndEquipmentsAvailability";

export default function Home() {
  return (
    <div>
      <RentalTools />
      <MissingItems />
      <RestockItems />
      <WorkOrderStatus />
      <ToolsAndEquipmentsAvailability />
    </div>
  );
}