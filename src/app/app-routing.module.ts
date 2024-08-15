import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {DriverComponent} from "./driver/driver.component";
import {DetailsDriverComponent} from "./driver/details-driver/details-driver.component";
import {ManagerComponent} from "./manager/manager.component";
import {DetailsManagerComponent} from "./manager/details-manager/details-manager.component";
import {MaterialComponent} from "./material/material.component";

const routes: Routes = [{path: '', component: ContentComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'driver-detail/:id', component: DetailsDriverComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'manager-detail/:id', component: DetailsManagerComponent},
  {path: 'material', component: MaterialComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
