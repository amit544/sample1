import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { CComponent } from './c.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    CRoutingModule,
    MatCardModule
  ]
})
export class CModule { }
