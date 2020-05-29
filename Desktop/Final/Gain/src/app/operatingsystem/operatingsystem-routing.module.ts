import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatingsystemComponent } from './operatingsystem.component';

const routes: Routes = [{ path: '', component: OperatingsystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatingsystemRoutingModule { }
