import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {DriverComponent} from "./driver/driver.component";
import {DetailsDriverComponent} from "./driver/details-driver/details-driver.component";

const routes: Routes = [{path: '', component: ContentComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'driver-detail/:id', component: DetailsDriverComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
