import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatingsystemRoutingModule } from './operatingsystem-routing.module';
import { OperatingsystemComponent } from './operatingsystem.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [OperatingsystemComponent],
  imports: [
    CommonModule,
    OperatingsystemRoutingModule,
    MatCardModule,
  ]
})
export class OperatingsystemModule { }
