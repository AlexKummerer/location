import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-location',
  templateUrl: './dialog-add-location.component.html',
  styleUrls: ['./dialog-add-location.component.scss'],
})
export class DialogAddLocationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogAddLocationComponent>) {}

  addressSelected = false;

  ngOnInit(): void {}
  changeLocation() {
    this.addressSelected = !this.addressSelected;
  }
}
