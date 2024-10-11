import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SprintService} from "../../../Services/sprint.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Sprint} from "../../../Model/sprint";
import {Driver} from "../../../Model/driver";
import {DriverService} from "../../../Services/driver.service";

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrl: './add-sprint.component.scss'
})
export class AddSprintComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    driverId: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    createdBy: new FormControl(''),
    createdAt: new FormControl('')
  });
  isEditMode: boolean;

  @Output() sprintAdded = new EventEmitter<void>();

  constructor(
    private driverService: DriverService,
    private sprintService: SprintService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddSprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sprint: Sprint }
  ) {
    this.isEditMode = !!data?.sprint;

    if (this.isEditMode) {
      this.profileForm.patchValue(data.sprint);
    }
  }

  protected drivers!: Driver[];

  ngOnInit(): void {
    this.getDrivers();
  }

  public getDrivers(): void {
    this.driverService.getDriver().subscribe((drivers: Driver[]) => {
        this.drivers = drivers;
      },
      (error) => {
        console.error('Erro ao obter a lista de Motoristas', error);
      });
  }

  public createOrUpdateSprint(): void {
    if (this.profileForm.valid) {
      if (this.isEditMode) {
        this.sprintService.updateSprint(this.profileForm.value).subscribe({
          next: () => {
            this.sprintAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Sprint atualizado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error updating sprint', err);
            this.showSnackbar('Erro ao atualizar sprint!', 'error');
          }
        });
      } else {
        this.sprintService.addSprint(this.profileForm.value).subscribe({
          next: () => {
            this.sprintAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Sprint adicionado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error adding sprint', err);
            this.showSnackbar('Erro ao adicionar sprint!', 'error');
          }
        });
      }
    }
  }

  public onClose(): void {
    this.dialogRef.close();
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
