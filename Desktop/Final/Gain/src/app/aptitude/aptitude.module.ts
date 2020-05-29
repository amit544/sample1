import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AptitudeRoutingModule } from './aptitude-routing.module';
import { AptitudeComponent } from './aptitude.component';
import { MatCardModule, MatExpansionModule } from '@angular/material';


@NgModule({
  declarations: [AptitudeComponent],
  imports: [
    CommonModule,
    AptitudeRoutingModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class AptitudeModule { }
