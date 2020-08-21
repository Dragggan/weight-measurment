import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SharedServiceService } from '../shared/shared-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styles: ['div.mat-h2 { width:500px, overflow: inherit; }'],
})
export class DialogDataExampleDialog implements OnInit {
  constructor(
    private sharedService: SharedServiceService,
    @Inject(MAT_DIALOG_DATA)
    public dialog: MatDialog
  ) {}
 
  isFirstComponentExpanded


  ngOnInit(): void {
this.sharedService.isOpen.subscribe(x=>console.log(x))

    //   console.log("sdgfgfds");
    // this.sharedService.openDialog().subscribe((x) => {
    //     console.log(x);
    //     console.log('ok');
    //     this.isFirstComponentExpanded = x
    // });
  }

// ngOnInit() {
//     console.log("component has been initialized!")
//   }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      width: '500px',
      data: { name: 'sdfdsfdsfsd' },
    });
  }
}
