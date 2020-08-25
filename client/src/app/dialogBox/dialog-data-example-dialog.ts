import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styles: ['div.mat-h2 { width:500px, overflow: inherit; }'],
})
export class DialogDataExampleDialog implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogDataExampleDialog,
    public dialog: MatDialog,
    private http: HttpService
  ) {}
 
  test="sdgfdgdfg"


  ngOnInit(): void {


  }


 deleteSelectedMeasurements(id){
  this.http.deleteData(id).subscribe();
  
 }
}
