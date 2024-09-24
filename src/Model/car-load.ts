export interface Carload {
  id: string;
  destination: string;
  clientNumber: string;
  earnings: number;
  totalExpenses: number;
  fuelExpense: number;
  policeExpense: number;
  driverExpenses: number;
  managerExpenses: number;
  purchaseMoney: number,
  toll: number;
  gain: number;
  sprintName: string;
  driverName: string;
  managerName: string;
  clientName: string;
  materialName: string;
  createdBy: string;
  createdAt?: Date | null;
}


