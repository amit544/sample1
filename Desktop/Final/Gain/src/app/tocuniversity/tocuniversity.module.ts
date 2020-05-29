import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TocuniversityRoutingModule } from './tocuniversity-routing.module';
import { TocuniversityComponent } from './tocuniversity.component';
import { MatCardModule, MatFormFieldModule, MatSidenavModule, MatTabsModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [TocuniversityComponent],
  imports: [
    CommonModule,
    TocuniversityRoutingModule,
    MatCardModule,
    MatCardModule,
    MatTabsModule,
    NgbPaginationModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class TocuniversityModule { }
