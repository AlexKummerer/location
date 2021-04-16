import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from 'src/models/location.class';
import { FindLocationService } from '../find-location.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss'],
})
export class EditLocationComponent implements OnInit {
  locationId: string;
  customIdName: string;
  address: string = '';
  addresses: string = '';
  location: Location = new Location();
  constructor(
    public dialogRef: MatDialogRef<EditLocationComponent>,
    private firestore: AngularFirestore,
    public findLocationService: FindLocationService
  ) {}

  ngOnInit(): void {
    console.log(this.locationId);
    this.getLocation();
  }

  getLocation() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .valueChanges()
      .subscribe((location: any) => {
        this.location = new Location(location);
        console.log('Retrieved Location', this.location);
      });
  }

  displayFn(address): string {
    return address && address.formatted_address
      ? address.formatted_address
      : '';
  }

  updateLocation() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .update(this.location.toJSON())
      .then(() => {
        this.dialogRef.close();
      });
  }

  deleteLocation() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .delete()
      .then(() => {
        this.dialogRef.close();
      });
  }
}
