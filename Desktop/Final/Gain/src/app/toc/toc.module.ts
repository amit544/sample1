import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { MatCardModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatButtonModule} from '@angular/material';
import { TocRoutingModule } from './toc-routing.module';
import { TocComponent } from './toc.component';
import { from } from 'rxjs';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [TocComponent],
  imports: [
    CommonModule,
    TocRoutingModule,
    MatCardModule,
    MatTabsModule,
    NgbPaginationModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class TocModule { }
