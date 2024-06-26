import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {
  appointmentForm: FormGroup;
  public vehiclesList: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private apiService: ApiService,
    private router: Router
  ) {
    this.appointmentForm = new FormGroup({
      id: new FormControl(''), // Appointment ID
      vehicle_id: new FormControl('', Validators.required), // Vehicle ID
      customer_name: new FormControl('', Validators.required), // Customer Name
      customer_phone: new FormControl('', Validators.required), // Customer Phone
      customer_email: new FormControl('', [Validators.required, Validators.email]), // Customer Email
      appointment_date: new FormControl('', Validators.required), // Appointment Date
      appointment_time: new FormControl('', Validators.required), // Appointment Time
      service_type: new FormControl('', Validators.required), // Service Type
      notes: new FormControl(''), // Notes
      created_at: new FormControl(''), // Created At
      updated_at: new FormControl('') // Updated At
    });
    this.appointmentForm.get('id')?.disable();
    // this.appointmentForm.get('vehicle_id')?.disable();
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['id']) {
        this.apiService.getAppointment(params['id']).subscribe(data => {
          this.appointmentForm.patchValue(data);
        });
      }
    });
    this.getVehiclesList();
  }



  actionOnAppointment() {
    console.log(this.appointmentForm.value);
    if (this.appointmentForm.getRawValue().id) {
      this.editAnAppointment();
    } else {
      this.createAnAppointment();
    }
  }

  createAnAppointment() {
    const formData = this.appointmentForm.getRawValue();
    this.apiService.createAppointment(formData).subscribe({
      next: data => {
        this.snackBar.open('Appointment created successfully', 'Close', {
          duration: 2000,
        });
        this.router.navigateByUrl('/service-list');
      },
      error: error => {
        this.snackBar.open(error.message, 'Close', {
          duration: 2000,
        });
      }
    });
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

  editAnAppointment() {
    const formData = this.appointmentForm.getRawValue();
    this.apiService.updateAppointment(formData.id, formData).subscribe({
      next: data => {
        this.snackBar.open('Appointment updated successfully', 'Close', {
          duration: 2000,
        });
        this.router.navigateByUrl('/service-list');
      },
      error: error => {
        this.snackBar.open(error.message, 'Close', {
          duration: 2000,
        });
      }
    });
  }
}
