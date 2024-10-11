import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriverComponent} from "./driver/driver.component";
import {DetailsDriverComponent} from "./driver/details-driver/details-driver.component";
import {ManagerComponent} from "./manager/manager.component";
import {DetailsManagerComponent} from "./manager/details-manager/details-manager.component";
import {MaterialComponent} from "./material/material.component";
import {SprintComponent} from "./sprint/sprint.component";
import {CotacaoComponent} from "./cotacao/cotacao.component";
import {CarloadComponent} from "./carload/carload.component";
import {LoginComponent} from "./login/login.component";
import {CarloadDetailsComponent} from "./carload/details-carload/details-carload.component";
import {DetailsMaterialsComponent} from "./material/details-materials/details-materials.component";


const routes: Routes = [
  {path: 'driver', component: DriverComponent},
  {path: 'driver-detail/:id', component: DetailsDriverComponent},
  {path: 'carload-detail/:id', component: CarloadDetailsComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'manager-detail/:id', component: DetailsManagerComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'material-detail/:id', component: DetailsMaterialsComponent},
  {path: 'sprint', component: SprintComponent},
  {path: 'carload', component: CarloadComponent},
  {path: 'cotacao', component: CotacaoComponent},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
