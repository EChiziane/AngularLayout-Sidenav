import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent {

  constructor(public dialogRef: MatDialogRef<AddDriverComponent>) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    // Lógica para adicionar o motorista
    this.dialogRef.close();
  }
}
