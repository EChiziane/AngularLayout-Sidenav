import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MaterialService} from '../../../Services/material.service';
import {Material} from '../../../Model/material';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(0),
    createdBy: new FormControl(''),
    createdAt: new FormControl('')
  });
  isEditMode: boolean;

  @Output() materialAdded = new EventEmitter<void>();

  constructor(
    private materialService: MaterialService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { material: Material }
  ) {
    this.isEditMode = !!data?.material;

    if (this.isEditMode) {
      this.profileForm.patchValue(data.material);
    }
  }

  ngOnInit(): void {
  }

  public createOrUpdateMaterial(): void {
    if (this.profileForm.valid) {
      if (this.isEditMode) {
        this.materialService.updateMaterial(this.profileForm.value).subscribe({
          next: () => {
            this.materialAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Material atualizado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error updating material', err);
            this.showSnackbar('Erro ao atualizar material!', 'error');
          }
        });
      } else {
        this.materialService.addMaterial(this.profileForm.value).subscribe({
          next: () => {
            this.materialAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Material adicionado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Error adding material', err);
            this.showSnackbar('Erro ao adicionar material!', 'error');
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
