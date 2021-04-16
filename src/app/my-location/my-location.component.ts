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

/**
 * 
 *  get Locations from firebase
 * 
 */
  getLocations() {
    this.firestore
      .collection('locations')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((location: any) => {
        this.allLocations = location;
        console.log('changes ', this.allLocations);
      });
  }


/**
 * 
 * open Dialog to add a new Location
 * 
 */
  openAddLocationDialog(): void {
    this.dialog.open(DialogAddLocationComponent, {
      height: '400px',
      width: '650px',
    });
  }


  /**
   * 
   * @param customIdName : Id of this location 
   * 
   * open Dialo to edit a location
   * 
   */
  editLocation(customIdName) {
    this.locationId = customIdName;
    console.log('locationId', this.locationId);

    const dialogRef = this.dialog.open(EditLocationComponent, {
      height: '400px',
      width: '650px',
    });
    dialogRef.componentInstance.locationId = customIdName;
  }
}
