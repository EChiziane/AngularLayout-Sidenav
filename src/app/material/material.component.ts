import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Material } from '../../Model/material';
import { MaterialService } from '../../Services/material.service';
import { AddMaterialComponent } from './add-material/add-material.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent implements OnInit {
  displayedColumns: string[] = ['id', 'type', 'createdBy', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<Material>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private materialService: MaterialService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMaterials();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(AddMaterialComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.componentInstance.materialAdded.subscribe(() => {
      this.getMaterials();
    });
  }

  openEditDialog(materialId: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.materialService.getMaterialById(materialId).subscribe((material: Material) => {
      const dialogRef = this.dialog.open(AddMaterialComponent, {
        width: '550px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: { material }
      });

      dialogRef.componentInstance.materialAdded.subscribe(() => {
        this.getMaterials();
      });
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getMaterials(): void {
    this.materialService.getMaterials().subscribe((materials: Material[]) => {
      this.dataSource.data = materials;
      this.dataSource.paginator = this.paginator;
    });
  }

  public confirmDeleteMaterial(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { title: 'Confirmação', message: 'Você tem certeza que deseja apagar este material?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteMaterial(id);
      }
    });
  }

  private deleteMaterial(id: string): void {
    this.materialService.deleteMaterial(id).subscribe(
      () => {
        this.getMaterials();
        this.showSnackbar('Material deletado com sucesso!', 'success');
      },
      error => {
        this.showSnackbar('Erro ao deletar material!', 'error');
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
