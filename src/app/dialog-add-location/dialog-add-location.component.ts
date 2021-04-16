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

  displayFn(address): string {
    return address && address.formatted_address
      ? address.formatted_address
      : '';
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
