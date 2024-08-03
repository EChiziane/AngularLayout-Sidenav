import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  DialogAnimationsExampleDialogComponent
} from "../dialog-animations-example-dialog/dialog-animations-example-dialog.component";

@Component({
  selector: 'app-dialog-animations-example',
  templateUrl: './dialog-animations-example.component.html',
  styleUrl: './dialog-animations-example.component.scss'
})
export class DialogAnimationsExampleComponent {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
