import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-dialog-add-location',
  templateUrl: './dialog-add-location.component.html',
  styleUrls: ['./dialog-add-location.component.scss'],
})
export class DialogAddLocationComponent implements OnInit {
  streets: any;
  constructor(public dialogRef: MatDialogRef<DialogAddLocationComponent>) {}
  // API_KEY  = ''https://maps.googleapis.com/maps/api/geocode/json?address=' +
  // this.address +
  // '&key=' +
  // apiKey;  '
  control = new FormControl();
  autocompleteInput: string;
  addressSelected = false;
  address: string = '';
  addreses = []
  filteredAddresses: Observable<string[]>;
  ngOnInit(): void {
    this.filteredAddresses = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }
  private _filter(value: any) {
    const filterValue = this._normalizeValue(value);
    return this.addreses.filter(address => this._normalizeValue(address).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  changeLocation() {
    this.addressSelected = !this.addressSelected;
  }

  async getAddress(data) {
    this.address = data;
    let apiKey = 'AIzaSyDyAbpvB9qmUgN6gfNf0bB_uZ5YSJueRIk';
    const url =
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      this.address +
      '&key=' +
      apiKey;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.addreses = json.results;
        console.log(this.addreses);
      });
  }
}


