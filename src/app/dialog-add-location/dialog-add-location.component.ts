import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from 'src/models/location.class';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-dialog-add-location',
  templateUrl: './dialog-add-location.component.html',
  styleUrls: ['./dialog-add-location.component.scss'],
})
export class DialogAddLocationComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAddLocationComponent>,
    private firestore: AngularFirestore
  ) {}

  location: Location = new Location();
  addressSelected = false;
  address: string = '';
  addresses: string = '';

  ngOnInit(): void {}

  changeLocation() {
    this.addressSelected = !this.addressSelected;
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

  saveLocation() {
    console.log('current User', this.location);
    this.firestore
      .collection('locations')
      .add(this.location.toJSON())
      .then((result: any) => {
        console.log('add Location', result);
        this.dialogRef.close();
      });
  }
}
