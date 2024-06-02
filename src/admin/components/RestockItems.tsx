import CardTable from "../../HOC/CardTable";
import { getItemsToRestock } from "../../api/restockItems";
import CardContainer from "../../shared/components/UIElements/CardContainer";

export default function RestockItems() {
  return (
    <CardContainer className="col-span-1 lg:col-span-3">
      <CardTable
        headers={{
          name: "Restock Items",
          icon: "",
        }}
        type="table"
        values={getItemsToRestock()}
      />
    </CardContainer>
  );
}
