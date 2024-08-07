import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AddDriverComponent} from './add-driver/add-driver.component';
import {DriverService} from "../../Services/driver.service";
import {Driver} from "../../Model/driver";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber', 'vehiclePlate', 'vehicleModel', 'createdBy', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<Driver>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private driverService: DriverService
  ) {
  }

  ngOnInit(): void {
    this.getDrivers();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(AddDriverComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.componentInstance.driverAdded.subscribe(() => {
      this.getDrivers(); // Atualiza a lista
    });
  }

  openEditDialog(driverId: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.driverService.getDriverById(driverId).subscribe((driver: Driver) => {
      const dialogRef = this.dialog.open(AddDriverComponent, {
        width: '550px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: {driver}
      });

      dialogRef.componentInstance.driverAdded.subscribe(() => {
        this.getDrivers(); // Atualiza a lista
      });
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getDrivers(): void {
    this.driverService.getDriver().subscribe((drivers: Driver[]) => {
      this.dataSource.data = drivers;
      this.dataSource.paginator = this.paginator;
    });
  }

  public deleteDriver(id: string): void {
    this.driverService.deleteDriver(id).subscribe(() => {
      this.getDrivers();
    });
  }
}
