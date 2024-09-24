import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
// Componente de diálogo para adicionar Sprint
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {Sprint} from "../../Model/sprint";
import {SprintService} from "../../Services/sprint.service";
import {AddSprintComponent} from "./add-sprint/add-sprint.component"; // Componente de diálogo para confirmação

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'numberCarLoad',
    'driverName',
    'createdBy',
    'createdAt',
    'actions'
  ];
  dataSource = new MatTableDataSource<Sprint>();

  constructor(private sprintService: SprintService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllSprints();
  }

  getAllSprints(): void {
    this.sprintService.getSprints().subscribe(
      (sprints: Sprint[]) => {
        this.dataSource.data = sprints;
      },
      (error) => {
        console.error('Erro ao obter a lista de Sprints', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(AddSprintComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllSprints();
      }
    });
  }

  openEditDialog(id: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const sprint = this.dataSource.data.find(s => s.id === id);
    if (sprint) {
      const dialogRef = this.dialog.open(AddSprintComponent, {
        width: '400px',
        data: sprint,
        enterAnimationDuration,
        exitAnimationDuration
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getAllSprints();
        }
      });
    }
  }

  confirmDeleteSprint(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        message: 'Tem certeza que deseja excluir este Sprint?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteSprint(id);
      }
    });
  }

  deleteSprint(id: string): void {
    this.sprintService.deleteSprint(id).subscribe(
      () => {
        this.getAllSprints();
      },
      (error) => {
        console.error('Erro ao excluir o Sprint', error);
      }
    );
  }
}
