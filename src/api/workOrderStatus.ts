import { WorkOrderData } from "../types/types";

const workData: WorkOrderData = {
  completed: 12,
  inProgress: 19,
  due: 3,
};

export const getWorkOrderStatus = (): WorkOrderData => {
  return workData;
};
