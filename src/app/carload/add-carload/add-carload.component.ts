import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarloadService} from "../../../Services/carload.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Driver} from "../../../Model/driver";
import {DriverService} from "../../../Services/driver.service";
import {Sprint} from "../../../Model/sprint";
import {SprintService} from "../../../Services/sprint.service";
import {ManagerService} from "../../../Services/manager.service";
import {MaterialService} from "../../../Services/material.service";
import {Manager} from "../../../Model/manager";
import {Material} from "../../../Model/material";

@Component({
  selector: 'app-add-carload',
  templateUrl: './add-carload.component.html',
  styleUrls: ['./add-carload.component.scss']
})
export class AddCarloadComponent {

  carloadForm = new FormGroup({
    id: new FormControl(''),
    destination: new FormControl(''),
    clientNumber: new FormControl(''),
    earnings: new FormControl<number>(0),
    totalExpenses: new FormControl<number>(0),
    fuelExpense: new FormControl<number>(0),
    policeExpense: new FormControl<number>(0),
    driverExpenses: new FormControl<number>(0),
    managerExpenses: new FormControl<number>(0),
    purchaseMoney: new FormControl<number>(0),
    toll: new FormControl<number>(0),
    sprintId: new FormControl(''),
    driverId: new FormControl(''),
    managerId: new FormControl(''),
    clientName: new FormControl(''),
    materialId: new FormControl(''),
    createdBy: new FormControl(''),
    createdAt: new FormControl<Date | null>(null)
  });

  isEditMode: boolean;
  @Output() carloadAdded = new EventEmitter<void>();
  protected drivers!: Driver[];
  protected sprints!: Sprint[];
  protected managers!: Manager[];
  protected materials!: Material[];

  constructor(
    private carloadService: CarloadService,
    private snackBar: MatSnackBar,
    private sprintService: SprintService,
    private managerService: ManagerService,
    private materialService: MaterialService,
    private driverService: DriverService,
    public dialogRef: MatDialogRef<AddCarloadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { carload: any }
  ) {
    this.isEditMode = !!data?.carload;

    if (this.isEditMode) {
      this.carloadForm.patchValue(data.carload);
    }
  }


  ngOnInit(): void {
    this.getDrivers();
    this.getManagers();
    this.getSprints();
    this.getMaterials();
  }


  public createOrUpdateCarload(): void {
    if (this.carloadForm.valid) {
      if (this.isEditMode) {
        this.carloadService.updateCarload(this.carloadForm.value).subscribe({
          next: () => {
            this.carloadAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Carregamento atualizado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Erro ao atualizar carregamento', err);
            this.showSnackbar('Erro ao atualizar carregamento!', 'error');
          }
        });
      } else {
        this.carloadService.addCarload(this.carloadForm.value).subscribe({
          next: () => {
            this.carloadAdded.emit();
            this.dialogRef.close();
            this.showSnackbar('Carregamento adicionado com sucesso!', 'success');
          },
          error: (err) => {
            console.error('Erro ao adicionar carregamento', err);
            this.showSnackbar('Erro ao adicionar carregamento!', 'error');
          }
        });
      }
    }
  }


  public getDrivers(): void {
    this.driverService.getDriver().subscribe((drivers: Driver[]) => {
        this.drivers = drivers;
      },
      (error) => {
        console.error('Erro ao obter a lista de Motoristas', error);
      });
  }

  getSprints(): void {
    this.sprintService.getSprints().subscribe((sprints: Sprint[]) => {
        this.sprints = sprints;
      },
      (error) => {
        console.error('Erro ao obter a lista de Sprints', error);
      }
    );
  }

  getManagers(): void {
    this.managerService.getManagers().subscribe((managers: Manager[]) => {
        this.managers = managers;
      },
      (error) => {
        console.error('Erro ao obter a lista de Gerentes', error);
      }
    );
  }

  getMaterials(): void {
    this.materialService.getMaterials().subscribe((materials: Material[]) => {
        this.materials = materials;
      },
      (error) => {
        console.error('Erro ao obter a lista de Materiais', error);
      }
    );
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
