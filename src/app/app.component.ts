import { Component } from '@angular/core';
import { AppService } from './app.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vehicle-service-system';
  constructor(
    private appService: AppService,
    private router: Router,
  ) {
  }

  public get isLoggedIn(): boolean {
    return this.appService.isLoggedIn();
  }

  logout(): void {
    this.appService.setToken('');
    this.router.navigateByUrl('/login');
  }
}
