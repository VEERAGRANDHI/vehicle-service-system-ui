import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppService} from "../../app.service";
import {ApiService} from "../../api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor(
    private router: Router,
    private appService: AppService,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  loginNow() {
    this.apiService.login(this.form.value).subscribe({
      next: (res: any) => {
        this.appService.setToken(res.access_token);
        this.router.navigateByUrl('/vehicles-list');
        this.appService.currentUser = res.user;
        this.appService.setCurrentUserId(res.user.id);
        this.snackBar.open('Logged in successfully', '', {
          duration: 2000,
        });
      },
      error: (err) => {
        this.snackBar.open(err.error.message, '', {
          duration: 2000,
        });
      }
    });
  }
}
