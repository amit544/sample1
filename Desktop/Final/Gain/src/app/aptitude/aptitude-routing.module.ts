import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptitudeComponent } from './aptitude.component';

const routes: Routes = [{ path: '', component: AptitudeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AptitudeRoutingModule { }
