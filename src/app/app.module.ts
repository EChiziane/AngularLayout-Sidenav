import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HeaderComponent} from "./header/header.component";
import {DriverComponent} from "./driver/driver.component";
import {ContentComponent} from "./content/content.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AddDriverComponent} from "./driver/add-driver/add-driver.component";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {DetailsDriverComponent} from './driver/details-driver/details-driver.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ManagerComponent} from './manager/manager.component';
import {AddManagerComponent} from './manager/add-manager/add-manager.component';
import {DetailsManagerComponent} from './manager/details-manager/details-manager.component';
import {MaterialComponent} from './material/material.component';
import {AddMaterialComponent} from './material/add-material/add-material.component';
import {SprintComponent} from './sprint/sprint.component';

import {AddSprintComponent} from './sprint/add-sprint/add-sprint.component';
import {CotacaoComponent} from './cotacao/cotacao.component';
import {MatIcon} from "@angular/material/icon";
import {CarloadComponent} from './carload/carload.component';
import {AddCarloadComponent} from './carload/add-carload/add-carload.component';
import {MatSelect} from "@angular/material/select";
import {LoginComponent} from './login/login.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {DashboardComponent} from './dashboard/dashboard.component';
import {CarloadDetailsComponent} from "./carload/details-carload/details-carload.component";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DriverComponent,
    ContentComponent,
    AddDriverComponent,
    DetailsDriverComponent,
    ConfirmDialogComponent,
    ManagerComponent,
    AddManagerComponent,
    DetailsManagerComponent,
    MaterialComponent,
    AddMaterialComponent,
    SprintComponent,
    AddSprintComponent,
    CotacaoComponent,
    CarloadComponent,
    AddCarloadComponent,
    LoginComponent,
    DashboardComponent,
    CarloadDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButton,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatIconButton,
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatFormField,
    MatInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatTable,
    MatLabel,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDrawerContent,
    MatDrawer,
    MatNavList,
    MatDrawerContainer,
    MatListItem,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIcon,
    MatSelect,
    MatOption,
    MatCardContent,
    MatCardHeader,
    MatCard,
    MatCardModule,


  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
