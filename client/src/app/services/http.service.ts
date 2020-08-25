import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  allData: [];

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(environment.envVar.API_URL);
  }

  sendData(data): Observable<any> {
    return this.http.post<any>(environment.envVar.API_URL, { weight: data });
  }

  deleteData(id) {
    return this.http.delete<any>(`${environment.envVar.API_URL}/${id}`);
    
  }
}
