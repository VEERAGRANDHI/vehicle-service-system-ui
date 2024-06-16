import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {
  appointmentForm: FormGroup;

  constructor() {
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
  }
  ngOnInit(): void {
  }

}
