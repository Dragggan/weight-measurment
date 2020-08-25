import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styles: ['div.mat-h2 { width:500px, overflow: inherit; }'],
})
export class DialogDataExampleDialog implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialog: MatDialog
  ) {}
 


  ngOnInit(): void {


  }


deleteSelectedMeasurements(){
  console.log("testr");
}
}
