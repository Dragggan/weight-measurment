import { HttpService } from '../services/http.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialog } from '../dialogBox/dialog-data-example-dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-list-of-measurments',
  templateUrl: './list-of-measurments.component.html',
  styleUrls: ['./list-of-measurments.component.css'],
})
export class ListOfMeasurmentsComponent implements OnInit {
  constructor(private http: HttpService, public dialog: MatDialog
  ) {}
  selectedId: String;
  displayedColumns: string[] = ['_id', 'date', 'weight', 'delete'];
  mesurmentsData: any;



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.http.getData().subscribe((data) => {
      this.mesurmentsData = new MatTableDataSource<PeriodicElement>(data);
      this.mesurmentsData.paginator = this.paginator;
    });
  }

  openDeleteDialog(id) {
    this.dialog.open(DialogDataExampleDialog,{
      data:id
    });

    //   deletemeasurementsById(selectedRow) {
    // this.dialog.open(DialogDataExampleDialog,{
    //   data:{selectedRow: selectedRow}
    // })
    //   }
  }
}

export interface PeriodicElement {
  _id: string;
  date: Date;
  weight: number;
  delete: MatButton;
}
