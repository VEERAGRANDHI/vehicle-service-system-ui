import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private appService: AppService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const TOKEN = this.appService.getToken(); // Replace with your actual token
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${TOKEN}`).set('Accept', 'application/json')
    });
    return next.handle(clonedReq);
  }
}
