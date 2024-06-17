import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/api.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  public vehiclesList: any[] = [];

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getVehiclesList();
  }

  getVehiclesList() {
    this.apiService.getVehicles().subscribe({
      next: (response: any) => {
        this.vehiclesList = response || [];
      },
      error: (error) => {
        console.log(error);
      }
    })
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
            this.getVehiclesList();
            this.snackBar.open('Vehicle updated successfully', 'Close', {});
          },
          error: (error) => {
            console.log(error);
            this.snackBar.open('Something went wrong', 'Close', {});
          }
        })
      }
    })
  }

  deleteVehicle(id: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        id: id,
        title: `Are you sure you want to delete this vehicle?`
      }
    }).afterClosed().subscribe(result => {
      if (result === true) {
        this.apiService.deleteVehicle(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.getVehiclesList();
            this.snackBar.open('Vehicle deleted successfully', 'Close', {});
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
