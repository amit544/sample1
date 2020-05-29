import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { CquizRoutingModule } from './cquiz-routing.module';
import { CquizComponent } from './cquiz.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [CquizComponent],
  imports: [
    CommonModule,
    CquizRoutingModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class CquizModule { }
