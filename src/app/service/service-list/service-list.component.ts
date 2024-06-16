import {Component, OnInit} from '@angular/core';
import {ServiceList} from "../../helper/service.helper";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  public appointments = ServiceList;

  constructor() {
  }

  ngOnInit(): void {
  }

  editAppointment(id: number) {
    // Find the appointment by id
    const appointment = this.appointments.find(appointment => appointment.id === id);

    if (appointment) {
      // Logic to edit the appointment
      // This could involve navigating to a different page with the appointment data
      console.log(`Editing appointment with ID: ${id}`);
    } else {
      console.log(`Appointment with ID: ${id} not found`);
    }
  }

  deleteAppointment(id: number) {
    // Find the index of the appointment with the given id
    const index = this.appointments.findIndex(appointment => appointment.id === id);

    if (index !== -1) {
      // Remove the appointment from the array
      this.appointments.splice(index, 1);

      // Logic to delete the appointment from the server
      console.log(`Deleting appointment with ID: ${id}`);
    } else {
      console.log(`Appointment with ID: ${id} not found`);
    }
  }
}
