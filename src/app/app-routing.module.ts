import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {VehiclesListComponent} from "./vehicles/vehicles-list/vehicles-list.component";
import {VehiclesEntryComponent} from "./vehicles/vehicles-entry/vehicles-entry.component";
import {ServiceListComponent} from "./service/service-list/service-list.component";
import {ServiceCreateComponent} from "./service/service-create/service-create.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'vehicles-list',
    component: VehiclesListComponent
  },
  {
    path: 'vehicles-entry',
    component: VehiclesEntryComponent
  },
  {
    path: 'service-list',
    component: ServiceListComponent
  },
  {
    path: 'service-create',
    component: ServiceCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
