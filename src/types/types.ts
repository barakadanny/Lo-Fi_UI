export interface RentalToolData {
  Tool: number;
  Name: string;
  Status: string;
  Duration: string;
  ProfileImage: string;
  [key: string]: any;
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

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface TableProps {
  headers: string[];
  data: RentalToolData[];
}

export const receptionSummaryHeaders: string[] = ["Icon", "Name", "Count"];

export const missingItemsHeaders: string[] = ["Tool", "Team Member", ""];

export const rentalToolsHeaders: string[] = [
  "Work Order",
  "Tool",
  "Team Member",
  "Status",
  "Duration",
  "",
];

export const restockItemsHeaders: string[] = [
  "Tool",
  "Equipment",
  "Status",
  "",
];
