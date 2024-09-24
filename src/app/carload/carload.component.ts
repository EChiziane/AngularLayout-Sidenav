import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AddCarloadComponent} from "./add-carload/add-carload.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CarloadService} from "../../Services/carload.service";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Carload} from "../../Model/car-load";

@Component({
  selector: 'app-carload',
  templateUrl: './carload.component.html',
  styleUrls: ['./carload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarloadComponent {
  displayedColumns: string[] = ['createdAt', 'materialName', 'destination', 'clientName', 'clientNumber', 'totalExpenses', 'earnings', 'driverName', 'createdBy', 'actions'];

  dataSource = new MatTableDataSource<Carload>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private carloadService: CarloadService,
    private snackBar: MatSnackBar
  ) {
  }

  ngAfterViewInit() {
    // Configura o paginator após a tabela ser inicializada
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getCarloads();
  }

  getCarloads(): void {
    this.carloadService.getCarloads().subscribe((carloads: Carload[]) => {
      this.dataSource.data = carloads;
      this.dataSource.paginator = this.paginator; // Vincula o paginator ao dataSource
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(AddCarloadComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.componentInstance.carloadAdded.subscribe(() => {
      this.getCarloads();
    });
  }

  openEditDialog(carloadId: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.carloadService.getCarloadById(carloadId).subscribe((carload: Carload) => {
      const dialogRef = this.dialog.open(AddCarloadComponent, {
        width: '550px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: {id: carloadId}
      });

      dialogRef.componentInstance.carloadAdded.subscribe(() => {
        this.getCarloads();
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // Reseta para a primeira página após filtrar
    }
  }

  confirmDeleteCarload(carloadId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Tem certeza que deseja excluir esta carrada?',
        buttonText: {
          ok: 'Sim',
          cancel: 'Não'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteCarload(carloadId);
      }
    });
  }

  deleteCarload(carloadId: string) {
    this.carloadService.deleteCarload(carloadId).subscribe(() => {
      this.showSnackbar('Carrada excluída com sucesso!', 'success');
      this.getCarloads();
    }, () => {
      this.showSnackbar('Erro ao excluir carrada.', 'error');
    });
  }

  showSnackbar(message: string, type: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: type === 'success' ? 'snackbar-success' : 'snackbar-error'
    });
  }
}
