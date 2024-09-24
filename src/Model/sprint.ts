import {SprintStatus} from "./sprint-status";


export interface Sprint {
  id: string;
  name: string;
  status: SprintStatus;
  numberCarLoad: number;
  driverName: string;
  createdBy: string;
  createdAt: string;
}
