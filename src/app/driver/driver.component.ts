import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddDriverComponent } from './add-driver/add-driver.component';

export interface Driver {
  id: number;
  name: string;
  birthDate: Date;
  phoneNumber: string;
  vehiclePlate: string;
  vehicleModel: string;
  createdBy: string;
  createdAt: string;
}

const ELEMENT_DATA: Driver[] = [
  {
    id: 1,
    name: 'John Doe',
    birthDate: new Date(),
    phoneNumber: '1234567890',
    vehiclePlate: 'ABC123',
    vehicleModel: 'Toyota',
    createdBy: 'Admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'Jane Smith',
    birthDate: new Date(),
    phoneNumber: '0987654321',
    vehiclePlate: 'XYZ456',
    vehicleModel: 'Honda',
    createdBy: 'Admin',
    createdAt: new Date().toISOString(),
  },
  // Adicione mais dados conforme necessário
];

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'name', 'birthDate', 'phoneNumber',
    'vehiclePlate', 'vehicleModel', 'createdBy',
    'createdAt', 'actions'
  ];
  dataSource = new MatTableDataSource<Driver>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddDriverComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
