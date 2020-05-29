import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CquizComponent } from './cquiz.component';

const routes: Routes = [{ path: '', component: CquizComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CquizRoutingModule { }
