import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
     return this.http.get <any>('http://localhost:3000');
    // return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
