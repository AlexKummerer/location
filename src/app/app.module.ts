import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLocationComponent } from './my-location/my-location.component';
import { MatCardModule } from '@angular/material/card';
import { DialogAddLocationComponent } from './dialog-add-location/dialog-add-location.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [AppComponent, MyLocationComponent, DialogAddLocationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    GooglePlaceModule,
    MatAutocompleteModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
