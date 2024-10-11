import {SprintStatus} from "./sprint-status";


export interface Sprint {
  id: string;
  name: string;
  status: SprintStatus;
  numberCarLoad: number;
  driver: string;
  createdBy: string;
  createdAt: string;
}
