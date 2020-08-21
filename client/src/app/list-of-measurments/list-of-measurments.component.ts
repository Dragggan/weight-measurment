import { HttpService } from '../services/http.service';
import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-list-of-measurments',
  templateUrl: './list-of-measurments.component.html',
  styleUrls: ['./list-of-measurments.component.css'],
})
export class ListOfMeasurmentsComponent implements OnInit,OnChanges {
  constructor(private http: HttpService) {}
  selectedId: String;
  displayedColumns: string[] = ['_id', 'date', 'weight','delete'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.http.getData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("test");
  }

  deletemeasurementsById(selectedRow){
    this.http.deleteData(selectedRow._id).subscribe((data) => {
      console.log(data);
    });
    this.http.getData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
export interface PeriodicElement {
  _id: string;
  date: Date;
  weight: number;
  delete:MatButton;
}
