import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewjobpostRoutingModule } from './newjobpost-routing.module';
import { NewjobpostComponent } from './newjobpost.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [
        CommonModule,
        NewjobpostRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [NewjobpostComponent]
})
export class NewjobpostModule {
    
}
