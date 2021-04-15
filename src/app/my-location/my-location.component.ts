import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogAddLocationComponent } from '../dialog-add-location/dialog-add-location.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.scss'],
})
export class MyLocationComponent implements OnInit {
  location: string;
  allLocations = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
    .collection('locations')
    .valueChanges({ idField: 'customIdName' })
    .subscribe((changes: any) => {
      this.allLocations = changes;
      console.log('changes ', this.allLocations);
    });


  }

  openDialog(): void {
    this.dialog.open(DialogAddLocationComponent, {
      height: '300px',
      width: '650px',
    });
  }
}
