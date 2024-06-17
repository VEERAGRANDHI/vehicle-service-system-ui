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

}
