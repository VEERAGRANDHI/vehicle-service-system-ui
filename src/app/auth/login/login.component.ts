import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppService} from "../../app.service";

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
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  loginNow() {
    console.log(this.form.value);
    this.appService.setToken(`Bearer ${this.form.value.email} ${this.form.value.password}`);
    this.router.navigateByUrl('/vehicles-list');
  }
}
