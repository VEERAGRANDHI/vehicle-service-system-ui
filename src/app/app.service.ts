import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  public currentUser: any = null;
  public isLoggedIn(): boolean {
    return !!localStorage.getItem('AUTH_TOKEN');
  }

  public setToken(token: string): void {
    localStorage.setItem('AUTH_TOKEN', token);
  }

  getToken(): string {
    return localStorage.getItem('AUTH_TOKEN') as string;
  }

  setCurrentUserId(id: string): void {
    return localStorage.setItem('CURRENT_USER_ID', id);
  }

  getCurrentUserId(): number {
    return Number(localStorage.getItem('CURRENT_USER_ID')) as number;
  }

  removeCurrentUserId(): void {
    return localStorage.removeItem('CURRENT_USER_ID');
  }
}
