import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogAddLocationComponent } from '../dialog-add-location/dialog-add-location.component';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.scss'],
})
export class MyLocationComponent implements OnInit {
  location: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(DialogAddLocationComponent, {
      height: '250px',
      width: '650px',
    });
  }
}
