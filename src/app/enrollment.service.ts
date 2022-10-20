import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';

  constructor(
    private http: HttpClient
  ) { }

  enroll (user : User) {
    return this.http.post<any>(this._url, user).pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse) {
    return throwError(error)
  }
}
