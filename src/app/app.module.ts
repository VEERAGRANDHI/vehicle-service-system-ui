import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { VehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';
import { VehiclesEntryComponent } from './vehicles/vehicles-entry/vehicles-entry.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./auth.guard";
import {AppService} from "./app.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./http-interceptor.service";
import {ApiService} from "./api.service";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VehiclesListComponent,
    VehiclesEntryComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    AppService,
    ApiService,
    AuthGuard,
    // Inject HTTP interceptors here
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    // Default matSnackBar config
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['mat-toolbar','mat-primary']
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
