import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from 'src/models/location.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { FindLocationService } from '../find-location.service';
@Component({
  selector: 'app-dialog-add-location',
  templateUrl: './dialog-add-location.component.html',
  styleUrls: ['./dialog-add-location.component.scss'],
})
export class DialogAddLocationComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAddLocationComponent>,
    private firestore: AngularFirestore,
    public findLocationService: FindLocationService
  ) {}

  location: Location = new Location();

  addresses: string = '';

  ngOnInit(): void {}


  /**
   * select option address
   * 
   * @param address : selected address
   * @returns address.formatted_address
   */
  displayFn(address): string {
    return address && address.formatted_address
      ? address.formatted_address
      : '';
  }


  /**
   * 
   * save/create Location
   * 
   */
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
