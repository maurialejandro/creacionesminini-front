import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, catchError, map } from 'rxjs';

import { Data } from './user';
// generate handle herror.services
import { environment } from './../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    // add auth tocken
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient ) {}

  getUsers(): Observable<Data> {
    return this.http.get<Data>(`${environment.apiUrl}/user`)
  }
}
