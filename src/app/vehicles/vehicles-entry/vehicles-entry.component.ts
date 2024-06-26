import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from 'src/app/api.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-vehicles-entry',
  templateUrl: './vehicles-entry.component.html',
  styleUrls: ['./vehicles-entry.component.scss']
})
// Reuse this component for both create and edit
export class VehiclesEntryComponent implements OnInit {
  vehicleForm: FormGroup;
  public queryParams: Params = {};
  constructor(
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    this.vehicleForm = new FormGroup({
      id: new FormControl(''), // Vehicle ID
      vehicle_type: new FormControl(''), // Type of the vehicle (Car, Bike, Truck, etc.)
      brand: new FormControl(''), // Brand of the vehicle (Toyota, Honda, BMW, etc.)
      model: new FormControl(''), // Specific model of the vehicle (Camry, Accord, X5, etc.)
      color: new FormControl(''), // Color of the vehicle
      license_plate: new FormControl(''), // License plate number of the vehicle
      year_of_manufacture: new FormControl(''), // Year the vehicle was manufactured
      seating_capacity: new FormControl(''), // Number of people the vehicle can seat
      fuel_type: new FormControl(''), // Type of fuel the vehicle uses (Petrol, Diesel, Electric, etc.)
      transmission_type: new FormControl(''), // Type of transmission in the vehicle (Manual, Automatic)
      created_at: new FormControl(''), // Timestamp when the record was created
      updated_at: new FormControl('') // Timestamp when the record was last updated
    });
    this.vehicleForm?.get('id')?.disable();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
      if (params['id']) {
        this.apiService.getVehicle(params['id']).subscribe({
          next: (data) => {
            this.vehicleForm.patchValue(data);
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }

  actionOnVehicle() {
    if (this.queryParams['id']) {
      this.editVehicle(this.vehicleForm.getRawValue());
    } else {
      this.createVehicle();
    }
  }

  createVehicle() {
    this.apiService.createVehicle(this.vehicleForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.snackBar.open('Vehicle created successfully', 'Close', {
          duration: 2000,
        });
        this.router.navigateByUrl('/vehicles-list');
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Error creating vehicle', 'Close', {
          duration: 2000,
        });
      }
    });
  }

  editVehicle(vehicle: any) {
    /*Confirmation*/
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        id: vehicle.id,
        title: `Are you sure you want to edit this vehicle?`
      }
    }).afterClosed().subscribe(result => {
      if (result === true) {
        console.log(vehicle);
        this.apiService.updateVehicle(vehicle.id, vehicle).subscribe({
          next: (response: any) => {
            console.log(response);
            this.snackBar.open('Vehicle updated successfully', 'Close', {});
            this.router.navigateByUrl('/vehicles-list');
          },
          error: (error) => {
            console.log(error);
            this.snackBar.open('Something went wrong', 'Close', {});
          }
        })
      }
    })
  }
}
