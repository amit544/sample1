import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatastructureComponent } from './datastructure.component';

const routes: Routes = [{ path: '', component: DatastructureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatastructureRoutingModule { }
