import {Component} from '@angular/core';
import {AppService} from './app.service';
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vehicle-service-system';

  constructor(
    public appService: AppService,
    private router: Router,
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    if (this.appService.isLoggedIn()) {
      this.apiService.getUsers(this.appService.getCurrentUserId()).subscribe({
        next: (data: any) => {
          this.appService.currentUser = data;
        }
      });
    }
  }

  public get isLoggedIn(): boolean {
    return this.appService.isLoggedIn();
  }

  logout(): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Are you sure you want to logout?',
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.appService.setToken('');
        this.router.navigateByUrl('/login');
        this.appService.currentUser = null;
        this.appService.removeCurrentUserId();
        this.snackbar.open('You have been logged out', 'OK', {
          duration: 2000
        });
      }
    })
  }
}
