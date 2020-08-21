import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  public isOpen = new BehaviorSubject<boolean>(false);

  openDialog(): Observable<boolean> {
    return this.isOpen.asObservable();
    }

  constructor() {}
}
