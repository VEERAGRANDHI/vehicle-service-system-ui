import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "./app.service";

const API_URL = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private appService: AppService
  ) { }

  login(data: any) {
    return this.httpClient.post(`${API_URL}/login`, data);
  }

  register(data: any) {
    return this.httpClient.post(`${API_URL}/register`, data);
  }

  getVehicles() {
    return this.httpClient.get(`${API_URL}/vehicles`);
  }

  getVehicle(id: number) {
    return this.httpClient.get(`${API_URL}/vehicles/${id}`);
  }

  createVehicle(data: any) {
    return this.httpClient.post(`${API_URL}/vehicles`, data);
  }

  updateVehicle(id: number, data: any) {
    return this.httpClient.put(`${API_URL}/vehicles/${id}`, data);
  }

  deleteVehicle(id: number) {
    return this.httpClient.delete(`${API_URL}/vehicles/${id}`);
  }

  getAppointments() {
    return this.httpClient.get(`${API_URL}/appointments`);
  }

  getAppointment(id: number) {
    return this.httpClient.get(`${API_URL}/appointments/${id}`);
  }

  createAppointment(data: any) {
    return this.httpClient.post(`${API_URL}/appointments`, data);
  }

  updateAppointment(id: number, data: any) {
    return this.httpClient.put(`${API_URL}/appointments/${id}`, data);
  }

  deleteAppointment(id: number) {
    return this.httpClient.delete(`${API_URL}/appointments/${id}`);
  }
}
