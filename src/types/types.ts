export interface RentalToolData {
  Tool: number;
  Name: string;
  Status: string;
  Duration: string;
  ProfileImage: string;
}

export interface NameType {
  icon: string;
  name: string;
}

export interface RestockItemsData {
  Tool: number;
  Equipment: string;
  Status: string;
}

export interface WorkOrderData {
  completed: number;
  inProgress: number;
  due: number;
}

export interface ToolData {
  icon: React.ReactNode;
  name: string;
  score: number;
}

export interface ReceptionSummaryData {
  icon: string;
  name: string;
  count: number;
}

export interface MissingItemsData {
  Tool: number;
  Name: string;
  ProfileImage: string;
}

export const receptionSummaryHeaders: string[] = ["Icon", "Name", "Count"];

export const missingItemsHeaders: string[] = ["Tool", "Name", "Action"];

export const rentalToolsHeaders: string[] = [
  "Work Order",
  "Tool",
  "Name",
  "Status",
  "Duration",
  "Action",
];

export const restockItemsHeaders: string[] = [
  "Tool",
  "Equipment",
  "Status",
  "Action",
];
