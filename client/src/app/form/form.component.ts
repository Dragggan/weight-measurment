import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
  }

  currentWeight: Number;

  sendWeightMeasurment() {
    
  }
}
