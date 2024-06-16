import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vehicles-entry',
  templateUrl: './vehicles-entry.component.html',
  styleUrls: ['./vehicles-entry.component.scss']
})
export class VehiclesEntryComponent implements OnInit {
  vehicleForm: FormGroup;

  constructor() {
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
  }

  ngOnInit(): void {
  }

}
