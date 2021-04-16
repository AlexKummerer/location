import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddLocationComponent } from '../dialog-add-location/dialog-add-location.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from 'src/models/location.class';
import { EditLocationComponent } from '../edit-location/edit-location.component';
@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.scss'],
})
export class MyLocationComponent implements OnInit {
  location: Location = new Location();
  allLocations = [];
  locationId: string = '';
  customIdName = '';

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.firestore
      .collection('locations')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((location: any) => {
        this.allLocations = location;
        console.log('changes ', this.allLocations);
      });
  }

  openAddLocationDialog(): void {
    this.dialog.open(DialogAddLocationComponent, {
      height: '310px',
      width: '650px',
    });
  }

  editLocation(customIdName) {
    this.locationId = customIdName;
    console.log('locationId', this.locationId);

    const dialogRef = this.dialog.open(EditLocationComponent, {
      height: '310px',
      width: '650px',
    });
    dialogRef.componentInstance.locationId = customIdName;
  }
}
