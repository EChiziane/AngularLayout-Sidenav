import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ManagerService} from "../../Services/manager.service";
import {Manager} from "../../Model/manager";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AddManagerComponent} from "./add-manager/add-manager.component";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phoneNumber', 'email', 'createdBy', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<Manager>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private managerService: ManagerService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getManagers();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(AddManagerComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.componentInstance.managerAdded.subscribe(() => {
      this.getManagers();
    });
  }

  openEditDialog(managerId: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.managerService.getManagerById(managerId).subscribe((manager: Manager) => {
      const dialogRef = this.dialog.open(AddManagerComponent, {
        width: '550px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: {manager}, // Envia o gerente a ser editado para o diálogo
      });

      dialogRef.componentInstance.managerAdded.subscribe(() => {
        this.getManagers();
      });
    });
  }

  getManagers(): void {
    this.managerService.getManagers().subscribe((managers: Manager[]) => {
      this.dataSource = new MatTableDataSource(managers);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public confirmDeleteManager(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {title: 'Confirmação', message: 'Você tem certeza que deseja apagar este gerente?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteManager(id);
      }
    });
  }

  private deleteManager(id: string): void {
    this.managerService.deleteManager(id).subscribe(
      () => {
        this.getManagers();
        this.showSnackbar('Gerente deletado com sucesso!', 'success');
      },
      error => {
        this.showSnackbar('Erro ao deletar gerente!', 'error');
      }
    );
  }

  private showSnackbar(message: string, type: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: type === 'success' ? 'snackbar-success' : 'snackbar-error'
    });
  }


}
