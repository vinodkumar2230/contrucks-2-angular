import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckersignupComponent } from './truckersignup.component';
import { TruckersignupRoutingModule } from "./truckersignup-routing.module";

@NgModule({
  imports: [
    CommonModule,
    TruckersignupRoutingModule
  ],
  declarations: [TruckersignupComponent]
})
export class TruckersignupModule { }
