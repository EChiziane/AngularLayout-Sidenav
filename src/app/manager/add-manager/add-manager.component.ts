import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ManagerService} from '../../../Services/manager.service';
import {Manager} from '../../../Model/manager';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  });
  isEditMode: boolean;

  @Output() managerAdded = new EventEmitter<void>();

  constructor(
    private managerService: ManagerService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { manager: Manager }
  ) {
    this.isEditMode = !!data?.manager;

    if (this.isEditMode) {
      this.profileForm.patchValue(data.manager);
    }
  }

  ngOnInit(): void {
  }

  public createOrUpdateManager(): void {
    if (this.profileForm.valid) {
      if (this.isEditMode) {
        this.managerService.updateManager(this.profileForm.value).subscribe({
          next: () => {
            this.managerAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Gerente atualizado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error updating manager', err);
            this.showSnackbar('Erro ao atualizar gerente!', 'error');
          }
        });
      } else {
        this.managerService.addManager(this.profileForm.value).subscribe({
          next: () => {
            this.managerAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Gerente adicionado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error adding manager', err);
            this.showSnackbar('Erro ao adicionar gerente!', 'error');
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
