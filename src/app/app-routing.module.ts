import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLocationComponent } from './my-location/my-location.component';

const routes: Routes = [
  { path: '', component: MyLocationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
