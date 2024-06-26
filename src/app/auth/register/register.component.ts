import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';
import {Router} from "@angular/router";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
  });
  constructor(
    private apiService: ApiService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.form.value, this.form);
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Are you sure you want to register?`,
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.apiService.register(this.form.value).subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigateByUrl('/login');
            this.snackbar.open('You have successfully registered!', 'OK', {
              duration: 2000,
            });
          },
          error: (error) => {
            console.log(error);
            this.snackbar.open(error.error.message, 'OK', {
              duration: 2000,
            });
          }
        });
      }
    })
  }
}
