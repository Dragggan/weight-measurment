import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private http: HttpService) {}

  currentWeight: Number;

  sendWeightMeasurment() {
    this.http.sendData(this.currentWeight).subscribe();
    this.currentWeight=null
    window.location.reload();
  }
}
