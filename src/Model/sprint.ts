import {SprintStatus} from "./sprint-status";


export interface Sprint {
  id: number;
  name: string;
  status: SprintStatus;
  numberCarLoad: number;
  driverName: string;
  createdBy: string;
  createdAt: string;
}
