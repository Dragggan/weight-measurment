import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  allData: [];

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000');
  }

  sendData(data): Observable<any> {
    return this.http.post<any>('http://localhost:3000', { weight: data });
  }

  deleteData(_id) {
    return this.http.delete<any>(`http://localhost:3000/${_id}`);
  }
}
