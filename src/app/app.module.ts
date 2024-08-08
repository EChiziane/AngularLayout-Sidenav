import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {DialogAnimationsExampleComponent} from './dialog-animations-example/dialog-animations-example.component';
import {
  DialogAnimationsExampleDialogComponent
} from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';
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
import {MatNativeDateModule} from "@angular/material/core";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {DetailsDriverComponent} from './driver/details-driver/details-driver.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogAnimationsExampleComponent,
    DialogAnimationsExampleDialogComponent,
    SidebarComponent,
    HeaderComponent,
    DriverComponent,
    ContentComponent,
    AddDriverComponent,
    DetailsDriverComponent,
    ConfirmDialogComponent
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
    ReactiveFormsModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
