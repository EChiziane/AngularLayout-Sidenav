import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DriverService} from '../../../Services/driver.service';
import {Driver} from '../../../Model/driver';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    birthDate: new FormControl<Date | null>(null),
    phoneNumber: new FormControl(''),
    vehiclePlate: new FormControl(''),
    vehicleModel: new FormControl('')
  });
  isEditMode: boolean;

  @Output() driverAdded = new EventEmitter<void>();

  constructor(
    private driverService: DriverService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { driver: Driver }
  ) {
    this.isEditMode = !!data?.driver;

    if (this.isEditMode) {
      this.profileForm.patchValue(data.driver);
    }
  }

  ngOnInit(): void {
  }

  public createOrUpdateDriver(): void {
    if (this.profileForm.valid) {
      if (this.isEditMode) {
        this.driverService.updateDriver(this.profileForm.value).subscribe({
          next: () => {
            this.driverAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Motorista atualizado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error updating driver', err);
            this.showSnackbar('Erro ao atualizar motorista!', 'error');
          }
        });
      } else {
        this.driverService.addDriver(this.profileForm.value).subscribe({
          next: () => {
            this.driverAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Motorista adicionado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error adding driver', err);
            this.showSnackbar('Erro ao adicionar motorista!', 'error');
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
