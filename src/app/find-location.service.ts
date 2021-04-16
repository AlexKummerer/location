import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FindLocationService {
  addresses: string = '';
  address: string = '';
  constructor() {}

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
}
