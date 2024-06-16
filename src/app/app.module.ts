import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { VehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';
import { VehiclesEntryComponent } from './vehicles/vehicles-entry/vehicles-entry.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VehiclesListComponent,
    VehiclesEntryComponent,
    ServiceListComponent,
    ServiceCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }