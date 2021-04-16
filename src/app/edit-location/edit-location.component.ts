import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from 'src/models/location.class';

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
    private firestore: AngularFirestore
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

  async getAddress(data) {
    this.address = data;
    let apiKey = 'AIzaSyDyAbpvB9qmUgN6gfNf0bB_uZ5YSJueRIk';
    const url =
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      this.address +
      '&key=' +
      apiKey;
    let response = await fetch(url);
    let responseBody = await response.json();
    this.addresses = responseBody.results;
    console.log(this.addresses);
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
