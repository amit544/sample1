import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatesyllbousRoutingModule } from './gatesyllbous-routing.module';
import { GatesyllbousComponent } from './gatesyllbous.component';


@NgModule({
  declarations: [GatesyllbousComponent],
  imports: [
    CommonModule,
    GatesyllbousRoutingModule
  ]
})
export class GatesyllbousModule { }
