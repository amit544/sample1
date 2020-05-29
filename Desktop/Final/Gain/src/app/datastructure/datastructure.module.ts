import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatastructureRoutingModule } from './datastructure-routing.module';
import { DatastructureComponent } from './datastructure.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [DatastructureComponent],
  imports: [
    CommonModule,
    DatastructureRoutingModule,
    MatCardModule
  ]
})
export class DatastructureModule { }
