import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { HowitworksComponent } from "./howitworks/howitworks.component";
import { PricingComponent } from "./pricing/pricing.component";

@NgModule({
    imports: [
        CommonModule,
        SampleRoutingModule,
        TranslateModule,
       
    ],
    declarations: [
        SampleComponent,
       
    ]
})
export class SampleModule { }
