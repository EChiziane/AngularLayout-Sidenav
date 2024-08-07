import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {DriverService} from '../../../Services/driver.service';
import {Driver} from '../../../Model/driver';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {
  profileForm: FormGroup;

  @Output() driverAdded = new EventEmitter<void>();

  constructor(
    private driverService: DriverService,
    public dialogRef: MatDialogRef<AddDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { driver: Driver }
  ) {
    this.profileForm = this.createFormGroup();

    if (data && data.driver) {
      this.profileForm.patchValue(data.driver);
    }
  }

  ngOnInit(): void {
  }

  public createOrUpdateDriver(): void {
    if (this.profileForm.valid) {
      if (this.profileForm.value.id) {
        this.driverService.updateDriver(this.profileForm.value).subscribe({
          next: () => {
            this.driverAdded.emit();
            this.dialogRef.close();
          },
          error: (err) => {
            console.error('Error updating driver', err);
          }
        });
      } else {
        this.driverService.addDriver(this.profileForm.value).subscribe({
          next: () => {
            this.driverAdded.emit();
            this.dialogRef.close();
          },
          error: (err) => {
            console.error('Error adding driver', err);
          }
        });
      }
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      birthDate: new FormControl(''),
      phoneNumber: new FormControl(''),
      vehiclePlate: new FormControl(''),
      vehicleModel: new FormControl('')
    });
  }
}
