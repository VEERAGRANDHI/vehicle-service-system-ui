import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {ServiceList} from "../../helper/service.helper";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  public appointments: any[] = [];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.getAppointments();
  }


  getAppointments() {
    this.apiService.getAppointments().subscribe({
      next: (response: any) => {
        this.appointments = response || [];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  deleteAppointment(id: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Are you sure you want to delete this appointment?',
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.apiService.deleteAppointment(id).subscribe({
          next: (response: any) => {
            this.snackBar.open('Appointment deleted successfully', 'OK', {
              duration: 2000,
            });
            this.getAppointments();
          },
          error: (error) => {
            console.log(error);
            this.snackBar.open('Error deleting appointment', 'OK', {
              duration: 2000,
            });
          }
        });
      }
    })
  }
}
