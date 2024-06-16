import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {VehiclesListComponent} from "./vehicles/vehicles-list/vehicles-list.component";
import {VehiclesEntryComponent} from "./vehicles/vehicles-entry/vehicles-entry.component";
import {ServiceListComponent} from "./service/service-list/service-list.component";
import {ServiceCreateComponent} from "./service/service-create/service-create.component";
import {AuthGuard} from "./auth.guard";
import {LoggedInGuard} from "./logged-in.guard";

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoggedInGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [LoggedInGuard],
    component: RegisterComponent
  },
  {
    path: 'vehicles-list',
    canActivate: [AuthGuard],
    component: VehiclesListComponent
  },
  {
    path: 'vehicles-entry',
    canActivate: [AuthGuard],
    component: VehiclesEntryComponent
  },
  {
    path: 'service-list',
    canActivate: [AuthGuard],
    component: ServiceListComponent
  },
  {
    path: 'service-create',
    canActivate: [AuthGuard],
    component: ServiceCreateComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
