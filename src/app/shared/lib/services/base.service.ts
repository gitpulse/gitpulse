import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private headers = new HttpHeaders( {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(
    protected http: HttpClient,
  ) { }

  getRequest(url: string, params = {}): Observable<any> {
    return this.http.get(url, { params }).pipe(
      catchError((error: HttpErrorResponse) =>  {
        console.log(error);
        return of(error);
      })
    );
  }

  postRequest(url: string, body: object = null): Observable<any> {
    const requestBody = body;
    console.log(requestBody);
    return this.http.post(url, requestBody, { headers: this.headers }).pipe(
      catchError((error: HttpErrorResponse) =>  {
        console.log(error);
        return of(error);
      })
    );
  }

}
