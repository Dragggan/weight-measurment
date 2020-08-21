import { HttpService } from '../services/http.service';
import { SharedServiceService } from '../shared/shared-service.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-of-measurments',
  templateUrl: './list-of-measurments.component.html',
  styleUrls: ['./list-of-measurments.component.css'],
})
export class ListOfMeasurmentsComponent implements OnInit {
  constructor(private http: HttpService, public dialog: MatDialog,
    private sharedService : SharedServiceService) {}
  selectedId: String;
  displayedColumns: string[] = ['_id', 'date', 'weight', 'delete'];
  dataSource: any;

  data: string[] = [];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.http.getData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      this.dataSource.paginator = this.paginator;
    });
  }


  openDeleteDialog(){
    this.sharedService.openDialog();
  }


  deletemeasurementsById(selectedRow) {
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
  delete: MatButton;
}


