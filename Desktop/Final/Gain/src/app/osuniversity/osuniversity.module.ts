import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsuniversityRoutingModule } from './osuniversity-routing.module';
import { OsuniversityComponent } from './osuniversity.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [OsuniversityComponent],
  imports: [
    CommonModule,
    OsuniversityRoutingModule,
    MatCardModule
  ]
})
export class OsuniversityModule { }
